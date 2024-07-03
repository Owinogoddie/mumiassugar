import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "What are your customer service hours?",
    answer: "Our customer service team is available Monday through Friday, from 8am to 5pm EAT."
  },
  {
    question: "How can I place a bulk order?",
    answer: "For bulk orders, please contact our sales team at sales@mumiassugar.com or call +254 20 765 4321."
  },
  {
    question: "Do you offer tours of your facilities?",
    answer: "Yes, we offer guided tours of our sugar production facilities. Please contact us to schedule a visit."
  },
  {
    question: "How can I apply for a job at Mumias Sugar Company?",
    answer: "Visit our Careers page to view current job openings and submit your application online."
  },
  {
    question: "What types of sugar products do you offer?",
    answer: "We offer a variety of sugar products including white sugar, brown sugar, and specialty sugars. Visit our Products page for a full list."
  }
]

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-neutral-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                className="flex justify-between items-center w-full text-left p-4 bg-neutral-lightGray rounded-lg"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{activeIndex === index ? '−' : '+'}</span>
              </motion.button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="p-4 bg-white border border-neutral-lightGray rounded-b-lg">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}