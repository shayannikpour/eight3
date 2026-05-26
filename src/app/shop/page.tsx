import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ProductCard } from '@/components/product/ProductCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Shop',
}

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-16 overflow-hidden bg-charcoal/3">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[60vh]">
            <div className="py-20 lg:py-32">
              <FadeIn>
                <Eyebrow className="mb-4">the lineup</Eyebrow>
                <h1 className="font-display text-5xl md:text-7xl italic text-charcoal leading-tight">
                  five matte<br />colors.<br />one ritual.
                </h1>
                <p className="font-sans text-charcoal/60 leading-relaxed mt-6 max-w-xs">
                  Each pen is the same precision instrument. The color is the choice — and the choice is the ritual.
                </p>
              </FadeIn>
            </div>
            <FadeIn direction="left" className="relative hidden lg:block">
              <div className="aspect-square relative">
                <Image
                  src="/images/all-pens.png"
                  alt="All five EIGHT3 colors"
                  fill
                  className="object-contain p-8 mix-blend-multiply"
                  sizes="50vw"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {products.map((product, i) => (
              <FadeIn key={product.color} delay={i * 0.08}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>

          {/* Feature callouts */}
          <FadeIn className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal/10 rounded-2xl overflow-hidden">
              {[
                { icon: '○', title: 'Free shipping', body: 'On all orders over $75 within Canada. TODO: confirm threshold.' },
                { icon: '◇', title: '12-month warranty', body: 'Every battery is covered against manufacturing defects for one year.' },
                { icon: '△', title: 'Age-verified', body: 'All orders require age verification at checkout. 19+ (18 in AB and QC).' },
              ].map((item) => (
                <div key={item.title} className="bg-cream px-8 py-10">
                  <p className="font-display text-2xl text-charcoal/30 mb-4">{item.icon}</p>
                  <p className="font-sans text-sm font-medium text-charcoal mb-2">{item.title}</p>
                  <p className="font-sans text-sm text-charcoal/50 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
