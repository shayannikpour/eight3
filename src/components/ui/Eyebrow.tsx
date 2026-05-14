import { clsx } from 'clsx'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={clsx('text-xs uppercase tracking-[0.2em] font-sans text-charcoal/60', className)}>
      {children}
    </p>
  )
}
