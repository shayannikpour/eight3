import { Metadata } from 'next'
import { ScrollHero } from '@/components/hero/ScrollHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { MarqueeTagline } from '@/components/ui/MarqueeTagline'
import { ProductCard } from '@/components/product/ProductCard'
import { products } from '@/lib/products'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Eight3 — a quieter way to arrive',
}

export default function Home() {
  return (
    <>
      <ScrollHero />

      {/* Five-color showcase */}
      <Section id="lineup">
        <Container>
          <div className="text-center mb-16">
            <Eyebrow>the lineup</Eyebrow>
            <h2 className="font-display text-5xl md:text-7xl italic text-charcoal leading-tight mt-4">
              five matte finishes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductCard key={product.color} product={product} />
            ))}
          </div>
        </Container>
      </Section>

      <MarqueeTagline />

      {/* Ritual teaser */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Eyebrow>the ritual</Eyebrow>
            <h2 className="font-display text-5xl md:text-6xl italic text-charcoal leading-tight mt-4 mb-8">
              engineered for stillness
            </h2>
            <p className="font-sans text-charcoal/70 leading-relaxed mb-6">
              EIGHT3 was born from the belief that a tool should feel like a ceremony. Each pen is
              weighted to rest in the palm, the draw calibrated to slow the breath rather than hasten
              it.
            </p>
            <p className="font-sans text-charcoal/70 leading-relaxed mb-10">
              Five colors. One intention. A single ritual that begins the moment you choose your
              shade.
            </p>
            <Button href="/ritual" variant="secondary">
              read the ritual →
            </Button>
          </div>
        </Container>
      </Section>

      {/* Specs strip */}
      <Section className="border-y border-charcoal/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: '4.2V variable', sub: 'three draw modes for every cartridge' },
              { label: '1000 puff counter', sub: 'track your session, return to stillness' },
              { label: 'USB-C, 2hr charge', sub: 'ready when you are' },
            ].map((spec) => (
              <div key={spec.label} className="space-y-2">
                <p className="font-display text-3xl italic text-forest">{spec.label}</p>
                <p className="font-sans text-sm text-charcoal/60">{spec.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quiet CTA */}
      <Section>
        <Container>
          <div className="text-center">
            <Link
              href="/shop"
              className="font-display text-4xl md:text-6xl italic text-charcoal hover:text-forest transition-colors duration-300"
            >
              begin your eight3 →
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
