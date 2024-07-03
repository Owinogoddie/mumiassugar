import { motion } from "framer-motion";
import Image from "next/image";

export const CompanyCulture = () => {
  return (
    <section className="py-20 bg-primary text-neutral-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Company Culture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/company-culture.jpg"
              alt="Employee Benefits"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Sweet Success, Together
            </h3>
            <p className="mb-4">
              At Mumias Sugar Company, we foster a culture of collaboration,
              innovation, and growth. Our team members are passionate about
              making a positive impact on the industry and our communities.
            </p>
            <ul className="list-disc list-inside">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Inclusive and diverse work environment
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Commitment to sustainability and community development
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Continuous learning and professional growth opportunities
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Recognition of individual and team achievements
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
