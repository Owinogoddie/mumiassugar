import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const galleryItems = [
  {
    type: "image",
    src: "/cane-fields1.jpg",
    alt: "Sugar cane fields",
    size: "large",
  },
  {
    type: "image",
    src: "/packaging-facility.jpg",
    alt: "Production facility",
    size: "small",
  },
  {
    type: "video",
    src: "/mms-video.mp4",
    poster: "/sugar-production.jpg",
    size: "medium",
  },
  {
    type: "image",
    src: "/community-outreach.jpg",
    alt: "Community outreach program",
    size: "small",
  },
  {
    type: "image",
    src: "/sustainable-farming.jpg",
    alt: "Sustainable farming practices",
    size: "medium",
  },
  {
    type: "image",
    src: "/white-sugar1.jpg",
    alt: "Product showcase",
    size: "small",
  },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const MediaGallery = () => {
  return (
    <section className="py-20 bg-neutral-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Media Gallery</h2>
        <div className="grid grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden shadow-md ${
                item.size === "large"
                  ? "col-span-2 row-span-2"
                  : item.size === "medium"
                  ? "col-span-2"
                  : ""
              }`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={"item.alt"}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  poster={item.poster}
                  controls
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
