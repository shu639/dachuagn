'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import Link from 'next/link'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-72 bg-[#111118] border-l border-[#222233] z-50 p-6"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-[#9898a8]" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="px-4 py-3 rounded-lg text-[#e8e8ed] hover:bg-[#00ff88]/5 hover:text-[#00ff88] transition-all duration-200 text-base font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="absolute bottom-8 left-6 right-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#222233] to-transparent mb-6" />
              <p className="text-xs text-[#9898a8] font-mono">南京审计大学 · 国家级大创项目</p>
              <p className="text-xs text-[#00ff88]/60 font-mono mt-1">GreenAudit AI</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
