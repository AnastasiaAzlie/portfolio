'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import Image from 'next/image'
// import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
// import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

export default function About() {
  return (
    <SectionWrapper id="about" className='mx-auto'>
      <div className=" max-w-4xl mx-auto">
        <div className="flex flex-col gap-8 items-center space-y-8">
            {/* Profile Image - Now full width but constrained */}
            <motion.div
            className="w-full" // Constrained width
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            >
            <div className="relative mx-auto w-50 h-50 rounded-full overflow-hidden border-2 border-white dark:border-zinc-700 shadow-lg">
                <Image
                src="/images/anas.jpg"
                alt="Profile picture"
                width={320}
                height={320}
                className="object-cover"
                priority
                />
            </div>
            </motion.div>

            {/* Content - Now full width */}
            <motion.div
            className="w-full rounded-3xl " // Removed md:w-[60%]
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            >
            <h3 className="text-2xl font-bold mb-4 dark:text-white text-center">
                Hi, I&apos;m Anastasia! :D
            </h3>
            
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 text-justify">
                <h3>
                  A tech enthusiast with a strong passion for problem-solving, design, and building meaningful digital experiences. I specialize in software development and enjoy creating intuitive, user-focused solutions that blend functionality with creativity.
                </h3>
               
            </div>
            </motion.div>
        </div>
        </div>
    </SectionWrapper>
  )
}

// // function TechBadge({ icon, name }: { icon: React.ReactNode; name: string }) {
// //   return (
// //     <motion.div
// //       className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-sm"
// //       whileHover={{ y: -2 }}
// //       transition={{ type: 'spring', stiffness: 400, damping: 10 }}
// //     >
// //       {icon}
// //       <span className="text-sm font-medium dark:text-white">{name}</span>
// //     </motion.div>
// //   )
// }