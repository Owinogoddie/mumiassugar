"use client";
import { motion } from "framer-motion";
import { Navbar } from "../_components/navbar";
import { Footer } from "../_components/footer";
import { CareersHero } from "./_components/careers-hero";
import { JobOpenings } from "./_components/job-opennings";
import { EmployeeBenefits } from "./_components/employee-benefits";
import { ApplicationProcess } from "./_components/application-process";
import { CompanyCulture } from "./_components/company-culture";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Careers() {
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
            <span className="text-gray-500">Careers</span>
          </nav>
        </div>
        <CareersHero />
        <JobOpenings />
        <EmployeeBenefits />
        <ApplicationProcess />
        <CompanyCulture />

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
              Join Our Sweet Success Story
            </motion.h2>
            <motion.p
              className="text-lg text-center max-w-3xl mx-auto"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              At Mumias Sugar Company, we believe in nurturing talent and
              fostering growth. Join our team and be part of an organization
              that values innovation, sustainability, and community impact.
            </motion.p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
