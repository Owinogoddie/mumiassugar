'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../_components/navbar-wrapper';
import { Footer } from '../_components/footer';
import { Product, Category } from '@/types';
import { products } from '@/data/products';
import { Hero } from './_components/products-hero';
import { ProductSearch } from './_components/product-search';
import { ProductModal } from './_components/product-modal';
import { ProductComparisonTool } from './_components/product-comparison-wrapper';
import { QuickViewTooltip } from './_components/quick-view-tooltip';
import { CartModal } from './_components/cart-modal';
import { WhyChooseUs } from './_components/why-choose-us';
import { Pagination } from './_components/pagination';
import { ProductCard } from './_components/product-card';
import { CategoryFilter } from './_components/category-filter';
import Link from 'next/link';

const categories: Category[] = ["All", "Granulated Sugar", "Brown Sugar", "Specialty Sugars", "Syrups", "By-products"];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Products() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const productsPerPage = 6;

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory)
    );
    setFilteredProducts(results);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-neutral-white">
     

      <Navbar />

      <main className="pt-32 pb-20">
      <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-primary hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500">Products</span>
          </nav>
        </div>
        <Hero />

        <motion.section
          className="container mx-auto px-4 py-16"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={stagger}
        >
          <ProductSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            cartCount={cart.length}
            setShowCart={setShowCart}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
          >
            <AnimatePresence>
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  openProductModal={openProductModal}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </motion.section>

        <WhyChooseUs />
      </main>

      <Footer />

      <CartModal
        showCart={showCart}
        setShowCart={setShowCart}
        cart={cart}
        removeFromCart={removeFromCart}
      />

      <ProductModal
        selectedProduct={selectedProduct}
        closeProductModal={closeProductModal}
        addToCart={addToCart}
      />

      <ProductComparisonTool isOpen={showComparison} onClose={() => setShowComparison(false)} />

      {/* Product Comparison Button */}
      <motion.div
        className="fixed bottom-4 right-4 bg-white text-black rounded-lg shadow-lg p-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h3 className="text-lg font-semibold mb-2">Compare Products</h3>
        <p className="text-sm mb-2">Select products to compare their features side by side.</p>
        <motion.button
          className="bg-secondary text-black px-4 py-2 rounded-full font-semibold w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowComparison(true)}
        >
          Open Comparison Tool
        </motion.button>
      </motion.div>

      <QuickViewTooltip />
    </div>
  );
}