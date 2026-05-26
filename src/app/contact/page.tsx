'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FadeIn } from '@/components/ui/FadeIn'
import { BRAND_EMAIL, BRAND_ADDRESS } from '@/lib/constants'

const topics = ['Product question', 'Order inquiry', 'Wholesale / distribution', 'Press', 'Other']

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      topic: (form.elements.namedItem('topic') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    console.log('Contact form submission:', data)
    // TODO: wire to Resend or Formspree for actual email delivery
    setSubmitted(true)
  }

  const inputClass =
    'w-full border border-charcoal/15 rounded-xl px-4 py-3 font-sans text-sm text-charcoal bg-transparent focus:outline-none focus:border-charcoal/40 transition-colors placeholder:text-charcoal/30'

  return (
    <>
      <div className="pt-32 pb-20 border-b border-charcoal/8">
        <Container>
          <FadeIn>
            <Eyebrow className="mb-4">get in touch</Eyebrow>
            <h1 className="font-display text-6xl md:text-8xl italic text-charcoal leading-none">
              contact
            </h1>
          </FadeIn>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                {submitted ? (
                  <div className="py-20">
                    <p className="font-display text-4xl italic text-forest mb-4">message received.</p>
                    <p className="font-sans text-charcoal/60 mb-8">
                      We will be in touch within 2 business days.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="font-sans text-sm text-charcoal/40 hover:text-charcoal underline underline-offset-4 transition-colors cursor-pointer"
                    >
                      send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2">Name</label>
                        <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2">Email</label>
                        <input id="email" name="email" type="email" required placeholder="your@email.com" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="topic" className="block text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2">Topic</label>
                      <select id="topic" name="topic" className={inputClass} defaultValue="">
                        <option value="" disabled>Select a topic</option>
                        {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={7}
                        placeholder="What's on your mind?"
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-charcoal text-cream py-3.5 font-sans text-sm tracking-wide hover:bg-forest transition-colors cursor-pointer"
                    >
                      send message
                    </button>
                  </form>
                )}
              </FadeIn>
            </div>

            {/* Info panel */}
            <FadeIn direction="left" delay={0.15} className="lg:col-span-2">
              <div className="space-y-10 pt-2">
                <div>
                  <Eyebrow className="mb-3">email</Eyebrow>
                  <a href={`mailto:${BRAND_EMAIL}`} className="font-sans text-charcoal hover:text-forest transition-colors">
                    {BRAND_EMAIL}
                  </a>
                </div>
                <div>
                  <Eyebrow className="mb-3">address</Eyebrow>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{BRAND_ADDRESS}</p>
                </div>
                <div>
                  <Eyebrow className="mb-3">hours</Eyebrow>
                  <p className="font-sans text-sm text-charcoal/70">Monday – Friday</p>
                  <p className="font-sans text-sm text-charcoal/70">9:00 am – 5:00 pm ET</p>
                </div>
                <div>
                  <Eyebrow className="mb-3">wholesale</Eyebrow>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                    Interested in carrying EIGHT3 in your store? Select "Wholesale / distribution" above and tell us about your shop.
                  </p>
                </div>
                <div className="pt-6 border-t border-charcoal/8">
                  <p className="font-sans text-xs text-charcoal/35 leading-relaxed">
                    For adult use only (19+). This product contains cannabis.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
