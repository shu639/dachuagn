export interface RiskScoreRequest {
  esgReport: string
  companyName: string
  fiscalYear: number
}

export interface RiskScoreResponse {
  overallScore: number
  riskLevel: 'low' | 'medium' | 'high' | 'critical'
  dimensions: {
    carbonDataQuality: number
    disclosureConsistency: number
    anomalyProbability: number
    governanceRisk: number
  }
  details: string[]
}

export interface AnomalyDetectionRequest {
  carbonData: number[][]
  timeRange: string
  threshold?: number
}

export interface AnomalyDetectionResponse {
  anomalies: {
    index: number
    value: number
    expectedValue: number
    confidence: number
    reason: string
  }[]
  summary: string
}

export interface GreenwashingRequest {
  reportText: string
  language: 'zh' | 'en'
}

export interface GreenwashingResponse {
  greenwashingScore: number
  riskFlags: {
    type: string
    description: string
    severity: 'low' | 'medium' | 'high'
    evidence: string
  }[]
  recommendation: string
}
