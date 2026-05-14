import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <>
      <div className="pt-32 pb-16 text-center">
        <Container>
          <Eyebrow>about eight3</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl italic text-charcoal leading-tight mt-4">
            craft, calm, intention
          </h1>
        </Container>
      </div>

      <Section>
        <div className="max-w-2xl mx-auto px-6 space-y-16">
          <div>
            <Eyebrow className="mb-4">the brand</Eyebrow>
            <h2 className="font-display text-3xl italic text-charcoal mb-6">
              a quieter relationship with cannabis
            </h2>
            <p className="font-sans text-charcoal/70 leading-relaxed mb-4">
              EIGHT3 began with a single question: why does every cannabis product feel like it was
              designed by energy drink marketers? The category was loud, garish, and proud of it. We
              wanted something different — a product that felt like it belonged alongside the things
              you genuinely love.
            </p>
            <p className="font-sans text-charcoal/70 leading-relaxed">
              So we made one. A pen weighted for the hand, finished in matte tones borrowed from the
              hours of the day, engineered with enough precision to respect the cartridge you put in
              it. Nothing more. Nothing less.
            </p>
          </div>

          <div>
            <Eyebrow className="mb-4">the materials</Eyebrow>
            <h2 className="font-display text-3xl italic text-charcoal mb-6">
              considered from the ground up
            </h2>
            <p className="font-sans text-charcoal/70 leading-relaxed mb-4">
              The outer casing is aircraft-grade aluminum with a matte powder-coat finish selected
              for its texture under the thumb. The draw mechanism is ceramic. The cartridge threads
              are 510-standard stainless steel.
            </p>
            <p className="font-sans text-charcoal/70 leading-relaxed">
              Every material was chosen because it improves the object — not because it was cheaper.
            </p>
          </div>

          <div>
            <Eyebrow className="mb-4">the team</Eyebrow>
            <h2 className="font-display text-3xl italic text-charcoal mb-6">made in Canada</h2>
            {/* TODO: fill in actual team bios */}
            <p className="font-sans text-charcoal/70 leading-relaxed">
              EIGHT3 is a small team based in Toronto, Ontario. We are designers, engineers, and
              people who care deeply about the objects they use every day.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
