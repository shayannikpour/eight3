'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

const faqs = [
  {
    q: 'How do I charge my EIGHT3?',
    a: 'Connect the included USB-C cable to any standard USB-C power source. A full charge takes approximately 2 hours. The indicator light turns off when fully charged.',
  },
  {
    q: 'How do I load a cartridge?',
    a: 'Unscrew the top cap by turning counter-clockwise. Thread your 510-compatible cartridge clockwise onto the battery until snug. Do not overtighten. Replace the cap.',
  },
  {
    q: 'What are the three voltage modes?',
    a: 'Click the button three times rapidly to cycle through: Low (3.4V, blue light), Medium (3.8V, white light), and High (4.2V, amber light). We recommend starting at Low and adjusting to taste.',
  },
  {
    q: 'What does the puff counter track?',
    a: 'The counter tracks each draw from 0 to 1000. To reset, hold the button for five seconds until the light flashes twice.',
  },
  {
    q: 'What cartridges are compatible?',
    a: 'EIGHT3 accepts any standard 510-thread cartridge. This is the most common cartridge format in the Canadian market.',
  },
  {
    q: 'What is the warranty?',
    a: 'EIGHT3 batteries carry a 12-month warranty against manufacturing defects. This does not cover damage from misuse, water exposure, or physical impact. Contact hello@eight3.ca to initiate a claim.',
  },
  {
    q: 'Where do you ship?',
    a: 'TODO: confirm shipping zones. Currently processing orders within Canada. Age verification required at checkout.',
  },
  {
    q: 'How do you verify age?',
    a: 'Age is verified at the point of purchase through our checkout partner. You must be 19 years of age or older (18 in Alberta and Quebec). We do not sell to minors.',
  },
  {
    q: 'What is your return policy?',
    a: 'Unopened products may be returned within 14 days of delivery for a full refund. Opened products cannot be returned due to health regulations. Defective items are covered under warranty.',
  },
  {
    q: 'Is EIGHT3 safe to use?',
    a: 'EIGHT3 is a cannabis product intended for adults 19 and older. Do not drive or operate machinery while under the influence. Keep out of reach of children and pets. Consult a health professional if you have concerns.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 cursor-pointer"
      >
        <span className="font-sans text-base text-charcoal">{q}</span>
        <ChevronDown
          size={16}
          className={clsx(
            'text-charcoal/40 mt-1 flex-shrink-0 transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <p className="font-sans text-sm text-charcoal/60 leading-relaxed pb-5">{a}</p>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <div className="pt-32 pb-16 text-center">
        <Container>
          <Eyebrow>frequently asked</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl italic text-charcoal leading-tight mt-4">
            questions
          </h1>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
