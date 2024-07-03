import { motion } from 'framer-motion'

const news = [
  { title: 'Mumias Sugar Expands Production Capacity', date: 'May 15, 2024' },
  { title: 'New Sustainable Farming Initiative Launched', date: 'April 30, 2024' },
  { title: 'Mumias Sugar Wins Industry Excellence Award', date: 'April 12, 2024' },
]

export const LatestNews = () => {
  return (
    <section className="py-16 bg-neutral-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-neutral-white p-6 rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-darkGray mb-4">{item.date}</p>
              <a href="#" className="text-primary hover:underline">Read More</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
