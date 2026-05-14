'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface Scene {
  id: string
  eyebrow: string
  headline: string
  start: number
  end: number
  cta?: boolean
}

const scenes: Scene[] = [
  { id: 'stillness', eyebrow: 'EIGHT3', headline: 'a quieter way to arrive', start: 0, end: 0.16 },
  { id: 'dew', eyebrow: 'five colors', headline: 'one ritual, your shade', start: 0.16, end: 0.33 },
  { id: 'bloom', eyebrow: 'crafted', headline: 'botanical, considered', start: 0.33, end: 0.5 },
  { id: 'dusk', eyebrow: 'precision', headline: '4.2V, 1000 puff counter, USB-C', start: 0.5, end: 0.66 },
  { id: 'grove', eyebrow: 'the lineup', headline: 'rose · teal · lavender · navy · forest', start: 0.66, end: 0.83 },
  { id: 'ritual', eyebrow: 'begin', headline: 'choose your eight3', start: 0.83, end: 1.0, cta: true },
]

function SceneOverlay({
  scene,
  scrollYProgress,
}: {
  scene: Scene
  scrollYProgress: MotionValue<number>
}) {
  const opacity = useTransform(
    scrollYProgress,
    [scene.start, scene.start + 0.04, scene.end - 0.04, scene.end],
    [0, 1, 1, 0]
  )

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32 px-6 pointer-events-none"
    >
      <div className="text-center max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] font-sans text-charcoal/60 mb-4">
          {scene.eyebrow}
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-charcoal italic leading-tight">
          {scene.headline}
        </h2>
        {scene.cta && (
          <div className="mt-8 pointer-events-auto">
            <Button href="/shop" variant="primary">
              choose your eight3 →
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function HeroOverlay({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {scenes.map((scene) => (
        <SceneOverlay key={scene.id} scene={scene} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  )
}
