"use client";
import { motion } from "framer-motion";
import { Navbar } from "../_components/navbar";
import { Footer } from "../_components/footer";
import { NewsHero } from "./_components/news-hero";
import { LatestNews } from "./_components/latest-news";
import { PressReleases } from "./_components/press-release";
import { MediaGallery } from "./_components/media-gallery";
import { MediaKit } from "./_components/media-kit";
import { NewsletterSignup } from "./_components/news-letter";
import Link from "next/link";
import Image from "next/image";
import { socialMediaPlatforms } from "../contact/social-media";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function NewsAndMedia() {
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
            <span className="text-gray-500">News and Media</span>
          </nav>
        </div>
        <NewsHero />
        <LatestNews />
        <PressReleases />
        <MediaGallery />
        <MediaKit />
        <NewsletterSignup />

        <motion.section
          className="py-20 bg-neutral-lightGray"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold mb-8 text-center"
              {...fadeIn}
            >
              Stay Connected with Mumias Sugar
            </motion.h2>
            <motion.p
              className="text-lg text-center max-w-3xl mx-auto"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Follow us on social media for real-time updates, behind-the-scenes
              content, and community stories.
            </motion.p>
            <motion.div
              className="flex justify-center space-x-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {socialMediaPlatforms.map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {platform.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
