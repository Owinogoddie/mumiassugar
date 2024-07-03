import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
      <motion.img
        src="/cane-fieldS1.jpg"
        alt="Sugar cane field"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1, y: 20 }}
        animate={isHeroInView ? { scale: 1, y: 0 } : {}}
        transition={{ 
          duration: 1.5,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0.3 }}
        animate={isHeroInView ? { opacity: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.section>
  );
};