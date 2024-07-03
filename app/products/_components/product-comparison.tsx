import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types";
import { products } from "@/data/products";
import Image from "next/image";

export interface ProductComparisonToolProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductComparisonTool: React.FC<ProductComparisonToolProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const productsPerPage = 6;

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMounted) {
    return null;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleProductSelect = (product: Product) => {
    if (
      selectedProducts.length < 3 &&
      !selectedProducts.some((p) => p.id === product.id)
    ) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleProductRemove = (productId: number) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== productId));
  };

  const renderProductItem = (product: Product) => {
    if (isMobile) {
      return (
        <motion.div
          key={product.id}
          className={`bg-gray-100 p-2 rounded-lg cursor-pointer mb-2 ${
            selectedProducts.some((p) => p.id === product.id)
              ? "border-2 border-primary"
              : ""
          }`}
          onClick={() => handleProductSelect(product)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center">
            <Image
              src={product.image}
              alt={product.name}
              width={64}
              height={64}
              className="w-16 h-16 object-cover rounded-lg mr-4"
            />{" "}
            <p className="font-semibold text-sm">{product.name}</p>
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div
        key={product.id}
        className={`bg-gray-100 p-2 rounded-lg cursor-pointer ${
          selectedProducts.some((p) => p.id === product.id)
            ? "border-2 border-primary"
            : ""
        }`}
        onClick={() => handleProductSelect(product)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={80}
          className="w-full h-20 object-cover rounded-lg mb-2"
        />
        <p className="font-semibold text-sm">{product.name}</p>
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] flex flex-col"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-bold">Product Comparison</h2>
              <motion.button
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>

            <div className="flex-grow overflow-y-auto">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  Select Products to Compare (up to 3)
                </h3>
                <div className={isMobile ? "" : "grid grid-cols-3 gap-4"}>
                  {currentProducts.map(renderProductItem)}
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 rounded-l-lg"
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2 bg-gray-100">
                    Page {currentPage} of{" "}
                    {Math.ceil(products.length / productsPerPage)}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(
                          prev + 1,
                          Math.ceil(products.length / productsPerPage)
                        )
                      )
                    }
                    disabled={
                      currentPage ===
                      Math.ceil(products.length / productsPerPage)
                    }
                    className="px-4 py-2 bg-gray-200 rounded-r-lg"
                  >
                    Next
                  </button>
                </div>
              </div>

              {selectedProducts.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-2">Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border p-2">Feature</th>
                          {selectedProducts.map((product) => (
                            <th key={product.id} className="border p-2">
                              {product.name}
                              <button
                                className="ml-2 text-red-500"
                                onClick={() => handleProductRemove(product.id)}
                              >
                                Remove
                              </button>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Price</td>
                          {selectedProducts.map((product) => (
                            <td key={product.id} className="border p-2">
                              KES {product.price}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="border p-2">Category</td>
                          {selectedProducts.map((product) => (
                            <td key={product.id} className="border p-2">
                              {product.category}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="border p-2">Rating</td>
                          {selectedProducts.map((product) => (
                            <td key={product.id} className="border p-2">
                              {product.rating} ({product.reviews} reviews)
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="border p-2">Sustainability Score</td>
                          {selectedProducts.map((product) => (
                            <td key={product.id} className="border p-2">
                              {product.sustainabilityScore}/100
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="border p-2">Features</td>
                          {selectedProducts.map((product) => (
                            <td key={product.id} className="border p-2">
                              <ul>
                                {product.features.map((feature, index) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="border p-2">Certifications</td>
                          {selectedProducts.map((product) => (
                            <td key={product.id} className="border p-2">
                              <ul>
                                {product.certifications.map((cert, index) => (
                                  <li key={index}>{cert}</li>
                                ))}
                              </ul>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Close Comparison
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ProductComparisonTool;
