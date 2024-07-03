import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/types';
import toast from 'react-hot-toast';

interface CartModalProps {
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  cart: Product[];
  removeFromCart: (productId: number) => void;
}

export const CartModal: React.FC<CartModalProps> = ({ showCart, setShowCart, cart, removeFromCart }) => {
  const handleRemoveFromCart = (product: Product) => {
    removeFromCart(product.id);
    toast.error(`${product.name} removed from cart`, {
      style: {
        background: '#F44336',
        color: '#fff',
      },
    });
  };

  return (
    <AnimatePresence>
      {showCart && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-black"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center mb-4">
                    <span>{item.name}</span>
                    <span>KES {item.price}</span>
                    <button
                      className="text-red-500"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="mt-4">
                  <strong>Total: KES {cart.reduce((total, item) => total + item.price, 0)}</strong>
                </div>
              </>
            )}
            <div className="mt-6 flex justify-end">
              <motion.button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2"
                onClick={() => setShowCart(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
              <motion.button
                className="bg-primary text-white px-4 py-2 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Checkout
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};