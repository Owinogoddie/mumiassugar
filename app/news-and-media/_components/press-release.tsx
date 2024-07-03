import { motion } from 'framer-motion'

const pressReleases = [
  { title: "Mumias Sugar Company Announces Q2 Financial Results", date: "July 1, 2024" },
  { title: "New Partnership to Boost Sustainable Sugar Production", date: "June 15, 2024" },
  { title: "Mumias Sugar Expands Export Markets in East Africa", date: "May 30, 2024" },
  { title: "Annual Shareholder Meeting Scheduled for August 2024", date: "May 10, 2024" },
]

export const PressReleases = () => {
  return (
    <section className="py-20 bg-accent-blue text-neutral-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Press Releases</h2>
        <div className="max-w-3xl mx-auto">
          {pressReleases.map((release, index) => (
            <motion.div
              key={release.title}
              className="mb-6 pb-6 border-b border-white border-opacity-20 last:border-b-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
              <p className="text-sm mb-4">{release.date}</p>
              <motion.button
                className="bg-secondary text-primary px-4 py-2 rounded font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Full Release
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}