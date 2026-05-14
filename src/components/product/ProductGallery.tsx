'use client'

import { useState } from 'react'
import { Product } from '@/lib/products'

const thumbnails = ['Front View', 'Side View', 'Detail']

interface ProductGalleryProps {
  product: Product
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="space-y-4">
      <div
        className="aspect-square rounded-2xl flex items-center justify-center"
        style={{ backgroundColor: `${product.hex}20` }}
      >
        <div className="text-center">
          <div
            className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            style={{ backgroundColor: product.hex }}
          />
          <p className="font-sans text-xs text-charcoal/40">{thumbnails[activeIdx]}</p>
        </div>
      </div>
      <div className="flex gap-3">
        {thumbnails.map((label, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            aria-label={label}
            className={clsx(
              'flex-1 aspect-square rounded-xl flex items-center justify-center transition-all cursor-pointer',
              activeIdx === i ? 'ring-2 ring-charcoal' : 'opacity-50 hover:opacity-75'
            )}
            style={{ backgroundColor: `${product.hex}30` }}
          >
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: product.hex }} />
          </button>
        ))}
      </div>
    </div>
  )
}

function clsx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
