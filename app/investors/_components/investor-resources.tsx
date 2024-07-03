import { motion } from 'framer-motion'

const resources = [
  { title: "Annual Reports", description: "Access our detailed annual financial reports and performance reviews." },
  { title: "Quarterly Results", description: "Stay updated with our quarterly financial statements and earnings calls." },
  { title: "Investor Presentations", description: "View our latest investor presentations and strategy updates." },
  { title: "Regulatory Filings", description: "Access all our regulatory filings and disclosures." },
]

export const InvestorResources = () => {
  return (
    <section className="py-20 bg-primary text-neutral-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Investor Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="bg-accent-blue bg-opacity-20 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p>{resource.description}</p>
              <motion.button
                className="mt-4 bg-secondary text-primary px-4 py-2 rounded font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resources
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}