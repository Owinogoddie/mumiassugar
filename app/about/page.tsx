"use client";
import { motion } from "framer-motion";
import { Navbar } from "../_components/navbar-wrapper";
import { Timeline } from "./_components/timeline";
import { Values } from "./_components/values";
import { Team } from "./_components/team";
import { Footer } from "../_components/footer";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-white">
      <Navbar />

      <main className="pt-32">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500">About us</span>
          </nav>
        </div>
        <motion.section
          className="bg-gradient-to-br from-primary via-accent-blue to-secondary text-neutral-white py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-center"
              {...fadeIn}
            >
              Our Story
            </motion.h1>
            <motion.p
              className="text-xl text-center max-w-3xl mx-auto"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              From humble beginnings to becoming Kenya&apos;s leading sugar
              producer, Mumias Sugar Company has been sweetening lives since
              1971.
            </motion.p>
          </div>
        </motion.section>

        <Timeline />

        <Values />

        <Team />

        <motion.section
          className="py-20 bg-neutral-lightGray"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold mb-8 text-center text-primary"
              {...fadeIn}
            >
              Our Commitment
            </motion.h2>
            <motion.p
              className="text-lg text-center max-w-3xl mx-auto text-black"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              At Mumias Sugar Company, we&apos;re committed to sustainable
              farming practices, community development, and producing the
              highest quality sugar products. Our dedication to excellence
              drives everything we do.
            </motion.p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
