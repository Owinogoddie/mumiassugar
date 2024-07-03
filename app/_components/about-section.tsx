import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="py-16 bg-neutral-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">About Mumias Sugar</h2>
            <p className="text-lg text-neutral-darkGray mb-4">
              Mumias Sugar Company is Kenya&apos;s leading sugar producer,
              committed to delivering high-quality sugar products while
              supporting local communities and sustainable farming practices.
            </p>
            <button className="bg-secondary text-neutral-white font-bold py-2 px-6 rounded hover:bg-opacity-90 transition-colors">
              Learn More
            </button>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/cane-fields.jpg"
              alt="Sugar Cane Field"
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
