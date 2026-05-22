import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: 'GreenAudit AI — AI驱动的碳排放舞弊审计研究',
    template: '%s | GreenAudit AI',
  },
  description:
    '应对"新形态"洗绿行为：碳排放报告舞弊审计程序智能化重构研究。南京审计大学国家级大学生创新训练计划项目，聚焦AI+ESG+审计交叉前沿。',
  keywords: [
    '碳审计', 'AI审计', '洗绿行为', 'ESG', '碳排放', '舞弊检测',
    '人工智能', '审计智能化', '南京审计大学', '大创项目',
  ],
  authors: [{ name: '南京审计大学 GreenAudit AI 研究团队' }],
  creator: 'GreenAudit AI',
  publisher: '南京审计大学',
  metadataBase: new URL('https://greenaudit-ai.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://greenaudit-ai.vercel.app',
    siteName: 'GreenAudit AI',
    title: 'GreenAudit AI — AI驱动的碳排放舞弊审计研究',
    description:
      '应对"新形态"洗绿行为：碳排放报告舞弊审计程序智能化重构研究',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#e8e8ed]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
