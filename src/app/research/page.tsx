'use client'

import { Search, Cpu, ShieldAlert, Activity } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { RESEARCH_DIRECTIONS } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search, Cpu, ShieldAlert, Activity,
}

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="研究方向" title="四大核心研究方向" description="以AI技术为核心，构建面向碳排放审计的全方位研究体系" />
        <div className="space-y-6 mt-8">
          {RESEARCH_DIRECTIONS.map((dir, index) => {
            const Icon = iconMap[dir.icon] || Activity
            return (
              <ScrollReveal key={dir.id} delay={index * 0.1}>
                <div id={dir.id} className="p-8 rounded-2xl bg-[#111118] border border-[#222233] hover:border-[#333355] transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${dir.color}20, ${dir.color}05)`, border: `1px solid ${dir.color}30` }}>
                      <span style={{ color: dir.color }}><Icon className="w-6 h-6" /></span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#e8e8ed] mb-3">{dir.title}</h2>
                      <p className="text-sm text-[#9898a8] leading-relaxed mb-4">{dir.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {dir.keywords.map((kw) => (
                          <span key={kw} className="text-xs font-mono px-2.5 py-1 rounded-md"
                            style={{ color: dir.color, backgroundColor: `${dir.color}08`, border: `1px solid ${dir.color}20` }}>
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
