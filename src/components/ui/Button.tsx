import { clsx } from 'clsx'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-8 py-3 font-sans text-sm tracking-wide transition-all duration-300 disabled:opacity-50 cursor-pointer'

  const variants = {
    primary: 'bg-charcoal text-cream hover:bg-forest',
    secondary: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream',
    ghost: 'text-charcoal hover:text-forest underline underline-offset-4',
  }

  const classes = clsx(base, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
