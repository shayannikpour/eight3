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

      {/* ── Lineup ─────────────────────────────────────────────── */}
      <Section id="lineup">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <FadeIn>
              <Eyebrow>the lineup</Eyebrow>
              <h2 className="font-display text-5xl md:text-7xl italic text-charcoal leading-none mt-3">
                five matte<br />finishes
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="font-sans text-charcoal/50 max-w-xs leading-relaxed text-sm md:text-right">
                One device. Five deliberate colors. Each shade designed to mark a moment in your day.
              </p>
            </FadeIn>
          </div>
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

      {/* ── Pull-quote band ─────────────────────────────────────── */}
      <div className="bg-forest overflow-hidden">
        <Container>
          <div className="py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn direction="right">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-cream/40 mb-6">
                the philosophy
              </p>
              <blockquote className="font-display text-3xl md:text-5xl italic text-cream leading-snug">
                "We built EIGHT3 for people who already know what they need — they just needed
                a device worthy of the ritual."
              </blockquote>
            </FadeIn>
            <FadeIn direction="left" delay={0.12}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden hidden lg:block">
                <Image
                  src="/images/lifestyle-2.jpg"
                  alt="EIGHT3 pen in hand"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                {/* Tint overlay */}
                <div className="absolute inset-0 bg-forest/30" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/* ── All pens group shot ─────────────────────────────────── */}
      <Section className="overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20 items-center">
            <FadeIn direction="right">
              <Eyebrow className="mb-4">the collection</Eyebrow>
              <h2 className="font-display text-4xl md:text-6xl italic text-charcoal leading-tight mb-6">
                every shade<br />of stillness
              </h2>
              <p className="font-sans text-charcoal/60 leading-relaxed mb-8 max-w-xs">
                Rose. Teal. Lavender. Navy. Forest. Five colors chosen not for trend — for time of day.
              </p>
              <Button href="/shop" variant="secondary">shop all colors →</Button>
            </FadeIn>
            <FadeIn direction="left" delay={0.1}>
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-charcoal/5">
                <Image
                  src="/images/all-pens.png"
                  alt="All five EIGHT3 pen colors together"
                  fill
                  className="object-contain p-6 md:p-10 mix-blend-multiply"
                  sizes="(max-width: 1024px) 95vw, 65vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Lifestyle triptych ──────────────────────────────────── */}
      <Section className="border-t border-charcoal/8 overflow-hidden">
        <Container>
          <FadeIn className="mb-10">
            <Eyebrow>the ritual</Eyebrow>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.9fr_1fr] gap-4 md:gap-5">
            {/* Tall left panel */}
            <FadeIn direction="right" className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/lifestyle-3.jpg"
                alt="EIGHT3 ritual moment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 95vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-2xl italic text-cream">engineered for stillness</p>
              </div>
            </FadeIn>

            {/* Middle: text card + small image */}
            <div className="flex flex-col gap-4">
              <FadeIn delay={0.08} className="flex-1 bg-charcoal rounded-2xl p-8 flex flex-col justify-between">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-cream/40">precision</p>
                <div>
                  <p className="font-display text-4xl italic text-cream mb-3">4.2V</p>
                  <p className="font-sans text-sm text-cream/60 leading-relaxed">
                    Three voltage modes, OLED puff counter, USB-C fast charge.
                  </p>
                </div>
                <Link
                  href="/ritual"
                  className="font-sans text-xs uppercase tracking-[0.15em] text-cream/50 hover:text-cream transition-colors mt-4 inline-block"
                >
                  read the ritual →
                </Link>
              </FadeIn>
              <FadeIn delay={0.12} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/lifestyle-1.png"
                  alt="EIGHT3 detail shot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 95vw, 30vw"
                />
              </FadeIn>
            </div>

            {/* Right: spec list */}
            <FadeIn direction="left" delay={0.16} className="flex flex-col justify-between">
              <div
                className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-4"
                style={{ backgroundColor: `${products[2].hex}22` }}
              >
                <Image
                  src={products[2].image}
                  alt="EIGHT3 Lavender"
                  fill
                  className="object-contain p-10 mix-blend-multiply"
                  sizes="(max-width: 768px) 95vw, 33vw"
                />
              </div>
              <div className="space-y-3 border-t border-charcoal/10 pt-5">
                {[
                  { k: '510-thread', v: 'universal compatibility' },
                  { k: 'OLED display', v: 'battery + session tracking' },
                  { k: 'USB-C', v: 'full charge in 2 hours' },
                ].map((s) => (
                  <div key={s.k} className="flex justify-between items-baseline">
                    <p className="font-sans text-xs font-medium text-charcoal">{s.k}</p>
                    <p className="font-sans text-xs text-charcoal/40 text-right max-w-[55%]">{s.v}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Feature spotlight — dark band ───────────────────────── */}
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
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
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

      {/* ── Color swatch grid ───────────────────────────────────── */}
      <Section>
        <Container>
          <FadeIn className="mb-14">
            <Eyebrow>five moods</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl italic text-charcoal leading-tight mt-4">
              the color is<br />the ritual
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
                    className="w-14 h-14 rounded-full mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: product.hex }}
                  />
                  <p className="font-display text-lg italic text-charcoal mb-1">{product.name}</p>
                  <p className="font-sans text-xs text-charcoal/40 tracking-wide mb-2">{product.mood}</p>
                  <p className="font-sans text-xs text-charcoal/60">{product.price}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Find a store strip ──────────────────────────────────── */}
      <div className="border-y border-charcoal/10">
        <Container>
          <FadeIn>
            <div className="py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal/40 mb-1">availability</p>
                <p className="font-display text-2xl md:text-3xl italic text-charcoal">
                  20 stores across British Columbia
                </p>
              </div>
              <Button href="/stores" variant="secondary">find a store →</Button>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* ── Quiet CTA ───────────────────────────────────────────── */}
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
