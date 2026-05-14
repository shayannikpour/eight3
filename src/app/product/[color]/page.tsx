import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ColorPicker } from '@/components/product/ColorPicker'
import { ProductGallery } from '@/components/product/ProductGallery'
import { Specs } from '@/components/product/Specs'
import { AddToCartButton } from '@/components/product/AddToCartButton'
import { getProduct, products, ProductColor } from '@/lib/products'

interface Props {
  params: Promise<{ color: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ color: p.color }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { color } = await params
  const product = getProduct(color)
  if (!product) return {}
  return { title: `${product.name}` }
}

export default async function ProductPage({ params }: Props) {
  const { color } = await params
  const product = getProduct(color)
  if (!product) notFound()

  return (
    <>
      <div className="pt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16">
            <ProductGallery product={product} />

            <div className="flex flex-col justify-center">
              <Eyebrow className="mb-2">{product.color}</Eyebrow>
              <h1 className="font-display text-4xl md:text-5xl italic text-charcoal leading-tight mb-6">
                EIGHT3 in {product.name}
              </h1>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="mb-8">
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/50 mb-3">
                  Other colors
                </p>
                <ColorPicker activeColor={product.color as ProductColor} />
              </div>

              <p className="font-display text-3xl italic text-charcoal mb-6">
                {/* TODO: set price */}
                $TBD
              </p>

              <AddToCartButton />

              <div className="mt-12">
                <Specs />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Section className="border-t border-charcoal/10">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Eyebrow>the ritual of {product.color}</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl italic text-charcoal mt-4 mb-6 leading-snug">
              {product.mood}
            </h2>
            <p className="font-sans text-charcoal/70 leading-relaxed">{product.ritualCopy}</p>
          </div>
        </Container>
      </Section>
    </>
  )
}
