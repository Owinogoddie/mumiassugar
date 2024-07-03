import { Variants, motion } from 'framer-motion'

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 60 },
  };

export const Pagination: React.FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers: number[] = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <motion.div className="flex justify-center mt-12" variants={fadeInUp} initial="initial" animate="animate" exit="exit">
      {pageNumbers.map((number) => (
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
    </motion.div>
  )
}
