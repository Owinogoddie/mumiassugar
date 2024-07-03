import { motion } from 'framer-motion'

export const NewsHero = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-primary via-accent-blue to-secondary text-neutral-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          News & Media Center
        </motion.h1>
        <motion.p
          className="text-xl text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover the latest updates, stories, and insights from Mumias Sugar Company
        </motion.p>
      </div>
    </motion.section>
  )
}