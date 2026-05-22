'use client'

import { motion } from 'framer-motion'
import { FileSearch, Bot, Fingerprint, Shield, RefreshCw, ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { FRAMEWORK_STEPS } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileSearch,
  Bot,
  Fingerprint,
  Shield,
  RefreshCw,
}

export default function ResearchFramework() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0f]" id="research-framework">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00ff88]/[0.02] blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading
          label="研究框架"
          title="从舞弊识别到审计重构"
          description="五阶段递进式研究路径，构建完整的智能化审计反制体系"
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <div className="h-full w-full bg-gradient-to-b from-[#00ff88]/50 via-[#00d4ff]/30 to-[#7c3aed]/20" />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-0">
            {FRAMEWORK_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon] || FileSearch
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={step.step}
                  className={`flex items-start gap-6 md:gap-0 relative py-8 md:py-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  {/* Node on timeline */}
                  <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 bg-[#111118]"
                      style={{
                        borderColor: `${step.color}40`,
                        background: `linear-gradient(135deg, ${step.color}15, transparent)`,
                      }}
                      whileHover={{
                        scale: 1.1,
                        borderColor: step.color,
                        boxShadow: `0 0 30px ${step.color}30`,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span style={{ color: step.color }}><Icon className="w-6 h-6" /></span>
                    </motion.div>

                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2"
                      style={{ borderColor: `${step.color}30` }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 md:w-[calc(50%-60px)] ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
                  >
                    <motion.div
                      className="inline-block p-6 rounded-2xl bg-[#111118] border border-[#222233] hover:border-[#333355] transition-all duration-300"
                      whileHover={{ y: -2 }}
                    >
                      {/* Step number */}
                      <span
                        className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full inline-block mb-3"
                        style={{
                          color: step.color,
                          backgroundColor: `${step.color}12`,
                          border: `1px solid ${step.color}30`,
                        }}
                      >
                        STEP {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-[#e8e8ed] mb-2">{step.title}</h3>
                      <p className="text-sm text-[#9898a8] leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Connector arrow down */}
                  {index < FRAMEWORK_STEPS.length - 1 && (
                    <motion.div
                      className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-20 hidden md:block"
                      style={{ top: 'calc(100% - 24px)' }}
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ChevronDown className="w-5 h-5 text-[#00ff88]/30" />
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
