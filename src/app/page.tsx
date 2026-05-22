import HeroSection from '@/components/home/HeroSection'
import ProjectIntro from '@/components/home/ProjectIntro'
import ResearchFramework from '@/components/home/ResearchFramework'
import ResearchDirections from '@/components/home/ResearchDirections'
import TeamSection from '@/components/home/TeamSection'
import AchievementsSection from '@/components/home/AchievementsSection'
import ProjectTimeline from '@/components/home/ProjectTimeline'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectIntro />
      <ResearchFramework />
      <ResearchDirections />
      <TeamSection />
      <AchievementsSection />
      <ProjectTimeline />
      <CTASection />
    </>
  )
}
