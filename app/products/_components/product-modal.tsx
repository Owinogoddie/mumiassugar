// _components/ProductModal.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { getRelatedProducts } from "@/data/products";
import { Product } from "@/types";
import Image from "next/image";

interface ProductModalProps {
  selectedProduct: Product | null;
  closeProductModal: () => void;
  addToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  selectedProduct,
  closeProductModal,
  addToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isBulkOrder, setIsBulkOrder] = useState(false);

  if (!selectedProduct) return null;

  const relatedProducts = getRelatedProducts(selectedProduct);

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    closeProductModal();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full max-h-90vh overflow-y-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold">{selectedProduct.name}</h2>
            <motion.button
              className="text-gray-500 hover:text-gray-700"
              onClick={closeProductModal}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={500}
                height={256}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center mb-2">
                <FaStar className="text-yellow-400 mr-1" />
                <span>
                  {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                </span>
              </div>
              <p className="text-2xl font-bold text-primary mb-4">
                KES {selectedProduct.price} {selectedProduct.unit}
              </p>
              <div className="flex items-center mb-4">
                <label htmlFor="quantity" className="mr-2">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="border rounded px-2 py-1 w-20"
                />
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="bulkOrder"
                  checked={isBulkOrder}
                  onChange={() => setIsBulkOrder(!isBulkOrder)}
                  className="mr-2"
                />
                <label htmlFor="bulkOrder">
                  Bulk Order (for business customers)
                </label>
              </div>
              {isBulkOrder && (
                <p className="text-sm text-gray-600 mb-4">
                  For bulk orders, please contact our sales team at
                  sales@mumias-sugar.com for custom pricing.
                </p>
              )}
              <motion.button
                className="w-full bg-primary text-white px-4 py-2 rounded-full font-semibold"
                onClick={handleAddToCart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Product Description
              </h3>
              <p className="mb-4">{selectedProduct.description}</p>
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside mb-4">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProduct.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-2 py-1 rounded-full text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Sustainability Score
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: `${selectedProduct.sustainabilityScore}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Our products are rated on a sustainability scale. This product
                scores {selectedProduct.sustainabilityScore}/100.
              </p>

              <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
              <div className="mb-4">
                {/* This is a placeholder for the reviews section. In a real application, you would fetch and display actual reviews here. */}
                <div className="bg-gray-100 p-4 rounded-lg mb-2">
                  <div className="flex items-center mb-2">
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                  </div>
                  <p className="font-semibold">Great product!</p>
                  <p className="text-sm text-gray-600">
                    This sugar is perfect for my baking needs. Highly
                    recommended!
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-yellow-400 mr-1" />
                    <FaStar className="text-gray-300 mr-1" />
                  </div>
                  <p className="font-semibold">Good quality</p>
                  <p className="text-sm text-gray-600">
                    The sugar dissolves well and has a nice flavor. Would buy
                    again.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">Related Products</h3>
              <div className="grid grid-cols-3 gap-4">
                {relatedProducts.map((product) => (
                  <div key={product.id} className="bg-gray-100 p-2 rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={90}
                      className="w-full h-20 object-cover rounded-lg mb-2"
                    />

                    <p className="font-semibold text-sm">{product.name}</p>
                    <p className="text-xs text-gray-600">KES {product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
