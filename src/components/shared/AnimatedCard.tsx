'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function AnimatedCard({ children, className, onClick }: AnimatedCardProps) {
  return (
    <motion.div
      className={`relative group rounded-2xl bg-[#16161f] border border-[#222233]
        hover:border-[#00ff88]/20 transition-colors duration-500
        overflow-hidden cursor-default ${className ?? ''}`}
      onClick={onClick}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      {/* Card glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,255,136,0.06), transparent 40%)',
        }}
      />
      {/* Gradient border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#00ff88]/5 via-transparent to-[#00d4ff]/5" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
