'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Product } from '@/lib/products'
import { Eyebrow } from '@/components/ui/Eyebrow'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
      <Link href={`/product/${product.color}`} className="block group">
        <div
          className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-charcoal/5 relative"
          style={{ backgroundColor: `${product.hex}22` }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 20vw"
          />
          {/* subtle color wash on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
            style={{ backgroundColor: product.hex }}
          />
        </div>
        <Eyebrow className="mb-1">{product.mood}</Eyebrow>
        <p className="font-display text-xl italic text-charcoal leading-tight">{product.name}</p>
        <p className="font-sans text-sm text-charcoal/50 mt-1">{product.price} <span className="text-xs">CAD</span></p>
      </Link>
    </motion.div>
  )
}
