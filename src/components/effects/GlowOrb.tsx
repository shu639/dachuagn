'use client'

import { motion } from 'framer-motion'

interface GlowOrbProps {
  color: string
  size: number
  top?: string
  left?: string
  right?: string
  bottom?: string
  opacity?: number
  blur?: number
  duration?: number
  delay?: number
}

export default function GlowOrb({
  color,
  size,
  top,
  left,
  right,
  bottom,
  opacity = 0.15,
  blur = 120,
  duration = 8,
  delay = 0,
}: GlowOrbProps) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        filter: `blur(${blur}px)`,
        opacity,
        top,
        left,
        right,
        bottom,
      }}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -30, 20, -10, 0],
        scale: [1, 1.15, 0.9, 1.05, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
