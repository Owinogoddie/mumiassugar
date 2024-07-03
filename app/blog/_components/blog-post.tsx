import { motion } from "framer-motion";
import Link from "next/link";
import { FaCalendar, FaUser, FaTags, FaComment, FaShare } from "react-icons/fa";
import { BlogPost as BlogPostType } from "@/data/blog-posts";
import Image from "next/image";

interface BlogPostProps {
  post: BlogPostType;
}

// Define the fadeInUp animation variant
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <motion.article
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      variants={fadeInUp}
      layout
    >
      <div className="w-full h-48 object-cover">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <FaCalendar className="mr-2" />
          <span>{post.date}</span>
          <FaUser className="ml-4 mr-2" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <FaTags className="mr-2" />
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-gray-200 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/blog/${post.id}`}
            className="text-primary font-semibold hover:underline"
          >
            Read More
          </Link>
          <div className="flex items-center">
            <FaComment className="mr-1" />
            <span>{post.comments}</span>
            <motion.button
              className="ml-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaShare />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
