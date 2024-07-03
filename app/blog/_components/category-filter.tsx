
import { motion } from 'framer-motion'

const categories: string[] = ["All", "Sustainability", "Industry News", "Company Updates", "Recipes", "Community"]
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  }
interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, setSelectedCategory }) => {
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
  )
}