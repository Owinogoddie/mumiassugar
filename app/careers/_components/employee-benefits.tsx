import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  "Competitive salary packages",
  "Health and wellness programs",
  "Professional development opportunities",
  "Work-life balance initiatives",
  "Employee recognition programs",
  "Retirement savings plans",
];

export const EmployeeBenefits = () => {
  return (
    <section className="py-20 bg-accent-blue text-neutral-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Employee Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">We Value Our Team</h3>
            <p className="mb-4">
              At Mumias Sugar Company, we believe in taking care of our
              employees. Our comprehensive benefits package includes:
            </p>
            <ul className="list-disc list-inside">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/employee-benefits.jpg"
              alt="Employee Benefits"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
