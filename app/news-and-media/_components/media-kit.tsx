import { motion } from 'framer-motion'

const mediaKitItems = [
  { title: "Company Logos", description: "Download our official logos in various formats" },
  { title: "Brand Guidelines", description: "Access our comprehensive brand usage guidelines" },
  { title: "Executive Bios", description: "Read about our leadership team" },
  { title: "Fact Sheet", description: "Get key facts and figures about Mumias Sugar Company" },
]

export const MediaKit = () => {
  return (
    <section className="py-20 bg-primary text-neutral-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Media Kit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mediaKitItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-accent-blue bg-opacity-20 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-4">{item.description}</p>
              <motion.button
                className="bg-secondary text-primary px-4 py-2 rounded font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Download
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}