import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';
import { useState } from 'react'

interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

const newsItems: NewsItem[] =[
  {
    title: "Mumias Sugar Achieves Record Production in Q2",
    date: "July 15, 2024",
    excerpt: "Our sustainable farming practices and modernized production facilities have led to a 20% increase in sugar yield...",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/news-1.jpg"
  },
  {
    title: "New Community Development Initiative Launched",
    date: "June 28, 2024",
    excerpt: "Mumias Sugar Company partners with local schools to provide education and training in sustainable agriculture...",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/news-2.jpg"
  },
  {
    title: "Mumias Sugar Wins Sustainability Award",
    date: "June 10, 2024",
    excerpt: "Our commitment to environmental stewardship and community development has been recognized at the annual Africa Agribusiness Awards...",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/news-3.jpg"
  }
]

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
}

export const LatestNews: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const openModal = (index: number) => {
    setSelectedNews(newsItems[index])
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedNews(null)
  }

  const nextNews = () => {
    const nextIndex = (currentIndex + 1) % newsItems.length
    setSelectedNews(newsItems[nextIndex])
    setCurrentIndex(nextIndex)
  }

  const prevNews = () => {
    const prevIndex = (currentIndex - 1 + newsItems.length) % newsItems.length
    setSelectedNews(newsItems[prevIndex])
    setCurrentIndex(prevIndex)
  }

  return (
    <section className="py-20 bg-neutral-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-neutral-lightGray rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={item.image} alt={item.title} width={500} height={500} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.date}</p>
                <p className="mb-4">{item.excerpt}</p>
                <motion.button
                  className="text-primary font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(index)}
                >
                  Read More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-3xl w-full p-8 relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                className="absolute top-4 right-4 text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4">{selectedNews.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{selectedNews.date}</p>
              <Image src={selectedNews.image} alt={selectedNews.title} width={500} height={264} className="w-full h-64 object-cover mb-4 rounded" />
              <p className="mb-4">{selectedNews.content}</p>
              <div className="flex justify-between mt-8">
                <motion.button
                  className="bg-primary text-white px-4 py-2 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevNews}
                  disabled={newsItems.length <= 1}
                >
                  Previous
                </motion.button>
                <motion.button
                  className="bg-primary text-white px-4 py-2 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextNews}
                  disabled={newsItems.length <= 1}
                >
                  Next
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}