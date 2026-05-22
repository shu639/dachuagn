import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { ACHIEVEMENTS } from '@/lib/constants'
import { FileText, ClipboardList, BarChart3, FolderOpen, Presentation, Trophy } from 'lucide-react'

const typeConfig: Record<string, { icon: React.ComponentType<{ className?: string }>; label: string; color: string }> = {
  paper: { icon: FileText, label: '论文', color: '#00ff88' },
  report: { icon: ClipboardList, label: '报告', color: '#00d4ff' },
  data: { icon: BarChart3, label: '数据', color: '#7c3aed' },
  case: { icon: FolderOpen, label: '案例', color: '#f59e0b' },
  ppt: { icon: Presentation, label: 'PPT', color: '#ec4899' },
  award: { icon: Trophy, label: '获奖', color: '#f59e0b' },
}

export async function generateStaticParams() {
  return ACHIEVEMENTS.map((a) => ({ slug: a.slug }))
}

export default async function AchievementDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const achievement = ACHIEVEMENTS.find((a) => a.slug === slug)

  if (!achievement) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#e8e8ed] mb-4">成果未找到</h1>
          <Link href="/achievements" className="text-sm text-[#00ff88] hover:underline">返回成果列表</Link>
        </div>
      </div>
    )
  }

  const config = typeConfig[achievement.type] || typeConfig.paper
  const Icon = config.icon

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/achievements" className="inline-flex items-center gap-2 text-sm text-[#9898a8] hover:text-[#00ff88] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> 返回成果列表
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${config.color}15`, border: `1px solid ${config.color}30` }}>
            <span style={{ color: config.color }}><Icon className="w-5 h-5" /></span>
          </div>
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md"
            style={{ color: config.color, backgroundColor: `${config.color}08` }}>
            {config.label}
          </span>
          <span className="text-xs text-[#9898a8]/50 font-mono">{achievement.date}</span>
        </div>

        <h1 className="text-3xl font-bold text-[#e8e8ed] mb-4">{achievement.title}</h1>
        <p className="text-base text-[#9898a8] leading-relaxed mb-6">{achievement.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {achievement.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#111118] border border-[#222233] text-[#9898a8]">
              {tag}
            </span>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-[#111118] border border-[#222233] flex flex-col items-center text-center">
          <p className="text-sm text-[#9898a8] mb-4">详细内容将在项目推进过程中持续更新</p>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-[#00ff88]">
            详情即将上线 <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  )
}
