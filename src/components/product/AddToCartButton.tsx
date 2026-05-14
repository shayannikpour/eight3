'use client'

import { useState } from 'react'

export function AddToCartButton() {
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
    // TODO: connect to Shopify or similar cart system
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full bg-charcoal text-cream px-8 py-3 font-sans text-sm tracking-wide hover:bg-forest transition-all duration-300 w-fit cursor-pointer"
    >
      {added ? 'cart coming soon ✓' : 'add to cart'}
    </button>
  )
}
