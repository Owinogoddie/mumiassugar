import React, { useState, useEffect } from 'react';
import { FaInfoCircle, FaTimes } from 'react-icons/fa';

export const QuickViewTooltip: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const tooltipClosed = localStorage.getItem('tooltipClosed');
    if (!tooltipClosed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('tooltipClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 right-4 mx-auto max-w-sm md:max-w-md lg:max-w-lg bg-white text-black rounded-lg shadow-lg p-4 animate-slow-heartbeat z-50">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <FaTimes />
      </button>
      <div className="flex items-center mb-2">
        <FaInfoCircle className="text-blue-500 mr-2" />
        <h3 className="text-lg font-semibold">Quick Tip</h3>
      </div>
      <p className="text-sm">Hover over a product to see a quick preview of its details!</p>
    </div>
  );
};