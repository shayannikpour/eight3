'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function AgeGate() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const confirmed = localStorage.getItem('eight3-age-confirmed')
    if (!confirmed) setShow(true)
  }, [])

  const confirm = () => {
    localStorage.setItem('eight3-age-confirmed', 'true')
    setShow(false)
  }

  const deny = () => {
    window.location.href = 'https://www.canada.ca'
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-cream flex items-center justify-center px-6"
        >
          <div className="max-w-md w-full text-center">
            <p className="font-display text-5xl italic text-charcoal mb-2">EIGHT3</p>
            <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-12">
              a quieter way to arrive
            </p>
            <p className="font-display text-2xl italic text-charcoal mb-2">
              are you of legal age?
            </p>
            <p className="font-sans text-sm text-charcoal/60 leading-relaxed mb-10">
              EIGHT3 contains cannabis. You must be 19 years or older to enter (18 in Alberta and
              Quebec).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={confirm}
                className="rounded-full bg-charcoal text-cream px-8 py-3 font-sans text-sm hover:bg-forest transition-colors cursor-pointer"
              >
                I am 19+
              </button>
              <button
                onClick={deny}
                className="rounded-full border border-charcoal/30 text-charcoal/60 px-8 py-3 font-sans text-sm hover:border-charcoal transition-colors cursor-pointer"
              >
                I am not
              </button>
            </div>
            <p className="font-sans text-xs text-charcoal/30 mt-10">
              For adult use only (19+). This product contains cannabis.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
