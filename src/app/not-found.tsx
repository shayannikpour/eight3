import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-charcoal/40 mb-4">404</p>
          <h1 className="font-display text-5xl md:text-7xl italic text-charcoal leading-tight mb-6">
            this path is unwritten.
          </h1>
          <p className="font-sans text-charcoal/60 mb-10">return to the ritual.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-charcoal text-cream px-8 py-3 font-sans text-sm hover:bg-forest transition-colors"
          >
            return →
          </Link>
        </div>
      </Container>
    </div>
  )
}
