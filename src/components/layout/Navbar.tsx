'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, Atom } from 'lucide-react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#00ff88]/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Atom className="w-6 h-6 text-[#00ff88] group-hover:text-[#00d4ff] transition-colors duration-300" />
              <div className="absolute inset-0 blur-md bg-[#00ff88]/30 rounded-full group-hover:bg-[#00d4ff]/30 transition-colors duration-300" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-[#00ff88]">Green</span>
              <span className="text-[#e8e8ed]">Audit</span>
              <span className="text-[#00d4ff] ml-1 font-mono text-sm">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm text-[#9898a8] hover:text-[#e8e8ed] hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-[#e8e8ed]" />
          </button>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
