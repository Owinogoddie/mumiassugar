import { motion, AnimatePresence, Variants } from 'framer-motion'
import { BlogPost as BlogPostType } from '@/data/blog-posts'
import { BlogPost } from './blog-post';

interface BlogGridProps {
  currentPosts: BlogPostType[];
}

const stagger: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

export const BlogGrid: React.FC<BlogGridProps> = ({ currentPosts }) => {
  return (
    <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4"
    variants={stagger}
  >
      <AnimatePresence>
        {currentPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}