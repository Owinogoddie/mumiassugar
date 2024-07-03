// _components/Pagination.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: 60 },
//   transition: { duration: 0.6 }
// };
const fadeInUp = {
    initial: { opacity: 0, y: 60, transition: { duration: 0.6 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 60, transition: { duration: 0.6 } }
  };
  
export const Pagination: React.FC<PaginationProps> = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxVisiblePages = 5;
  const halfVisiblePages = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(currentPage - halfVisiblePages, 1);
  let endPage = Math.min(startPage + maxVisiblePages - 1, pageNumbers.length);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  return (
    <motion.div className="flex justify-center mt-12" variants={fadeInUp}>
      {currentPage > 1 && (
        <motion.button
          className="mx-1 px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
          onClick={() => paginate(currentPage - 1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          &laquo;
        </motion.button>
      )}

      {startPage > 1 && (
        <>
          <motion.button
            className="mx-1 px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            1
          </motion.button>
          {startPage > 2 && <span className="mx-2">...</span>}
        </>
      )}

      {pageNumbers.slice(startPage - 1, endPage).map((number) => (
        <motion.button
          key={number}
          className={`mx-1 px-4 py-2 rounded ${
            currentPage === number
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => paginate(number)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {number}
        </motion.button>
      ))}

      {endPage < pageNumbers.length && (
        <>
          {endPage < pageNumbers.length - 1 && <span className="mx-2">...</span>}
          <motion.button
            className="mx-1 px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            onClick={() => paginate(pageNumbers.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {pageNumbers.length}
          </motion.button>
        </>
      )}

      {currentPage < pageNumbers.length && (
        <motion.button
          className="mx-1 px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
          onClick={() => paginate(currentPage + 1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          &raquo;
        </motion.button>
      )}
    </motion.div>
  );
};