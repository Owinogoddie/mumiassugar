import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Product } from "@/types";
import toast from "react-hot-toast";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
  openProductModal: (product: Product) => void;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60, transition: { duration: 0.6 } },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: 60, transition: { duration: 0.6 } },
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToCart,
  openProductModal,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      style: {
        background: "#4CAF50",
        color: "#fff",
      },
    });
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden relative"
      variants={fadeInUp}
      layout
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={192}
          className="w-full h-48 object-cover"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <ul className="list-disc list-inside mb-2">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p>Sustainability Score: {product.sustainabilityScore}/100</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-primary">
            KES {product.price} {product.unit}
          </span>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span>
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <motion.button
            className="bg-primary text-white px-4 py-2 rounded-full font-semibold"
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
          <motion.button
            className="bg-secondary text-white px-4 py-2 rounded-full font-semibold"
            onClick={() => openProductModal(product)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
