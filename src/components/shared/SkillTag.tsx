'use client'

import { motion } from 'framer-motion'

interface SkillTagProps {
  label: string
  color?: string
}

export default function SkillTag({ label, color = '#00ff88' }: SkillTagProps) {
  return (
    <motion.span
      className="inline-block text-xs font-mono px-2.5 py-1 rounded-md border transition-colors duration-300"
      style={{
        color,
        borderColor: `${color}30`,
        backgroundColor: `${color}08`,
      }}
      whileHover={{
        scale: 1.05,
        borderColor: color,
        backgroundColor: `${color}18`,
      }}
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.span>
  )
}
