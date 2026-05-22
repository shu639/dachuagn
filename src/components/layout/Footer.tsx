import Link from 'next/link'
import { Mail, MapPin, Atom } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="relative border-t border-[#222233] bg-[#0a0a0f]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Atom className="w-5 h-5 text-[#00ff88]" />
              <span className="text-lg font-bold tracking-tight">
                <span className="text-[#00ff88]">Green</span>
                <span className="text-[#e8e8ed]">Audit</span>
                <span className="text-[#00d4ff] ml-1 font-mono text-sm">AI</span>
              </span>
            </Link>
            <p className="text-sm text-[#9898a8] max-w-md leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[#222233] text-[#9898a8] hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a
                href="mailto:jinshu639@gmail.com"
                className="p-2 rounded-lg border border-[#222233] text-[#9898a8] hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#e8e8ed] mb-4 uppercase tracking-wider">
              导航
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: '研究方向', href: '/research' },
                { label: '团队成员', href: '/team' },
                { label: '研究成果', href: '/achievements' },
                { label: 'AI Lab', href: '/ai-lab' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9898a8] hover:text-[#00ff88] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#e8e8ed] mb-4 uppercase tracking-wider">
              联系
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-[#9898a8]">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#00ff88]/60" />
                <span>{SITE_CONFIG.school}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#9898a8]">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#00ff88]/60" />
                <span>jinshu639@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#222233] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9898a8]/60 font-mono">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.shortName}. {SITE_CONFIG.school}.
          </p>
          <p className="text-xs text-[#9898a8]/40 font-mono">
            大学生创新创业训练计划项目
          </p>
        </div>
      </div>
    </footer>
  )
}
