import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ProductCard } from '@/components/product/ProductCard'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Shop',
}

const filterChips = ['all', 'rose', 'teal', 'lavender', 'navy', 'forest']

export default function ShopPage() {
  return (
    <>
      <div className="pt-32 pb-16 text-center bg-cream">
        <Container>
          <Eyebrow>the lineup</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl italic text-charcoal leading-tight mt-4">
            five matte colors.
            <br />
            one ritual.
          </h1>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {filterChips.map((chip) => (
              <button
                key={chip}
                className="rounded-full border border-charcoal/20 px-5 py-2 font-sans text-xs uppercase tracking-[0.15em] text-charcoal/60 hover:border-charcoal hover:text-charcoal transition-all cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductCard key={product.color} product={product} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
