'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0f]" id="cta">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-[#00ff88]/5 via-[#00d4ff]/5 to-[#7c3aed]/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#e8e8ed] mb-4 tracking-tight">
            探索AI驱动的
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
              {' '}智能审计
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#9898a8] max-w-2xl mx-auto mb-10 leading-relaxed">
            我们的研究旨在为碳排放审计领域带来智能化变革。
            了解更多关于我们的研究方向与AI Lab的探索。
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/research"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm
                       bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0a0f]
                       hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-shadow duration-300"
          >
            了解更多
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/ai-lab"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm
                       border border-[#7c3aed]/30 text-[#e8e8ed]
                       hover:border-[#7c3aed]/60 hover:bg-[#7c3aed]/5 transition-all duration-300"
          >
            <Cpu className="w-4 h-4 text-[#7c3aed]" />
            AI Lab
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
