export interface TeamMember {
  id: string
  name: string
  role: 'student' | 'advisor'
  major: string
  grade: string
  researchFocus: string
  skills: string[]
  avatarUrl?: string
  bio?: string
}

export interface ResearchDirection {
  id: string
  icon: string
  title: string
  description: string
  keywords: string[]
  color: string
}

export interface Achievement {
  slug: string
  type: 'paper' | 'report' | 'data' | 'case' | 'ppt' | 'award'
  title: string
  description: string
  date: string
  tags: string[]
  coverUrl?: string
  fileUrl?: string
  featured?: boolean
}

export interface TimelineNode {
  date: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'upcoming'
  icon: string
}

export interface FrameworkStep {
  step: number
  title: string
  description: string
  icon: string
  color: string
}

export interface ContentFrontmatter {
  title: string
  description: string
  date: string
  tags: string[]
  type: 'paper' | 'news' | 'research' | 'case-study'
  coverImage?: string
  author?: string
  featured?: boolean
}
