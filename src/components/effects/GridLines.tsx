'use client'

import { motion } from 'framer-motion'

export default function GridLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(0, 212, 255, 0.6)"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern id="grid-large" width="240" height="240" patternUnits="userSpaceOnUse">
            <rect width="240" height="240" fill="url(#grid)" />
            <path
              d="M 240 0 L 0 0 0 240"
              fill="none"
              stroke="rgba(0, 255, 136, 0.3)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#grid-large)"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Perspective lines */}
      <svg
        className="absolute bottom-0 left-0 w-full h-64 opacity-[0.04]"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 15 }, (_, i) => {
          const x = (i / 14) * 1200
          return (
            <motion.line
              key={i}
              x1={x}
              y1={0}
              x2={x + (i - 7) * 40}
              y2={300}
              stroke="#00d4ff"
              strokeWidth={i % 3 === 0 ? 1 : 0.5}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 4,
                delay: i * 0.15,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}
