import AIPlaceholder from '../AIPlaceholder'

export default function RiskScoringPage() {
  return (
    <AIPlaceholder
      title="ESG风险评分"
      description="上传企业ESG报告，AI自动进行多维度风险评分与等级评估。基于碳排放数据、披露一致性与治理结构构建综合风险画像。"
      icon="ShieldAlert"
      color="#00ff88"
      tech={['Python', 'FastAPI', 'Scikit-learn', 'LLM']}
      features={[
        '多维度ESG风险指标体系',
        'NLP驱动的文本语义分析',
        '行业对标与异常检测',
        '可视化风险雷达图',
      ]}
    />
  )
}
