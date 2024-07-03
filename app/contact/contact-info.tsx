import { motion } from 'framer-motion'

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
          <p>Phone: +254 20 123 4567</p>
          <p>Email: support@mumiassugar.com</p>
          <p>Hours: Monday - Friday, 8am - 5pm EAT</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Sales Inquiries</h3>
          <p>Phone: +254 20 765 4321</p>
          <p>Email: sales@mumiassugar.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Press & Media</h3>
          <p>Phone: +254 20 987 6543</p>
          <p>Email: media@mumiassugar.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Investor Relations</h3>
          <p>Phone: +254 20 246 8135</p>
          <p>Email: investors@mumiassugar.com</p>
        </div>
      </div>
    </motion.div>
  )
}