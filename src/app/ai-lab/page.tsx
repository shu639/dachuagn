'use client'

import { motion } from 'framer-motion'
import { ShieldAlert, Activity, Fingerprint, ArrowRight, Cpu, FlaskConical } from 'lucide-react'
import Link from 'next/link'
import SectionHeading from '@/components/shared/SectionHeading'
import ScrollReveal from '@/components/shared/ScrollReveal'

const modules = [
  {
    title: 'ESG风险评分',
    description: '上传企业ESG报告，AI自动进行多维度风险评分与等级评估。基于碳排放数据、披露一致性与治理结构构建综合风险画像。',
    icon: ShieldAlert,
    href: '/ai-lab/risk-scoring',
    color: '#00ff88',
    status: '开发中',
    tech: 'Python · FastAPI · LLM',
  },
  {
    title: '碳数据异常检测',
    description: '基于深度学习时间序列模型，自动检测碳排放数据中的异常模式与潜在舞弊信号，实现实时监控与预警。',
    icon: Activity,
    href: '/ai-lab/anomaly-detection',
    color: '#00d4ff',
    status: '规划中',
    tech: 'PyTorch · Transformer · LSTM',
  },
  {
    title: '洗绿行为识别',
    description: '运用NLP与知识图谱技术，识别企业碳排放报告中的新型洗绿行为，包含语义漂移检测与数据印证分析。',
    icon: Fingerprint,
    href: '/ai-lab/greenwashing',
    color: '#7c3aed',
    status: '规划中',
    tech: 'BERT · Neo4j · RAG',
  },
]

export default function AILabPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="AI Lab"
          title="人工智能实验室"
          description="探索AI在碳排放审计领域的前沿应用"
        />

        {/* Coming soon banner */}
        <motion.div
          className="mb-16 p-6 rounded-2xl bg-[#111118] border border-[#7c3aed]/20
                     flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/20
                          flex items-center justify-center flex-shrink-0">
            <FlaskConical className="w-6 h-6 text-[#7c3aed]" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#e8e8ed] mb-1">AI功能模块即将上线</h3>
            <p className="text-xs text-[#9898a8]">
              当前阶段已完成前端架构搭建，后续将接入Python后端与AI模型API，提供完整的智能审计工具链。
            </p>
          </div>
        </motion.div>

        {/* Module cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod, index) => (
            <ScrollReveal key={mod.title} delay={index * 0.1}>
              <Link href={mod.href}>
                <motion.div
                  className="relative group p-6 rounded-2xl bg-[#111118] border border-[#222233]
                             hover:border-current transition-all duration-500 h-full flex flex-col"
                  style={{ '--hover-color': mod.color } as React.CSSProperties}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: `linear-gradient(135deg, ${mod.color}20, ${mod.color}05)`,
                      border: `1px solid ${mod.color}30`,
                    }}
                  >
                    <span style={{ color: mod.color }}><mod.icon className="w-6 h-6" /></span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-[#e8e8ed]">{mod.title}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
                      {mod.status}
                    </span>
                  </div>

                  <p className="text-sm text-[#9898a8] leading-relaxed mb-4 flex-1">
                    {mod.description}
                  </p>

                  <div className="text-[10px] font-mono text-[#9898a8]/50 mb-4">{mod.tech}</div>

                  <div className="flex items-center gap-1 text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ color: mod.color }}>
                    了解详情
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
