import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'The Ritual',
}

const scenes = [
  {
    id: 'stillness',
    eyebrow: '01 · stillness',
    headline: 'a quieter way to arrive',
    body: [
      'Before the day gathers its noise, there is a moment. EIGHT3 was designed to live inside that moment. Not as an escape — as an anchor. The ritual of stillness is the deliberate act of arriving somewhere on your own terms, on your own timeline, in your own breath.',
      'We believe the best tools disappear in the hand. EIGHT3 draws the attention inward rather than to itself. The matte finish resists the light. The weight is calibrated for the palm. Nothing announces itself.',
    ],
    product: products[0],
  },
  {
    id: 'dew',
    eyebrow: '02 · dew',
    headline: 'the first clean breath',
    body: [
      'Morning is the original ritual. The dew moment — that specific clarity that exists before the world has asked anything of you — is the feeling Mint Teal was built to hold.',
      'EIGHT3 Mint Teal is for the deliberate morning. The one you choose rather than fall into. Cool aluminum, ceramic draw, the quiet click of intention.',
    ],
    product: products[1],
  },
  {
    id: 'bloom',
    eyebrow: '03 · bloom',
    headline: 'botanical, considered',
    body: [
      'Every material in EIGHT3 was chosen the way a botanist chooses specimens — with patience and attention to quality. The matte finish resists fingerprints and catches light the way a leaf does: softly, completely.',
      'Lavender Purple belongs to the afternoon — that open hour when the day is fully awake but not yet demanding. The dreaming hour. The hour of bloom.',
    ],
    product: products[2],
  },
  {
    id: 'dusk',
    eyebrow: '04 · dusk',
    headline: '4.2V, engineered for precision',
    body: [
      'Precision is not about complexity. It is about having exactly what you need and nothing more. The 4.2V variable draw gives you three modes: slow, steady, and certain. The OLED counter tracks the session without judgment.',
      'USB-C. Two hours. Ready when you return. Midnight Navy is the color of this hour — the deliberate step into evening.',
    ],
    product: products[3],
  },
  {
    id: 'grove',
    eyebrow: '05 · grove',
    headline: 'five matte colors',
    body: [
      'Five colors, each a different hour of the same day. Rose for dawn, Teal for morning, Lavender for afternoon, Navy for dusk, Forest for the golden moment before dark.',
      'Choose the color that matches the ritual you return to most. Or collect them all — each one holds a different quality of light, a different quality of pause.',
    ],
    product: products[4],
  },
  {
    id: 'ritual',
    eyebrow: '06 · ritual',
    headline: 'begin',
    body: [
      'The ritual does not require ceremony. It requires only intention. You pick it up. You pause. You return.',
      'EIGHT3 does not ask you to slow down. It simply makes slowing down the most natural thing in the world. That is the whole of it.',
    ],
    product: null,
  },
]

export default function RitualPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 border-b border-charcoal/8">
        <Container>
          <div className="max-w-2xl">
            <FadeIn>
              <Eyebrow className="mb-6">the ritual</Eyebrow>
              <h1 className="font-display text-6xl md:text-8xl italic text-charcoal leading-none mb-8">
                six scenes,<br />one intention
              </h1>
              <p className="font-sans text-charcoal/60 leading-relaxed text-lg max-w-md">
                The story behind EIGHT3 — told in the six moods of the hero, one for each hour of the day.
              </p>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/* Scene articles */}
      <div className="divide-y divide-charcoal/8">
        {scenes.map((scene, index) => (
          <article key={scene.id} className="py-section">
            <Container>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                {/* Text */}
                <FadeIn direction={index % 2 === 0 ? 'right' : 'left'} className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Eyebrow className="mb-5">{scene.eyebrow}</Eyebrow>
                  <h2 className="font-display text-4xl md:text-5xl italic text-charcoal leading-tight mb-8">
                    {scene.headline}
                  </h2>
                  {scene.body.map((para, i) => (
                    <p key={i} className="font-sans text-charcoal/70 leading-relaxed mb-4 text-base">
                      {para}
                    </p>
                  ))}
                  {scene.product && (
                    <div className="mt-8 flex items-center gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex-shrink-0"
                        style={{ backgroundColor: scene.product.hex }}
                      />
                      <Button href={`/product/${scene.product.color}`} variant="ghost">
                        shop {scene.product.name} →
                      </Button>
                    </div>
                  )}
                  {!scene.product && (
                    <div className="mt-8">
                      <Button href="/shop" variant="secondary">begin your eight3 →</Button>
                    </div>
                  )}
                </FadeIn>

                {/* Image / pen */}
                <FadeIn direction={index % 2 === 0 ? 'left' : 'right'} className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  {scene.product ? (
                    <div
                      className="aspect-square rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${scene.product.hex}18` }}
                    >
                      <Image
                        src={scene.product.image}
                        alt={scene.product.name}
                        width={400}
                        height={400}
                        className="object-contain p-12 w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square rounded-2xl bg-charcoal flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-display text-6xl italic text-cream/20 mb-4">EIGHT3</p>
                        <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/30">
                          a quieter way to arrive
                        </p>
                      </div>
                    </div>
                  )}
                </FadeIn>

              </div>
            </Container>
          </article>
        ))}
      </div>
    </>
  )
}
