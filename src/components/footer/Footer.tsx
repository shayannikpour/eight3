import Link from 'next/link'
import {
  SHOP_LINKS,
  COMPANY_LINKS,
  LEGAL_LINKS,
  COMPLIANCE_LINE,
} from '@/lib/constants'
import { NewsletterForm } from './NewsletterForm'

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <p className="font-display text-3xl italic mb-4">EIGHT3</p>
            <p className="font-sans text-sm text-cream/60 leading-relaxed">
              a quieter way to arrive
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/40 mb-4">Shop</p>
            <ul className="space-y-2">
              {SHOP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/40 mb-4">Company</p>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/40 mb-4">Legal</p>
            <ul className="space-y-2 mb-8">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/40 mb-3">Newsletter</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8">
          <p className="font-sans text-xs text-cream/50 leading-relaxed mb-6 max-w-2xl">
            {COMPLIANCE_LINE}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-sans text-xs text-cream/40">
              © {new Date().getFullYear()} Eight3 Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/eight3ca"
                aria-label="Instagram"
                className="text-cream/50 hover:text-cream transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@eight3ca"
                aria-label="TikTok"
                className="text-cream/50 hover:text-cream transition-colors font-sans text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                TT
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
