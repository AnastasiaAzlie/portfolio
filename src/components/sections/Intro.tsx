'use client'

import SectionWrapper from "../ui/SectionWrapper"
import { motion } from "framer-motion"
import Link from 'next/link'
import { navLinks } from '../../constants/navLinks'

export default function Intro() {
    const aboutLink = navLinks.find(link => link.name === 'About')?.hash || '#about'
  return (
    <SectionWrapper 
      id="intro" 
      className="relative flex items-center justify-center h-screen text-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')]"></div>
      </div>
      
      {/* Content container */}
      <div className="max-w-4xl px-4 mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-300 mb-2"
        >
          Welcome to my digital space
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 py-4"
        >
          Anastasia Azlie
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-300 mt-8 max-w-2xl mx-auto"
        >
          Designer & developer creating elegant digital experiences. Let&apos;s build something amazing together.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
         <Link
        href={aboutLink}
        className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-indigo-500/30 dark:bg-indigo-500 dark:hover:bg-indigo-600 inline-block"
        >
            Explore my work
        </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-300 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}