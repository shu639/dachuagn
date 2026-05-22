import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
      <div className="text-center px-6">
        <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#00ff88]/60 mb-6">404</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#e8e8ed] mb-4">页面不存在</h1>
        <p className="text-[#9898a8] mb-10 max-w-md mx-auto">
          你访问的页面可能已被移除或暂时不可用。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
                     border border-[#222233] text-[#e8e8ed]
                     hover:border-[#00ff88]/30 hover:bg-[#00ff88]/5 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          返回首页
        </Link>
      </div>
    </div>
  )
}
