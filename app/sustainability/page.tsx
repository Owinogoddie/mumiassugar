'use client'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Navbar } from '../_components/navbar'
import { SustainabilityHero } from './_components/sustainability-hero'
import { EnvironmentalInitiatives } from './_components/environmental-initiatives'
import { CommunityImpact } from './_components/community-impact'
import { SustainableFarming } from './_components/sustainable-farming'
import { SustainabilityGoals } from './_components/sustainability-goals'
import { Footer } from '../_components/footer'
import Link from 'next/link'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-neutral-white">
      <Head>
        <title>Sustainability - Mumias Sugar Company</title>
        <meta name="description" content="Learn about Mumias Sugar Company&apos;s commitment to sustainability and environmental stewardship" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-32">
      <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-primary hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500">Sustainability</span>
          </nav>
        </div>
        <SustainabilityHero />
        <EnvironmentalInitiatives />
        <CommunityImpact />
        <SustainableFarming />
        <SustainabilityGoals />

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
              Our Commitment to a Sustainable Future
            </motion.h2>
            <motion.p 
              className="text-lg text-center max-w-3xl mx-auto text-black"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              At Mumias Sugar Company, sustainability isn&apos;t just a goal—it&apos;s a way of life. 
              We&apos;re committed to creating a positive impact on our environment, our communities, 
              and our industry for generations to come.
            </motion.p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}