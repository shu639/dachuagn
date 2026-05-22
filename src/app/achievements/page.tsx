import Link from 'next/link'
import { FileText, ClipboardList, BarChart3, FolderOpen, Presentation, Trophy, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { ACHIEVEMENTS } from '@/lib/constants'

const typeConfig: Record<string, { icon: React.ComponentType<{ className?: string }>; label: string; color: string }> = {
  paper: { icon: FileText, label: '论文', color: '#00ff88' },
  report: { icon: ClipboardList, label: '报告', color: '#00d4ff' },
  data: { icon: BarChart3, label: '数据', color: '#7c3aed' },
  case: { icon: FolderOpen, label: '案例', color: '#f59e0b' },
  ppt: { icon: Presentation, label: 'PPT', color: '#ec4899' },
  award: { icon: Trophy, label: '获奖', color: '#f59e0b' },
}

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="研究成果" title="全部成果" description="项目持续推进中，已产出多项研究成果" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {ACHIEVEMENTS.map((a) => {
            const config = typeConfig[a.type] || typeConfig.paper
            const Icon = config.icon
            return (
              <Link key={a.slug} href={`/achievements/${a.slug}`}>
                <div className="group p-6 rounded-2xl bg-[#111118] border border-[#222233] hover:border-[#333355] transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${config.color}15`, border: `1px solid ${config.color}30` }}>
                      <span style={{ color: config.color }}><Icon className="w-4 h-4" /></span>
                    </div>
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-md"
                      style={{ color: config.color, backgroundColor: `${config.color}08` }}>
                      {config.label}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#e8e8ed] mb-2 group-hover:text-white transition-colors line-clamp-2">{a.title}</h3>
                  <p className="text-sm text-[#9898a8] leading-relaxed mb-4 flex-1 line-clamp-3">{a.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-[#9898a8]/50 font-mono">{a.date}</span>
                    <div className="flex items-center gap-1 text-xs font-medium text-[#00ff88] opacity-0 group-hover:opacity-100 transition-all duration-300">
                      查看 <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
