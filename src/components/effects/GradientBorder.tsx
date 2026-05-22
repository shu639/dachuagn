'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GradientBorderProps {
  children: ReactNode
  className?: string
  colors?: string[]
  borderWidth?: number
  borderRadius?: number
}

export default function GradientBorder({
  children,
  className,
  colors = ['#00ff88', '#00d4ff', '#7c3aed'],
  borderWidth = 1,
  borderRadius = 16,
}: GradientBorderProps) {
  return (
    <div className={`relative ${className ?? ''}`} style={{ borderRadius }}>
      <motion.div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `linear-gradient(135deg, ${colors.join(', ')})`,
          borderRadius,
          padding: borderWidth,
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-full h-full"
          style={{
            background: '#16161f',
            borderRadius: borderRadius - borderWidth,
          }}
        />
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
