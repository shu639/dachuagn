import Link from 'next/link'
import { PenLine, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#00ff88]/60 mb-4">Blog</p>
        <h1 className="text-4xl font-bold text-[#e8e8ed] mb-4">研究博客</h1>
        <p className="text-[#9898a8] mb-10 max-w-lg mx-auto">
          博客系统即将上线。将发布项目进展、技术分享与学术思考。
        </p>
        <div className="p-8 rounded-2xl bg-[#111118] border border-[#222233] inline-flex flex-col items-center">
          <PenLine className="w-10 h-10 text-[#00ff88]/30 mb-4" />
          <p className="text-sm text-[#9898a8] mb-4">博客模块正在建设中</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#00ff88] hover:text-[#00d4ff] transition-colors"
          >
            返回首页 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
