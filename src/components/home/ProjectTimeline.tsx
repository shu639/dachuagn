'use client'

import { motion } from 'framer-motion'
import { Rocket, Database, Brain, FileText, Trophy, Check, Clock, Circle } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { PROJECT_TIMELINE } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Database,
  Brain,
  FileText,
  Trophy,
}

const statusConfig = {
  completed: { icon: Check, color: '#00ff88', bg: '#00ff8818', label: '已完成' },
  'in-progress': { icon: Clock, color: '#f59e0b', bg: '#f59e0b18', label: '进行中' },
  upcoming: { icon: Circle, color: '#00d4ff', bg: '#00d4ff18', label: '计划中' },
}

export default function ProjectTimeline() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0f]" id="timeline">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="项目进度"
          title="研究时间轴"
          description="从项目启动到结项，完整的科研路径规划"
        />

        <div className="relative mt-16">
          {/* Central vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-[#00ff88]/60 via-[#00d4ff]/40 to-[#7c3aed]/20"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ originY: 0 }}
            />
          </div>

          {/* Timeline nodes */}
          {PROJECT_TIMELINE.map((node, index) => {
            const Icon = iconMap[node.icon] || Circle
            const status = statusConfig[node.status]
            const StatusIcon = status.icon
            const isLeft = index % 2 === 0

            return (
              <ScrollReveal key={node.date} delay={index * 0.15}>
                <div
                  className={`flex items-start gap-5 md:gap-0 relative mb-12 last:mb-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Node dot */}
                  <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 mt-1">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border-2 bg-[#111118]"
                      style={{
                        borderColor: `${status.color}40`,
                        background: `linear-gradient(135deg, ${status.bg}, transparent)`,
                      }}
                      whileHover={{ scale: 1.15, borderColor: status.color }}
                      transition={{ duration: 0.3 }}
                    >
                      <span style={{ color: status.color }}><Icon className="w-5 h-5" /></span>
                    </motion.div>
                    {/* Pulse for in-progress */}
                    {node.status === 'in-progress' && (
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2"
                        style={{ borderColor: `${status.color}30` }}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 md:w-[calc(50%-40px)] ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <motion.div
                      className="p-5 rounded-xl bg-[#111118] border border-[#222233] hover:border-[#333355] transition-all duration-300"
                      whileHover={{ y: -2 }}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                        <span className="text-sm font-mono font-bold text-[#00ff88]">
                          {node.date}
                        </span>
                        <span
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1"
                          style={{
                            color: status.color,
                            backgroundColor: status.bg,
                          }}
                        >
                          <StatusIcon className="w-2.5 h-2.5" />
                          {status.label}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#e8e8ed] mb-1.5">{node.title}</h3>
                      <p className="text-sm text-[#9898a8] leading-relaxed">{node.description}</p>
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
