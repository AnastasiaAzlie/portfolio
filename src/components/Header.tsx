'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'
import { navLinks } from '../constants/navLinks'

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSection()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6">
    <nav className="max-w-4xl mx-auto w-full ">
        <div className="w-fit mx-auto p-3 border rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {navLinks.map((link) => (
            <li key={link.hash} className="flex-shrink-0">
                <Link
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
                className={`relative px-3 py-2 text-sm sm:text-base transition whitespace-nowrap ${
                    activeSection === link.name
                    ? 'text-primary dark:text-primary-light'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                }`}
                >
                {link.name}
                {activeSection === link.name && (
                    <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 -z-10 bg-primary/10 bg-gray-50 dark:bg-zinc-700 rounded-2xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                )}
                </Link>
            </li>
            ))}
        </ul>
        </div>
    </nav>
    </header>
  )
}