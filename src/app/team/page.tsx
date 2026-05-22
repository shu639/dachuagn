import { User, Star } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { TEAM_MEMBERS } from '@/lib/constants'
import SkillTag from '@/components/shared/SkillTag'

const skillColors = ['#00ff88', '#00d4ff', '#7c3aed', '#f59e0b', '#ec4899']

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="团队介绍" title="研究团队" description="跨学科协作，AI + 审计 + 金融的完美融合" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={member.id} className="p-6 rounded-2xl bg-[#111118] border border-[#222233] hover:border-[#00ff88]/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/10 flex items-center justify-center border border-[#00ff88]/20">
                    <User className="w-7 h-7 text-[#00ff88]/40" />
                  </div>
                  {member.role === 'advisor' && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#f59e0b] flex items-center justify-center">
                      <Star className="w-3 h-3 text-[#0a0a0f]" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#e8e8ed]">{member.name}</h3>
                  <p className="text-xs text-[#00ff88]/70 font-mono mt-0.5">
                    {member.role === 'advisor' ? '指导教师' : member.grade}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#9898a8] mb-1">专业：{member.major}</p>
              <p className="text-xs text-[#9898a8] mb-4">方向：{member.researchFocus}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {member.skills.map((skill, si) => (
                  <SkillTag key={skill} label={skill} color={skillColors[si % skillColors.length]} />
                ))}
              </div>
              {member.bio && (
                <p className="text-xs text-[#9898a8]/70 leading-relaxed pt-3 border-t border-[#222233]">
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
