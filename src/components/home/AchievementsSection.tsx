'use client'

import { motion } from 'framer-motion'
import { FileText, ClipboardList, BarChart3, FolderOpen, Presentation, Trophy, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionHeading from '@/components/shared/SectionHeading'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { ACHIEVEMENTS } from '@/lib/constants'

const typeConfig: Record<string, { icon: React.ComponentType<{ className?: string }>; label: string; color: string }> = {
  paper: { icon: FileText, label: '论文', color: '#00ff88' },
  report: { icon: ClipboardList, label: '报告', color: '#00d4ff' },
  data: { icon: BarChart3, label: '数据', color: '#7c3aed' },
  case: { icon: FolderOpen, label: '案例', color: '#f59e0b' },
  ppt: { icon: Presentation, label: 'PPT', color: '#ec4899' },
  award: { icon: Trophy, label: '获奖', color: '#f59e0b' },
}

export default function AchievementsSection() {
  const featured = ACHIEVEMENTS.filter((a) => a.featured)

  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0f]" id="achievements">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="研究成果"
          title="阶段成果展示"
          description="项目持续推进中，已产出多项研究成果"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {featured.map((achievement, index) => {
            const config = typeConfig[achievement.type] || typeConfig.paper
            const Icon = config.icon

            return (
              <ScrollReveal key={achievement.slug} delay={index * 0.1}>
                <Link href={`/achievements/${achievement.slug}`}>
                  <motion.div
                    className="relative group p-6 rounded-2xl bg-[#111118] border border-[#222233]
                               hover:border-current transition-all duration-500 h-full flex flex-col"
                    style={{ '--hover-color': config.color } as React.CSSProperties}
                    whileHover={{ y: -4 }}
                  >
                    {/* Type badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                          background: `${config.color}15`,
                          border: `1px solid ${config.color}30`,
                        }}
                      >
                        <span style={{ color: config.color }}><Icon className="w-4 h-4" /></span>
                      </div>
                      <span
                        className="text-xs font-mono font-medium px-2 py-0.5 rounded-md"
                        style={{
                          color: config.color,
                          backgroundColor: `${config.color}08`,
                        }}
                      >
                        {config.label}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-bold text-[#e8e8ed] mb-2 group-hover:text-white transition-colors line-clamp-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-[#9898a8] leading-relaxed mb-4 flex-1 line-clamp-3">
                      {achievement.description}
                    </p>

                    {/* Date & Tags */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-[#9898a8]/50 font-mono">
                        {achievement.date}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100"
                        style={{ color: config.color }}
                      >
                        查看
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        {/* View All */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
                       border border-[#222233] text-[#e8e8ed]
                       hover:border-[#00ff88]/30 hover:bg-[#00ff88]/5 transition-all duration-300"
          >
            查看全部成果
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
