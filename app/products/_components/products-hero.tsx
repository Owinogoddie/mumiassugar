import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Hero: React.FC = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <motion.section
      ref={heroRef}
      className="relative h-96 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isHeroInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.section
        className="bg-gradient-to-br from-primary via-accent-blue to-secondary text-neutral-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Company products
          </motion.h1>
          <motion.p
            className="text-xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sweetening Lives, Nourishing Communities
          </motion.p>
          <motion.p
            className="text-sm text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          > Our products are processed using state-of-the-art
            technology, ensuring the highest standards of purity and taste. From
            farm to table, we guarantee sweetness you can trust. Experience the
            Mumias Sugar difference today.
          </motion.p>
        </div>
      </motion.section>
    </motion.section>
  );
};
