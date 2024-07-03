import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/sugar-production.jpg", alt: "Sugar Production" },
  { src: "/sugar-cane-harvest.jpg", alt: "Sugar Cane Harvest" },
  { src: "/packaging-facility.jpg", alt: "Packaging Facility" },
  { src: "/community-outreach.jpg", alt: "Community Outreach" },
  { src: "/cane-fields1.jpg", alt: "Sugar Field" },
  { src: "/factory-exterior.jpg", alt: "Factory Exterior" },
];

const ImageGalleryPreview = () => {
  return (
    <section className="py-16 bg-neutral-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Gallery</h2>
        <div className="relative">
          <motion.div
            className="flex"
            animate={{ x: [0, -1920] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((image, index) => (
              <div
                key={`${image.alt}-${index}`}
                className="w-80 flex-shrink-0 mx-4"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/gallery"
            className="inline-block bg-accent-blue text-neutral-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImageGalleryPreview;
