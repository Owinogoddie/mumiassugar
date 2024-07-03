import { motion } from 'framer-motion'

export const NewsletterSignup = () => {
  return (
    <section className="py-20 bg-neutral-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto bg-accent-blue text-neutral-white rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Stay Informed</h2>
          <p className="text-center mb-8">Subscribe to our newsletter for the latest updates and insights from Mumias Sugar Company.</p>
          <form className="flex flex-col md:flex-row gap-4">
            <motion.input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-2 rounded text-primary"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            />
            <motion.button
              type="submit"
              className="bg-secondary text-primary px-6 py-2 rounded font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}