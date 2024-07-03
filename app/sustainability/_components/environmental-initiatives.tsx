import { motion } from 'framer-motion'

const initiatives = [
  { title: "Water Conservation", description: "Implementing advanced irrigation systems and water recycling programs" },
  { title: "Renewable Energy", description: "Utilizing bagasse for bioenergy production, reducing our carbon footprint" },
  { title: "Waste Reduction", description: "Minimizing waste through recycling and upcycling programs" },
  { title: "Biodiversity Protection", description: "Preserving local ecosystems and promoting native plant species" },
]

export const EnvironmentalInitiatives = () => {
  return (
    <section className="py-20 bg-neutral-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Environmental Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div 
              key={initiative.title}
              className="bg-neutral-lightGray rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
              <p>{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}