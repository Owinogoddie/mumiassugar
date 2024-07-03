import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

interface ProductSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  cartCount: number;
  setShowCart: (show: boolean) => void;
}

const fadeInUp = {
    initial: { opacity: 0, y: 60, transition: { duration: 0.6 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 60, transition: { duration: 0.6 } }
  };

export const ProductSearch: React.FC<ProductSearchProps> = ({ searchTerm, setSearchTerm, cartCount, setShowCart }) => {
  return (
    <motion.div className="flex flex-wrap justify-between items-center mb-8" variants={fadeInUp}>
      <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full py-3 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <motion.button
        className="bg-primary text-white px-6 py-3 rounded-full font-semibold flex items-center"
        onClick={() => setShowCart(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaShoppingCart className="mr-2" />
        Cart ({cartCount})
      </motion.button>
    </motion.div>
  );
};