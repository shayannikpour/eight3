import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollHero } from '@/components/hero/ScrollHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { MarqueeTagline } from '@/components/ui/MarqueeTagline'
import { ProductCard } from '@/components/product/ProductCard'
import { products } from '@/lib/products'

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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.color} product={product} />
            ))}
          </div>
        </Container>
      </Section>

      <MarqueeTagline />

      {/* All-pens group shot */}
      <Section className="overflow-hidden">
        <Container>
          <div className="text-center mb-10">
            <Eyebrow>the collection</Eyebrow>
            <h2 className="font-display text-4xl md:text-6xl italic text-charcoal leading-tight mt-3">
              every shade of stillness
            </h2>
          </div>
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden bg-charcoal/5">
            <Image
              src="/images/all-pens.png"
              alt="All five EIGHT3 pen colors together"
              fill
              className="object-contain p-8 md:p-12"
              sizes="(max-width: 768px) 95vw, 900px"
            />
          </div>
          <div className="text-center mt-10">
            <Button href="/shop" variant="secondary">
              shop all colors →
            </Button>
          </div>
        </Container>
      </Section>

      {/* Editorial split — lifestyle images */}
      <Section className="border-t border-charcoal/8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-charcoal/5">
              <Image
                src="/images/lifestyle-3.jpg"
                alt="EIGHT3 pen in hand"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 95vw, 50vw"
              />
            </div>
            <div className="lg:pl-8">
              <Eyebrow className="mb-4">the ritual</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl italic text-charcoal leading-tight mb-6">
                engineered for stillness
              </h2>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-4">
                EIGHT3 was born from the belief that a tool should feel like a ceremony. Each pen is
                weighted to rest in the palm, the draw calibrated to slow the breath rather than
                hasten it.
              </p>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-8">
                Five colors. One intention. A single ritual that begins the moment you choose your
                shade.
              </p>
              <Button href="/ritual" variant="secondary">
                read the ritual →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature spotlight — lifestyle-1 full bleed */}
      <Section className="bg-charcoal overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <Eyebrow className="text-cream/50 mb-4">precision</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl italic text-cream leading-tight mb-6">
                OLED display.<br />adjustable voltage.<br />USB-C.
              </h2>
              <p className="font-sans text-cream/60 leading-relaxed mb-4">
                Three voltage modes let you dial in the perfect draw for any cartridge. The OLED
                counter tracks every session. USB-C brings it back in two hours.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-cream/10">
                {[
                  { stat: '4.2V', label: 'max voltage' },
                  { stat: '1000', label: 'puff counter' },
                  { stat: '2hr', label: 'USB-C charge' },
                ].map((s) => (
                  <div key={s.stat}>
                    <p className="font-display text-3xl italic text-cream">{s.stat}</p>
                    <p className="font-sans text-xs text-cream/40 mt-1 uppercase tracking-[0.15em]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/lifestyle-1.png"
                alt="EIGHT3 pen OLED display detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 95vw, 50vw"
              />
            </div>
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
