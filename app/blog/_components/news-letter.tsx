import { motion } from 'framer-motion'

export const Newsletter: React.FC = () => {
  return (
    <motion.section
      className="bg-gray-100 py-20 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Subscribe to Our Newsletter</h2>
        <form className="max-w-lg mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow py-3 px-4 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <motion.button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-r-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </form>
      </div>
    </motion.section>
  )
}