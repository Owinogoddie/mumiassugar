import { motion } from "framer-motion";
import Image from "next/image";

const governanceItems = [
  "Board of Directors",
  "Executive Leadership Team",
  "Governance Policies",
  "Code of Ethics",
  "Risk Management",
  "Shareholder Rights",
];

export const CorporateGovernance = () => {
  return (
    <section className="py-20 bg-neutral-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Corporate Governance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/corporate-governance.jpg"
              alt="Corporate Governance"
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
              Our Commitment to Good Governance
            </h3>
            <p className="mb-4">
              Mumias Sugar Company is dedicated to maintaining the highest
              standards of corporate governance, ensuring transparency,
              accountability, and ethical business practices.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {governanceItems.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
