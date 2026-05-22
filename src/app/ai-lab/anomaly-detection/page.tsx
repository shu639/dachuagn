import AIPlaceholder from '../AIPlaceholder'

export default function AnomalyDetectionPage() {
  return (
    <AIPlaceholder
      title="碳数据异常检测"
      description="基于深度学习时间序列模型，自动检测碳排放数据中的异常模式与潜在舞弊信号，实现实时监控与预警。"
      icon="Activity"
      color="#00d4ff"
      tech={['PyTorch', 'LSTM', 'Transformer', '时序分析']}
      features={[
        '多尺度时间序列分析',
        '自编码器异常检测',
        '实时数据流监控',
        '异常模式自动分类',
      ]}
    />
  )
}
