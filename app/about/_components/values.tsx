import { motion } from 'framer-motion'

const values = [
  { title: "Quality", description: "We are committed to producing the highest quality sugar products." },
  { title: "Sustainability", description: "We prioritize sustainable farming practices and environmental stewardship." },
  { title: "Community", description: "We believe in giving back to and empowering our local communities." },
  { title: "Innovation", description: "We continuously seek innovative solutions to improve our processes and products." },
]

export const Values = () => {
  return (
    <section className="py-20 bg-accent-blue text-neutral-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={value.title}
              className="bg-primary bg-opacity-20 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}