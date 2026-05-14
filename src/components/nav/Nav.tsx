'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { MobileNav } from './MobileNav'
import { clsx } from 'clsx'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'bg-cream/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl tracking-tight text-charcoal">
            EIGHT3
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-charcoal/70 hover:text-charcoal transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              aria-label="Cart"
              className="text-charcoal/70 hover:text-charcoal transition-colors cursor-pointer"
            >
              <ShoppingBag size={20} />
            </button>
            <button
              aria-label="Menu"
              className="md:hidden text-charcoal/70 hover:text-charcoal transition-colors cursor-pointer"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
