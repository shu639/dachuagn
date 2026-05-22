'use client'

import { motion } from 'framer-motion'

interface DataFlowProps {
  className?: string
}

export default function DataFlow({ className }: DataFlowProps) {
  const lines = [
    { x1: '10%', y1: '20%', x2: '30%', y2: '50%', delay: 0 },
    { x1: '20%', y1: '80%', x2: '50%', y2: '60%', delay: 1.5 },
    { x1: '60%', y1: '30%', x2: '80%', y2: '70%', delay: 3 },
    { x1: '70%', y1: '10%', x2: '90%', y2: '40%', delay: 0.8 },
    { x1: '85%', y1: '60%', x2: '95%', y2: '80%', delay: 2.2 },
  ]

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ''}`}
      style={{ zIndex: 0 }}
    >
      {lines.map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#dataFlowGradient)"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.6, 0.6, 0] }}
          transition={{
            duration: 5,
            delay: line.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      <defs>
        <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  )
}
