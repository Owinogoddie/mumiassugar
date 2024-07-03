'use client'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Navbar } from '../_components/navbar'
import { Footer } from '../_components/footer'
import { InvestorHero } from './_components/investors-hero'
import { FinancialHighlights } from './_components/financial-highlights'
import { StockInformation } from './_components/stock-information'
import { CorporateGovernance } from './_components/corporate-governance'
import { InvestorResources } from './_components/investor-resources'
import Link from 'next/link'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Investors() {
  return (
    <div className="min-h-screen bg-neutral-white">
      <Head>
        <title>Investor Relations - Mumias Sugar Company</title>
        <meta name="description" content="Financial information and resources for Mumias Sugar Company investors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-32">
      <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-primary hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500">Investors</span>
          </nav>
        </div>
        <InvestorHero />
        <FinancialHighlights />
        <StockInformation />
        <CorporateGovernance />
        <InvestorResources />

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
              Investing in a Sustainable Future
            </motion.h2>
            <motion.p
              className="text-lg text-center max-w-3xl mx-auto"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              At Mumias Sugar Company, we&apos;re committed to creating long-term value for our shareholders
              while maintaining our dedication to sustainability and community development.
            </motion.p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}