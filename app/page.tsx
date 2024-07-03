"use client";
import Head from "next/head";
import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { FeaturedProducts } from "./_components/featured-products";
import { AboutSection } from "./_components/about-section";
import { LatestNews } from "./_components/latest-news";
import { Footer } from "./_components/footer";
import { ReactNode, useRef } from "react";
import { useInView, motion } from "framer-motion";
import ImageGalleryPreview from "./_components/image-galery-preview";
import NewsletterSubscribe from "./_components/newsletter";
const AnimatedSection = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-white">
      <Head>
        <title>Mumias Sugar Company - Sweet Excellence</title>
        <meta
          name="description"
          content="Mumias Sugar Company - Kenya&apos;s premier sugar producer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="pt2">
        <Hero />
        <AnimatedSection>
          <FeaturedProducts />
        </AnimatedSection>
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection>
          <ImageGalleryPreview />
        </AnimatedSection>
        <AnimatedSection>
          <LatestNews />
        </AnimatedSection>
        <AnimatedSection>
          <NewsletterSubscribe />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
