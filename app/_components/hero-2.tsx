import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export const Hero = () => {
  const backgroundRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const background = backgroundRef.current
    const content = contentRef.current

    gsap.fromTo(background, 
      { scale: 0.9, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1.5, 
        ease: "power3.out",
        onComplete: () => {
          gsap.to(background, {
            scale: 1.1,
            duration: 10,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
          })
        }
      }
    )

    gsap.from(content, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
  }, [])

  return (
    <motion.div
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/masterbill.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div ref={contentRef} className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4 text-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Sweet Excellence
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white mb-8 text-shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Kenya&apos;s Premier Sugar Producer
        </motion.p>
        <motion.button
          className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Discover Our Products
        </motion.button>
      </div>
    </motion.div>
  )
}