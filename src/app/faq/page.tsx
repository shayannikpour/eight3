'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'

const categories = [
  {
    label: 'Using your EIGHT3',
    questions: [
      {
        q: 'How do I charge my EIGHT3?',
        a: 'Connect the included USB-C cable to any standard USB-C power source. A full charge takes approximately 2 hours from empty. The OLED display shows battery level — when the indicator reaches 100%, unplug and begin.',
      },
      {
        q: 'How do I load a cartridge?',
        a: 'Unscrew the top cap by turning counter-clockwise. Thread your 510-compatible cartridge clockwise onto the battery until snug — finger-tight only, do not overtighten. Replace the cap. Five clicks to power on.',
      },
      {
        q: 'What are the three voltage modes?',
        a: 'Click the button three times rapidly to cycle through: Low (3.4V, blue indicator), Medium (3.8V, white indicator), and High (4.2V, amber indicator). We recommend starting at Low with a fresh cartridge and adjusting to your preference.',
      },
      {
        q: 'How does the puff counter work?',
        a: 'The OLED counter increments with every draw, from 0 to 1000. To reset the counter, hold the button for five seconds until the display flashes twice. This is useful for tracking consumption across sessions or cartridges.',
      },
      {
        q: 'What cartridges are compatible?',
        a: 'EIGHT3 accepts any standard 510-thread cartridge. This is the most widely used format across the Canadian legal cannabis market — virtually every cartridge you encounter will be compatible.',
      },
    ],
  },
  {
    label: 'Orders & Shipping',
    questions: [
      {
        q: 'Where do you ship?',
        a: 'TODO: confirm shipping zones. We are currently processing orders within Canada. Age verification is required at checkout and may be required upon delivery.',
      },
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping is 5–7 business days. Express shipping options are available at checkout. You will receive a tracking number by email once your order ships.',
      },
      {
        q: 'What is your return policy?',
        a: 'Unopened, unused products in original packaging may be returned within 14 days of delivery for a full refund. Opened products cannot be returned due to health regulations. Defective items are covered under our 12-month warranty.',
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Free standard shipping is available on orders over $75 within Canada. TODO: confirm exact threshold and eligible provinces.',
      },
    ],
  },
  {
    label: 'Compliance & Safety',
    questions: [
      {
        q: 'How do you verify age?',
        a: 'Age is verified at the point of purchase through our checkout partner. You must be 19 years of age or older (18 in Alberta and Quebec). Signature and age verification may be required upon delivery. We do not sell to minors.',
      },
      {
        q: 'What is the warranty?',
        a: 'EIGHT3 batteries carry a 12-month warranty against manufacturing defects from the date of purchase. This does not cover damage from misuse, water exposure, dropping, or physical impact. Contact hello@eight3.ca with your order number to initiate a warranty claim.',
      },
      {
        q: 'Is EIGHT3 safe?',
        a: 'EIGHT3 is a cannabis product intended for adults 19 and older. Do not drive or operate machinery while under the influence of cannabis. Keep out of reach of children and pets. Consult a health professional if you have concerns about cannabis use.',
      },
      {
        q: 'What do I do if my pen stops working?',
        a: 'First, try a full charge cycle. If the issue persists, ensure the cartridge is correctly threaded and the contacts are clean. If the pen is still unresponsive within the warranty period, contact hello@eight3.ca with a description and your order number.',
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-charcoal/8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-6 cursor-pointer group"
      >
        <span className="font-sans text-base text-charcoal group-hover:text-forest transition-colors">{q}</span>
        <ChevronDown
          size={16}
          className={clsx(
            'text-charcoal/30 mt-1 flex-shrink-0 transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <p className="font-sans text-sm text-charcoal/60 leading-relaxed pb-5 max-w-2xl">{a}</p>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <div className="pt-32 pb-20 border-b border-charcoal/8">
        <Container>
          <FadeIn>
            <Eyebrow className="mb-4">frequently asked</Eyebrow>
            <h1 className="font-display text-6xl md:text-8xl italic text-charcoal leading-none">
              questions
            </h1>
          </FadeIn>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="max-w-3xl">
            {categories.map((cat, ci) => (
              <FadeIn key={cat.label} delay={ci * 0.05} className="mb-14">
                <Eyebrow className="mb-6">{cat.label}</Eyebrow>
                {cat.questions.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn className="mt-16 pt-16 border-t border-charcoal/8 max-w-3xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-display text-2xl italic text-charcoal mb-1">Still have questions?</p>
                <p className="font-sans text-sm text-charcoal/50">We typically respond within one business day.</p>
              </div>
              <Button href="/contact" variant="secondary">contact us →</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
