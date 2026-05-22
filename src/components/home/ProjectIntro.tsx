'use client'

import { motion } from 'framer-motion'
import { BookOpen, Target, AlertTriangle } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import ScrollReveal from '@/components/shared/ScrollReveal'

const cards = [
  {
    icon: BookOpen,
    title: '项目背景',
    description:
      '在"双碳"目标驱动下，企业碳排放信息披露日益受到关注。然而，新型洗绿行为利用AI技术规避传统审计检测，给碳排放报告的真实性带来严峻挑战。本项目聚焦这一新兴问题，探索AI辅助的舞弊审计新范式。',
    gradient: 'from-[#00ff88]/20 to-[#00d4ff]/5',
    border: '#00ff88',
  },
  {
    icon: Target,
    title: '研究目标',
    description:
      '构建基于人工智能的碳排放舞弊审计智能化框架，实现对新形态洗绿行为的有效识别与反制。通过LLM、知识图谱与异常检测技术的融合，重构传统审计程序，提升碳排放报告的可靠性与透明度。',
    gradient: 'from-[#00d4ff]/20 to-[#7c3aed]/5',
    border: '#00d4ff',
  },
  {
    icon: AlertTriangle,
    title: '核心问题',
    description:
      'AI时代碳排放报告面临哪些新型舞弊攻击？现有审计方法存在何种检测盲区？如何设计智能化的审计反制策略？数据驱动的方法能否实现碳排放舞弊的精准识别与实时预警？',
    gradient: 'from-[#7c3aed]/20 to-[#f59e0b]/5',
    border: '#7c3aed',
  },
]

export default function ProjectIntro() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0f]" id="project-intro">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="项目简介"
          title="AI x ESG x 审计"
          description="探索人工智能与碳排放审计的交叉前沿，构建面向AI时代的舞弊检测新体系"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 0.15}>
              <motion.div
                className="relative group p-8 rounded-2xl bg-[#111118] border border-[#222233]
                           hover:border-[#333355] transition-all duration-500 h-full"
                whileHover={{ y: -6 }}
              >
                {/* Gradient top line */}
                <div
                  className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ color: card.border }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6
                              bg-gradient-to-br border transition-colors duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${card.border}18, ${card.border}05)`,
                    borderColor: `${card.border}20`,
                  }}
                >
                  <span style={{ color: card.border }}><card.icon className="w-6 h-6" /></span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#e8e8ed] mb-3">{card.title}</h3>
                <p className="text-sm text-[#9898a8] leading-relaxed">{card.description}</p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.border}40, transparent)`,
                  }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
