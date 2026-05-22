'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ParticleBackground from '@/components/effects/ParticleBackground'
import GridLines from '@/components/effects/GridLines'
import GlowOrb from '@/components/effects/GlowOrb'
import DataFlow from '@/components/effects/DataFlow'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Background effects */}
      <ParticleBackground />
      <GridLines />
      <DataFlow />

      {/* Glow Orbs */}
      <GlowOrb color="#00ff88" size={500} top="10%" right="5%" opacity={0.12} blur={140} duration={10} />
      <GlowOrb color="#00d4ff" size={400} bottom="15%" left="5%" opacity={0.1} blur={120} duration={12} delay={2} />
      <GlowOrb color="#7c3aed" size={300} top="60%" left="40%" opacity={0.06} blur={100} duration={14} delay={4} />

      {/* Radial gradient vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, #0a0a0f 80%)',
          zIndex: 1,
        }}
      />

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity, y, scale }}
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[#00ff88] border border-[#00ff88]/20 rounded-full px-4 py-1.5 mb-8 bg-[#00ff88]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            大学生创新创业训练计划 · 国家级立项
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block text-[#e8e8ed]">应对&ldquo;新形态&rdquo;</span>
          <span className="block bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
            洗绿行为
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-[#9898a8] font-light tracking-wide mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          AI驱动的碳排放舞弊审计研究
        </motion.p>

        {/* School */}
        <motion.p
          className="text-sm text-[#9898a8]/60 font-mono mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          南京审计大学 · 国家级大学生创新训练计划项目
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link
            href="#research-framework"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm
                       bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0a0f]
                       hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-shadow duration-300"
          >
            查看研究框架
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#achievements"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm
                       border border-[#222233] text-[#e8e8ed]
                       hover:border-[#00ff88]/30 hover:bg-[#00ff88]/5 transition-all duration-300"
          >
            浏览研究成果
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#9898a8]/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-[#00ff88]/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
