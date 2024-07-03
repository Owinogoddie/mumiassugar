import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '@/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

const fadeInUp = {
    initial: { opacity: 0, y: 60, transition: { duration: 0.6 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 60, transition: { duration: 0.6 } }
  };
  

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <motion.div className="flex flex-wrap justify-center mb-12 gap-2" variants={fadeInUp}>
      {categories.map((category) => (
        <motion.button
          key={category}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === category
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setSelectedCategory(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};