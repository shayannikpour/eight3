'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-cream flex flex-col"
        >
          <div className="flex items-center justify-between px-6 h-16">
            <span className="font-display text-2xl text-charcoal">EIGHT3</span>
            <button onClick={onClose} aria-label="Close menu" className="cursor-pointer">
              <X size={20} className="text-charcoal" />
            </button>
          </div>
          <nav className="flex flex-col items-start px-6 pt-12 gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-display text-4xl italic text-charcoal hover:text-forest transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
