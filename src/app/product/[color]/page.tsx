import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
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

  const otherProducts = products.filter((p) => p.color !== product.color)

  return (
    <>
      {/* Color-tinted hero band */}
      <div className="pt-16" style={{ backgroundColor: `${product.hex}12` }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16">
            <FadeIn direction="right">
              <ProductGallery product={product} />
            </FadeIn>

            <FadeIn direction="left" className="flex flex-col justify-center">
              <Eyebrow className="mb-2">{product.mood}</Eyebrow>
              <h1 className="font-display text-4xl md:text-6xl italic text-charcoal leading-tight mb-4">
                EIGHT3<br />
                <span style={{ color: product.hex === '#F5F0E8' ? '#2B2B2B' : product.hex }}>
                  {product.name}
                </span>
              </h1>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-8 max-w-sm">
                {product.description}
              </p>

              {/* Color picker */}
              <div className="mb-8">
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-3">
                  color
                </p>
                <ColorPicker activeColor={product.color as ProductColor} />
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <p className="font-display text-4xl italic text-charcoal">
                  {product.price}
                </p>
                <p className="font-sans text-xs text-charcoal/40 uppercase tracking-[0.1em]">CAD</p>
              </div>

              {/* Features pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['4.2V variable', '1000 puff counter', 'USB-C', '510-thread', 'OLED display'].map((f) => (
                  <span
                    key={f}
                    className="font-sans text-xs text-charcoal/60 border border-charcoal/15 rounded-full px-3 py-1"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <AddToCartButton />

              {/* Specs accordion */}
              <div className="mt-12 pt-8 border-t border-charcoal/10">
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mb-4">
                  specifications
                </p>
                <Specs />
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/* Ritual section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <FadeIn>
              <div
                className="aspect-[4/5] rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${product.hex}20` }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={320}
                  height={400}
                  className="object-contain p-12 w-full h-full"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <Eyebrow className="mb-4">the ritual of {product.color}</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl italic text-charcoal mt-2 mb-6 leading-snug">
                {product.mood}
              </h2>
              <p className="font-sans text-charcoal/70 leading-relaxed text-base mb-8">
                {product.ritualCopy}
              </p>
              <Button href="/ritual" variant="ghost">read the full ritual →</Button>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* You might also like */}
      <Section className="border-t border-charcoal/10 bg-charcoal/2">
        <Container>
          <FadeIn className="text-center mb-12">
            <Eyebrow>explore the lineup</Eyebrow>
            <h2 className="font-display text-3xl italic text-charcoal mt-3">other shades</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {otherProducts.map((p, i) => (
              <FadeIn key={p.color} delay={i * 0.08}>
                <Link href={`/product/${p.color}`} className="group block">
                  <div
                    className="aspect-square rounded-xl overflow-hidden relative mb-3 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ backgroundColor: `${p.hex}20` }}
                  >
                    <Image src={p.image} alt={p.name} fill className="object-contain p-6" sizes="25vw" />
                  </div>
                  <p className="font-display italic text-charcoal text-base">{p.name}</p>
                  <p className="font-sans text-xs text-charcoal/40 mt-0.5">{p.mood}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
