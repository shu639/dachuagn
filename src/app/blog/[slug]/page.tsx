import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#9898a8] hover:text-[#00ff88] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> 返回博客
        </Link>
        <h1 className="text-2xl font-bold text-[#e8e8ed] mb-4">文章详情</h1>
        <p className="text-[#9898a8]">博客文章内容即将上线。</p>
      </div>
    </div>
  )
}
