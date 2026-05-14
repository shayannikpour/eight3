import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

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
      'We believe the best tools disappear in the hand. EIGHT3 draws the attention inward rather than to itself.',
    ],
    imageAlt: 'Rose Pink pen against dawn light',
  },
  {
    id: 'dew',
    eyebrow: '02 · dew',
    headline: 'the first clean breath',
    body: [
      'Morning is the original ritual. The dew moment — that specific clarity that exists before the world has asked anything of you — is the feeling Mint Teal was built to hold.',
      'EIGHT3 Mint Teal is for the deliberate morning. The one you choose rather than fall into.',
    ],
    imageAlt: 'Mint Teal pen with morning light',
  },
  {
    id: 'bloom',
    eyebrow: '03 · bloom',
    headline: 'botanical, considered',
    body: [
      'Every material in EIGHT3 was chosen the way a botanist chooses specimens — with patience and attention to quality. The matte finish resists fingerprints and catches light the way a leaf does: softly, completely.',
      'Lavender Purple belongs to the afternoon — that open hour when the day is fully awake but not yet demanding.',
    ],
    imageAlt: 'Lavender Purple pen in afternoon light',
  },
  {
    id: 'dusk',
    eyebrow: '04 · dusk',
    headline: '4.2V, engineered for precision',
    body: [
      'Precision is not about complexity. It is about having exactly what you need and nothing more. The 4.2V variable draw gives you three modes: slow, steady, and certain. The 1000-puff counter marks the session without judgment.',
      'USB-C. Two hours. Ready when you return.',
    ],
    imageAlt: 'Midnight Navy pen at dusk',
  },
  {
    id: 'grove',
    eyebrow: '05 · grove',
    headline: 'five matte colors',
    body: [
      'Five colors, each a different hour of the same day. Rose for dawn, Teal for morning, Lavender for afternoon, Navy for dusk, Forest for the golden moment before dark.',
      'Choose the color that matches the ritual you return to most. Or collect them all — each one holds a different quality of light.',
    ],
    imageAlt: 'All five EIGHT3 pens arranged in a grove',
  },
  {
    id: 'ritual',
    eyebrow: '06 · ritual',
    headline: 'begin',
    body: [
      'The ritual does not require ceremony. It requires only intention. You pick it up. You pause. You return.',
      'EIGHT3 does not ask you to slow down. It simply makes slowing down the most natural thing in the world. That is the whole of it.',
    ],
    imageAlt: 'Forest Green pen in golden hour',
  },
]

export default function RitualPage() {
  return (
    <>
      <div className="pt-32 pb-16 text-center">
        <Container>
          <Eyebrow>the ritual</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl italic text-charcoal leading-tight mt-4">
            six scenes, one intention
          </h1>
        </Container>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-section-lg space-y-section">
        {scenes.map((scene) => (
          <article key={scene.id}>
            <Eyebrow className="mb-4">{scene.eyebrow}</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl italic text-charcoal leading-snug mb-6">
              {scene.headline}
            </h2>
            <div
              className="w-full aspect-video rounded-2xl bg-charcoal/5 flex items-center justify-center mb-8"
              aria-label={scene.imageAlt}
            >
              <p className="font-sans text-xs text-charcoal/30">{scene.imageAlt}</p>
            </div>
            {scene.body.map((para, i) => (
              <p key={i} className="font-sans text-charcoal/70 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </article>
        ))}
      </div>
    </>
  )
}
