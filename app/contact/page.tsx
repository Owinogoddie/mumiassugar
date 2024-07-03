'use client'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navbar } from '../_components/navbar'
import { Footer } from '../_components/footer'
import Link from 'next/link'
import { ContactHero } from './contact-hero'
import { ContactForm } from './contact-form'
import { ContactInfo } from './contact-info'
import { OfficeLocations } from './office-locations'
import { SocialMediaContacts } from './social-media'
import { FAQSection } from './faq'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-white">
      <Head>
        <title>Contact Us - Mumias Sugar Company</title>
        <meta name="description" content="Get in touch with Mumias Sugar Company for inquiries, support, or partnerships" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-32">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-primary hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500">Contact Us</span>
          </nav>
        </div>

        <ContactHero />
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm setFormSubmitted={setFormSubmitted} />
            <ContactInfo />
          </div>
        </div>

        {/* Form Submission Confirmation */}
        {formSubmitted && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p>Your message has been sent successfully. We&apos;ll get back to you soon.</p>
              <button
                className="mt-4 bg-primary text-white px-4 py-2 rounded"
                onClick={() => setFormSubmitted(false)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}

        <OfficeLocations />

        {/* Map Component */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817181083339!2d34.48805931475384!3d0.3349899997471595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101e2de00e2e7%3A0x9e7752b9b52567e8!2sMumias%20Sugar%20Company%20Limited!5e0!3m2!1sen!2sus!4v1625672988776!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        <SocialMediaContacts />
        <FAQSection />

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
              We&apos;re Here to Help
            </motion.h2>
            <motion.p
              className="text-lg text-center max-w-3xl mx-auto"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Whether you have a question, feedback, or a business proposal, we&apos;re always eager to hear from you. 
              Choose the method that suits you best, and we&apos;ll get back to you as soon as possible.
            </motion.p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}