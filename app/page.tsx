"use client";
import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { FeaturedProducts } from "./_components/featured-products";
import { AboutSection } from "./_components/about-section";
import { LatestNews } from "./_components/latest-news";
import { Footer } from "./_components/footer";
import ImageGalleryPreview from "./_components/image-galery-preview";
import NewsletterSubscribe from "./_components/newsletter";
import dynamic from "next/dynamic";

const AnimatedSection = dynamic(
  () => import("./_components/animated-section"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-white">
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
