import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { products } from '@/lib/products'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-32">
      <Container>
        <div className="max-w-xl">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-charcoal/30 mb-6">404</p>
          <h1 className="font-display text-5xl md:text-7xl italic text-charcoal leading-tight mb-4">
            this path<br />is unwritten.
          </h1>
          <p className="font-sans text-charcoal/50 mb-10 leading-relaxed">
            The page you are looking for has moved, been removed, or never existed.
            Return to the ritual.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-charcoal text-cream px-8 py-3 font-sans text-sm hover:bg-forest transition-colors"
            >
              return home →
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-charcoal/20 text-charcoal px-8 py-3 font-sans text-sm hover:border-charcoal transition-colors"
            >
              shop the lineup
            </Link>
          </div>

          {/* Color swatches */}
          <div className="flex items-center gap-3">
            {products.map((p) => (
              <Link
                key={p.color}
                href={`/product/${p.color}`}
                aria-label={p.name}
                className="w-8 h-8 rounded-full hover:scale-110 transition-transform"
                style={{ backgroundColor: p.hex }}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
