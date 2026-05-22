'use client'

import { motion } from 'framer-motion'
import { Search, Cpu, ShieldAlert, Activity, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import SectionHeading from '@/components/shared/SectionHeading'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { RESEARCH_DIRECTIONS } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Cpu,
  ShieldAlert,
  Activity,
}

export default function ResearchDirections() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0f]" id="research-directions">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="研究方向"
          title="四大核心方向"
          description="以AI技术为核心，构建面向碳排放审计的全方位研究体系"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {RESEARCH_DIRECTIONS.map((direction, index) => {
            const Icon = iconMap[direction.icon] || Activity

            return (
              <ScrollReveal key={direction.id} delay={index * 0.1}>
                <Link href={`/research#${direction.id}`}>
                  <motion.div
                    className="relative group p-6 rounded-2xl bg-[#111118] border border-[#222233]
                               hover:border-current transition-all duration-500 h-full flex flex-col"
                    style={{ '--hover-color': direction.color } as React.CSSProperties}
                    whileHover={{ y: -6 }}
                  >
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${direction.color}20, ${direction.color}05)`,
                        border: `1px solid ${direction.color}30`,
                      }}
                    >
                      <span style={{ color: direction.color }}>
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-[#e8e8ed] mb-2.5 group-hover:text-white transition-colors">
                      {direction.title}
                    </h3>
                    <p className="text-sm text-[#9898a8] leading-relaxed mb-5 flex-1">
                      {direction.description}
                    </p>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {direction.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md"
                          style={{
                            color: direction.color,
                            backgroundColor: `${direction.color}08`,
                            border: `1px solid ${direction.color}20`,
                          }}
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-1 text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                      style={{ color: direction.color }}
                    >
                      了解更多
                      <ArrowUpRight className="w-3 h-3" />
                    </div>

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `0 0 40px ${direction.color}10, inset 0 0 40px ${direction.color}03`,
                      }}
                    />
                  </motion.div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
