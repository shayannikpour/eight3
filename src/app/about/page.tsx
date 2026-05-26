import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'About',
}

const values = [
  {
    title: 'No noise',
    body: 'Everything in cannabis packaging is competing for attention. EIGHT3 is designed to stop competing and start belonging — on a shelf, in a hand, in a routine.',
  },
  {
    title: 'Material honesty',
    body: 'Aircraft-grade aluminum. Ceramic draw. 510-standard stainless. Every material is chosen because it earns its place in the object, not because it photographs well.',
  },
  {
    title: 'Ritual over consumption',
    body: 'We do not measure success in puff counts. We measure it in whether the person who picks up an EIGHT3 pauses before they exhale.',
  },
  {
    title: 'Compliance by design',
    body: 'Age verification, compliance copy, transparent labeling — not as legal checkboxes but as expressions of what kind of brand we are.',
  },
]

const specs = [
  { label: 'Material', value: 'Aircraft-grade aluminum, matte powder-coat' },
  { label: 'Draw mechanism', value: 'Ceramic coil, variable resistance' },
  { label: 'Thread', value: '510-standard stainless steel' },
  { label: 'Battery', value: '650 mAh lithium-ion' },
  { label: 'Charging', value: 'USB-C, approx. 2 hours' },
  { label: 'Voltage', value: '3.4V / 3.8V / 4.2V selectable' },
  { label: 'Display', value: 'OLED puff counter, 1000-puff capacity' },
  { label: 'Origin', value: 'Designed in Toronto, Canada' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 border-b border-charcoal/8">
        <Container>
          <FadeIn className="max-w-3xl">
            <Eyebrow className="mb-6">about eight3</Eyebrow>
            <h1 className="font-display text-6xl md:text-8xl italic text-charcoal leading-none">
              craft,<br />calm,<br />intention.
            </h1>
          </FadeIn>
        </Container>
      </div>

      {/* Brand story */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <Eyebrow className="mb-5">the brand</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl italic text-charcoal mb-8 leading-snug">
                a quieter relationship with cannabis
              </h2>
              <div className="space-y-5 font-sans text-charcoal/70 leading-relaxed">
                <p>
                  EIGHT3 began with a single question: why does every cannabis product feel like it
                  was designed by energy drink marketers? The category was loud, garish, and proud of
                  it. We wanted something different — a product that felt like it belonged alongside
                  the things you genuinely love.
                </p>
                <p>
                  So we made one. A pen weighted for the hand, finished in matte tones borrowed from
                  the hours of the day, engineered with enough precision to respect the cartridge you
                  put in it.
                </p>
                <p>
                  Five colors. One product. Nothing more.
                </p>
              </div>
              <div className="mt-10">
                <Button href="/ritual" variant="secondary">read the ritual →</Button>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-charcoal/5">
                <Image
                  src="/images/lifestyle-3.jpg"
                  alt="EIGHT3 — crafted in Canada"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 95vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Values grid */}
      <Section className="border-t border-charcoal/8 bg-charcoal/2">
        <Container>
          <FadeIn className="mb-14 text-center">
            <Eyebrow className="mb-4">what we believe</Eyebrow>
            <h2 className="font-display text-4xl italic text-charcoal">four principles</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/10 rounded-2xl overflow-hidden">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="bg-cream px-10 py-10 h-full">
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal/30 mb-3">
                    0{i + 1}
                  </p>
                  <h3 className="font-display text-2xl italic text-charcoal mb-4">{v.title}</h3>
                  <p className="font-sans text-sm text-charcoal/60 leading-relaxed">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Materials / specs */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <Eyebrow className="mb-5">the materials</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl italic text-charcoal mb-8 leading-snug">
                considered from<br />the ground up
              </h2>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-5">
                The outer casing is aircraft-grade aluminum with a matte powder-coat finish chosen
                for its texture under the thumb. It is not the cheapest option. It is the right one.
              </p>
              <p className="font-sans text-charcoal/70 leading-relaxed">
                The ceramic draw mechanism provides a clean, consistent pull with no metallic
                aftertaste. The 510-thread is stainless steel — the standard that fits every
                cartridge on the market.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="divide-y divide-charcoal/8">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-baseline py-4">
                    <p className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 w-32 flex-shrink-0">
                      {spec.label}
                    </p>
                    <p className="font-sans text-sm text-charcoal text-right">{spec.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section className="border-t border-charcoal/8 bg-charcoal/2">
        <Container>
          <div className="max-w-2xl">
            <FadeIn>
              <Eyebrow className="mb-5">the team</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl italic text-charcoal mb-8 leading-snug">
                made in Canada
              </h2>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-5">
                EIGHT3 is a small team based in Toronto, Ontario. We are designers, engineers, and
                people who care deeply about the objects they use every day.
              </p>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-8">
                {/* TODO: fill in actual team bios and photos */}
                We believe the cannabis category deserves better design — and we are building it one
                deliberate object at a time.
              </p>
              <Button href="/contact" variant="secondary">get in touch →</Button>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
