'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Product } from '@/lib/products'
import { Eyebrow } from '@/components/ui/Eyebrow'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
      <Link href={`/product/${product.color}`} className="block group">
        <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-charcoal/5 flex items-center justify-center relative bg-cream">
          <motion.div
            className="w-24 h-24 rounded-full"
            style={{ backgroundColor: product.hex }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            style={{
              background: `radial-gradient(circle at center, ${product.hex}30, transparent)`,
            }}
          />
        </div>
        <Eyebrow className="mb-1">{product.mood}</Eyebrow>
        <p className="font-display text-xl italic text-charcoal">{product.name}</p>
      </Link>
    </motion.div>
  )
}
