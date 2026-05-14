'use client'

import { useRouter } from 'next/navigation'
import { products, ProductColor } from '@/lib/products'
import { clsx } from 'clsx'

interface ColorPickerProps {
  activeColor: ProductColor
}

export function ColorPicker({ activeColor }: ColorPickerProps) {
  const router = useRouter()

  return (
    <div className="flex items-center gap-3">
      {products.map((product) => (
        <button
          key={product.color}
          onClick={() => router.push(`/product/${product.color}`)}
          aria-label={product.name}
          className={clsx(
            'w-8 h-8 rounded-full transition-all duration-200 cursor-pointer',
            activeColor === product.color ? 'ring-2 ring-charcoal ring-offset-2' : 'hover:scale-110'
          )}
          style={{ backgroundColor: product.hex }}
        />
      ))}
    </div>
  )
}
