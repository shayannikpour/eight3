import Link from 'next/link'
import { MapPin } from 'lucide-react'

export function AddToCartButton() {
  return (
    <Link
      href="/stores"
      className="inline-flex items-center gap-2.5 rounded-full bg-charcoal text-cream px-8 py-3.5 font-sans text-sm tracking-wide hover:bg-forest transition-all duration-300 w-fit group"
    >
      <MapPin size={15} className="transition-transform duration-300 group-hover:scale-110" />
      find a store near you
    </Link>
  )
}
