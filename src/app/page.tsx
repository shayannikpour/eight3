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
import { FadeIn, FadeInGroup } from '@/components/ui/FadeIn'
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
          <FadeIn className="text-center mb-16">
            <Eyebrow>the lineup</Eyebrow>
            <h2 className="font-display text-5xl md:text-7xl italic text-charcoal leading-tight mt-4">
              five matte finishes
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product, i) => (
              <FadeIn key={product.color} delay={i * 0.08}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <MarqueeTagline />

      {/* All-pens group shot */}
      <Section className="overflow-hidden">
        <Container>
          <FadeIn className="text-center mb-10">
            <Eyebrow>the collection</Eyebrow>
            <h2 className="font-display text-4xl md:text-6xl italic text-charcoal leading-tight mt-3">
              every shade of stillness
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden bg-charcoal/5">
              <Image
                src="/images/all-pens.png"
                alt="All five EIGHT3 pen colors together"
                fill
                className="object-contain p-8 md:p-12"
                sizes="(max-width: 768px) 95vw, 900px"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.25} className="text-center mt-10">
            <Button href="/shop" variant="secondary">shop all colors →</Button>
          </FadeIn>
        </Container>
      </Section>

      {/* Editorial split */}
      <Section className="border-t border-charcoal/8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-charcoal/5">
                <Image
                  src="/images/lifestyle-3.jpg"
                  alt="EIGHT3 pen lifestyle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 95vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left" className="lg:pl-4">
              <Eyebrow className="mb-4">the ritual</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl italic text-charcoal leading-tight mb-6">
                engineered<br />for stillness
              </h2>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-4">
                EIGHT3 was born from the belief that a tool should feel like a ceremony. Each pen is
                weighted to rest in the palm, the draw calibrated to slow the breath rather than hasten it.
              </p>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-8">
                Five colors. One intention. A single ritual that begins the moment you choose your shade.
              </p>
              <Button href="/ritual" variant="secondary">read the ritual →</Button>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Feature spotlight — dark band */}
      <Section className="bg-charcoal overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <FadeIn direction="right">
                <Eyebrow className="text-cream/40 mb-4">precision</Eyebrow>
                <h2 className="font-display text-4xl md:text-5xl italic text-cream leading-tight mb-6">
                  OLED display.<br />adjustable voltage.<br />USB-C.
                </h2>
                <p className="font-sans text-cream/60 leading-relaxed mb-8">
                  Three voltage modes let you dial in the perfect draw for any cartridge. The OLED
                  counter tracks every session. USB-C brings it back in two hours.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-cream/10">
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
              </FadeIn>
            </div>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/lifestyle-1.png"
                  alt="EIGHT3 pen detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 95vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Color feature row */}
      <Section>
        <Container>
          <FadeIn className="text-center mb-14">
            <Eyebrow>five moods</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl italic text-charcoal leading-tight mt-4">
              the color is the ritual
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-charcoal/8 rounded-2xl overflow-hidden">
            {products.map((product, i) => (
              <FadeIn key={product.color} delay={i * 0.07}>
                <Link
                  href={`/product/${product.color}`}
                  className="group flex flex-col items-center py-10 px-4 bg-cream hover:bg-charcoal/3 transition-colors duration-300 text-center"
                >
                  <div
                    className="w-14 h-14 rounded-full mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: product.hex }}
                  />
                  <p className="font-display text-lg italic text-charcoal mb-1">{product.name}</p>
                  <p className="font-sans text-xs text-charcoal/40 tracking-wide">{product.mood}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Specs strip */}
      <Section className="border-y border-charcoal/10">
        <Container>
          <FadeInGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" staggerDelay={0.12}>
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
          </FadeInGroup>
        </Container>
      </Section>

      {/* Quiet CTA */}
      <Section>
        <Container>
          <FadeIn className="text-center">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-charcoal/40 mb-6">ready?</p>
            <Link
              href="/shop"
              className="font-display text-4xl md:text-6xl italic text-charcoal hover:text-forest transition-colors duration-300"
            >
              begin your eight3 →
            </Link>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
