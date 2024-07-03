import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <footer className="bg-primary text-neutral-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Mumias Sugar Company</h3>
            <p>Sweet excellence since 1971</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>P.O. Box 50, Mumias, Kenya</p>
            <p>Phone: +254 (0) 123 456 789</p>
            <p>Email: info@mumiassugar.co.ke</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
              <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
              <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-white text-center">
          <p>&copy; 2024 Mumias Sugar Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
