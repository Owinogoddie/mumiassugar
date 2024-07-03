import { useState } from 'react'
import { motion } from 'framer-motion'

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e:any) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log('Subscribed with email:', email)
    setEmail('')
  }

  return (
    <section className="py-16 bg-accent-blue text-neutral-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8">Stay updated with our latest news and product releases.</p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 mb-4 md:mb-0 md:mr-4 rounded-full text-neutral-darkGray w-full md:w-auto"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-neutral-white font-bold py-2 px-8 rounded-full hover:bg-opacity-90 transition-colors"
              type="submit"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSubscribe