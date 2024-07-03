import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "White Sugar", image: "/mumias-white.png" },
  { name: "Brown Sugar", image: "/brown-sugar.webp" },
  { name: "Icing Sugar", image: "/icing.webp" },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-neutral-lightGray text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-neutral-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={192}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <button className="bg-primary text-neutral-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors">
                  <Link href="/products">Learn More</Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
