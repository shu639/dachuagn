'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ShieldAlert, Activity, Fingerprint, Cpu } from 'lucide-react'
import Link from 'next/link'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldAlert,
  Activity,
  Fingerprint,
  Cpu,
}

interface AIPlaceholderProps {
  title: string
  description: string
  icon: string
  color: string
  tech: string[]
  features: string[]
}

export default function AIPlaceholder({ title, description, icon, color, tech, features }: AIPlaceholderProps) {
  const Icon = iconMap[icon] || Cpu

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/ai-lab"
          className="inline-flex items-center gap-2 text-sm text-[#9898a8] hover:text-[#00ff88] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          返回 AI Lab
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{
              background: `linear-gradient(135deg, ${color}20, ${color}05)`,
              border: `1px solid ${color}30`,
            }}
          >
            <span style={{ color }}><Icon className="w-8 h-8" /></span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#e8e8ed] mb-4">{title}</h1>
          <p className="text-base text-[#9898a8] leading-relaxed mb-8">{description}</p>
        </motion.div>

        {/* Status badge */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20">
            <div className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
            <span className="text-sm font-medium text-[#f59e0b]">功能开发中 · Coming Soon</span>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-sm font-semibold text-[#e8e8ed] uppercase tracking-wider mb-4">预期功能</h2>
          <div className="grid grid-cols-2 gap-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-[#111118] border border-[#222233] text-sm text-[#9898a8]"
              >
                {f}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-[#e8e8ed] uppercase tracking-wider mb-4">技术栈</h2>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1.5 rounded-lg border"
                style={{
                  color,
                  borderColor: `${color}30`,
                  backgroundColor: `${color}08`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
