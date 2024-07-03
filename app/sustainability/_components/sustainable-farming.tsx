import { motion } from "framer-motion";
import Image from "next/image";

const practices = [
  "Crop rotation to maintain soil health",
  "Integrated pest management to reduce chemical use",
  "Precision agriculture for efficient resource use",
  "Soil conservation techniques",
  "Use of organic fertilizers",
];

export const SustainableFarming = () => {
  return (
    <section className="py-20 bg-neutral-lightGray ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Sustainable Farming Practices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/sustainable-farming.jpg"
              alt="Sustainable Farming"
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
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Our Approach
            </h3>
            <p className="mb-4 text-green-400">
              We&apos;re committed to implementing sustainable farming practices
              that protect our environment and ensure the long-term viability of
              our operations:
            </p>
            <ul className="list-disc list-inside text-black">
              {practices.map((practice, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {practice}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
