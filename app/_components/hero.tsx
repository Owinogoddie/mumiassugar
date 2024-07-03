import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const calculateRotation = (x:any, y:any) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const rotateX = -(y - centerY) / 50
    const rotateY = (x - centerX) / 50
    return `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  return (
    <motion.div 
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary via-accent-blue to-secondary overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="absolute inset-0 bg-black opacity-50"
        animate={{
          backgroundPosition: [
            '0% 0%',
            '100% 100%',
            '0% 100%',
            '100% 0%',
            '0% 0%'
          ]
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity
        }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-neutral-white mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.5 
          }}
          style={{
            transform: calculateRotation(mousePosition.x, mousePosition.y)
          }}
        >
          Sweet Excellence
        </motion.h1>
        <motion.p 
          className="text-xl md:text-3xl text-neutral-white mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Kenya&apos;s Premier Sugar Producer
        </motion.p>
        <motion.button 
          className="bg-accent-gold text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Discover Our Products
        </motion.button>
      </div>
      <motion.div
        className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-gold rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-60 h-60 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  )
}