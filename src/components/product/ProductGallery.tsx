'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Product } from '@/lib/products'

interface ProductGalleryProps {
  product: Product
}

const views = ['front', 'angle', 'close']

export function ProductGallery({ product }: ProductGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div
        className="aspect-square rounded-2xl overflow-hidden relative"
        style={{ backgroundColor: `${product.hex}15` }}
      >
        <Image
          src={product.image}
          alt={`${product.name} — ${views[activeIdx]} view`}
          fill
          className="object-contain p-10"
          sizes="(max-width: 1024px) 90vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {views.map((view, i) => (
          <button
            key={view}
            onClick={() => setActiveIdx(i)}
            aria-label={`${view} view`}
            className={[
              'flex-1 aspect-square rounded-xl overflow-hidden relative transition-all cursor-pointer',
              activeIdx === i
                ? 'ring-2 ring-charcoal ring-offset-2'
                : 'opacity-50 hover:opacity-80',
            ].join(' ')}
            style={{ backgroundColor: `${product.hex}20` }}
          >
            <Image
              src={product.image}
              alt={`${product.name} thumbnail`}
              fill
              className="object-contain p-3"
              sizes="15vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
