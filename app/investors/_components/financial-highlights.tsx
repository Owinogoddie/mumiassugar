import { motion } from 'framer-motion'

const financialData = [
  { label: 'Revenue', value: 'ksh567M', change: '+12%' },
  { label: 'EBITDA', value: 'ksh128M', change: '+8%' },
  { label: 'Net Profit', value: 'ksh78M', change: '+15%' },
  { label: 'EPS', value: 'ksh2.34', change: '+14%' },
]

export const FinancialHighlights = () => {
  return (
    <section className="py-20 bg-neutral-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Financial Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {financialData.map((item, index) => (
            <motion.div
              key={item.label}
              className="bg-neutral-lightGray rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
              <p className="text-3xl font-bold text-primary">{item.value}</p>
              <p className={`text-sm ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {item.change} YoY
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}