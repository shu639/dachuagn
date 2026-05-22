import AIPlaceholder from '../AIPlaceholder'

export default function GreenwashingPage() {
  return (
    <AIPlaceholder
      title="洗绿行为识别"
      description="运用NLP与知识图谱技术，识别企业碳排放报告中的新型洗绿行为，包含语义漂移检测与数据印证分析。"
      icon="Fingerprint"
      color="#7c3aed"
      tech={['BERT', 'Neo4j', 'RAG', '知识图谱']}
      features={[
        '洗绿语义模式库',
        '知识图谱关联验证',
        '跨报告一致性检查',
        '风险等级自动评定',
      ]}
    />
  )
}
