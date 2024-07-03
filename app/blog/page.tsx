"use client";
import { useState, useEffect } from "react";
import { Variants, motion } from "framer-motion";
import { blogPosts, BlogPost } from "@/data/blog-posts";
import { Navbar } from "../_components/navbar-wrapper";
import { SearchBar } from "./_components/search-bar";
import { CategoryFilter } from "./_components/category-filter";
import { BlogGrid } from "./_components/blog-grid";
import { Pagination } from "./_components/pagination";
import { Newsletter } from "./_components/news-letter";
import { Footer } from "../_components/footer";
import Link from "next/link";

const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
};

export default function Blog(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage: number = 6;

  useEffect(() => {
    const results = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || post.category === selectedCategory)
    );
    setFilteredPosts(results);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  const currentPosts: BlogPost[] = filteredPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-neutral-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500">Blog</span>
          </nav>
        </div>
        <motion.section
          className="bg-gradient-to-br from-primary via-accent-blue to-secondary text-neutral-white py-20"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={stagger}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 text-center"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Mumias Sugar Blog
          </motion.h1>
          <motion.p
            className="text-xl text-center mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Dive into the world of sugar production, sustainability, and
            community impact with our latest articles and insights.
          </motion.p>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <BlogGrid currentPosts={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={filteredPosts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </motion.section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
