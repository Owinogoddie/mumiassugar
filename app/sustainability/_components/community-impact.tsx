import { motion } from 'framer-motion'
import Image from 'next/image'

export const CommunityImpact = () => {
  return (
    <section className="py-20 bg-accent-blue text-neutral-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Community Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Empowering Local Communities</h3>
            <p className="mb-4">
              We believe in giving back to the communities that support us. Through various 
              initiatives, we aim to create lasting positive impact:
            </p>
            <ul className="list-disc list-inside">
              <li>Educational scholarships for local students</li>
              <li>Healthcare support programs</li>
              <li>Job training and skill development workshops</li>
              <li>Supporting local businesses and entrepreneurs</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <Image
              src="/community-impact.jpg"
              alt="Community Impact"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
