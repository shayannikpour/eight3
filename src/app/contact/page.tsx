'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { BRAND_EMAIL, BRAND_ADDRESS } from '@/lib/constants'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    console.log('Contact form submission:', data)
    // TODO: wire to Resend or Formspree for actual email delivery
    setSubmitted(true)
  }

  return (
    <>
      <div className="pt-32 pb-16 text-center">
        <Container>
          <Eyebrow>get in touch</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl italic text-charcoal leading-tight mt-4">
            contact
          </h1>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="max-w-lg mx-auto">
            {submitted ? (
              <div className="text-center py-16">
                <p className="font-display text-3xl italic text-forest mb-4">message received</p>
                <p className="font-sans text-charcoal/60">
                  We will be in touch within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-[0.15em] text-charcoal/50 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-charcoal/20 rounded-xl px-4 py-3 font-sans text-sm text-charcoal bg-cream focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-[0.15em] text-charcoal/50 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-charcoal/20 rounded-xl px-4 py-3 font-sans text-sm text-charcoal bg-cream focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.15em] text-charcoal/50 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full border border-charcoal/20 rounded-xl px-4 py-3 font-sans text-sm text-charcoal bg-cream focus:outline-none focus:border-charcoal transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-charcoal text-cream py-3 font-sans text-sm tracking-wide hover:bg-forest transition-colors cursor-pointer"
                >
                  send message
                </button>
              </form>
            )}

            <div className="mt-16 pt-12 border-t border-charcoal/10 space-y-2">
              <p className="font-sans text-sm text-charcoal/60">{BRAND_EMAIL}</p>
              <p className="font-sans text-sm text-charcoal/60">{BRAND_ADDRESS}</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
