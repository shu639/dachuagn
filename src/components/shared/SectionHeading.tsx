'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-[#00ff88] mb-4 bg-[#00ff88]/10 px-4 py-1.5 rounded-full">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#e8e8ed] mt-4">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#9898a8] max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      {/* Animated underline */}
      <motion.div
        className="h-px mt-6 mx-auto max-w-[120px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #00ff88, #00d4ff, transparent)',
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  )
}
