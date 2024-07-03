import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaCertificate, FaInfoCircle } from 'react-icons/fa';

export const WhyChooseUs: React.FC = () => {
  return (
    <motion.section
      className="bg-gray-100 py-20 text-green-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Products?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5 }}
          >
            <FaLeaf className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Sustainably Sourced</h3>
            <p>Our sugarcane is grown using environmentally friendly practices, ensuring a lower carbon footprint.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5 }}
          >
            <FaCertificate className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Quality Certified</h3>
            <p>All our products meet stringent quality standards and are certified by recognized international bodies.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5 }}
          >
            <FaInfoCircle className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Nutritional Value</h3>
            <p>Our products retain natural minerals and vitamins, providing more than just sweetness to your diet.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};