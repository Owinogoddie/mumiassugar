import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { name: "John Doe", position: "CEO", image: "/john-doe.jpg" },
  { name: "Jane Smith", position: "COO", image: "/jane-smith.jpg" },
  { name: "Michael Johnson", position: "CFO", image: "/john-doe.jpg" },
  {
    name: "Emily Brown",
    position: "Head of Sustainability",
    image: "/john-doe.jpg",
  },
];

export const Team = () => {
  return (
    <section className="py-20 bg-neutral-white text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-neutral-lightGray rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-neutral-darkGray">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
