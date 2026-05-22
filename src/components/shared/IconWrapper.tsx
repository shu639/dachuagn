import type { LucideIcon } from 'lucide-react'

interface IconWrapperProps {
  icon: LucideIcon
  className?: string
  color?: string
  size?: number
}

export default function IconWrapper({ icon: Icon, className, color, size }: IconWrapperProps) {
  const sizeClass = size ? `w-${size} h-${size}` : ''
  return (
    <span style={color ? { color, display: 'inline-flex' } : { display: 'inline-flex' }}>
      <Icon className={className || sizeClass || 'w-5 h-5'} />
    </span>
  )
}
