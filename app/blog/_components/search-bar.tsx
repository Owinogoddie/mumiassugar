import { motion } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  }

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <motion.div className="flex flex-wrap justify-center mb-8" variants={fadeInUp}>
      <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full py-3 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </motion.div>
  )
}