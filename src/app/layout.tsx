import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
// import GradientBackground from '../components/GradientBackground'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Anastasia's Portfolio",
  description: 'Professional Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        
        <main className='lg:px-80 md:px-40 px-10 space-y-32 py-32'>{children}</main>
      </body>
    </html>
  )
}