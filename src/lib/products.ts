export type ProductColor = 'rose' | 'teal' | 'lavender' | 'navy' | 'forest'

export interface Product {
  color: ProductColor
  name: string
  hex: string
  mood: string
  scene: string
  description: string
  ritualCopy: string
  price: string
  image: string
}

export const products: Product[] = [
  {
    color: 'rose',
    name: 'Rose Pink',
    hex: '#E8A4B8',
    mood: 'stillness · dawn',
    scene: 'Stillness',
    description:
      'A soft blush that arrives with the quiet of early morning. Rose Pink is the color of intention before the day begins.',
    ritualCopy:
      'Rose Pink carries the light of dawn — that liminal hour when the world is still deciding. Hold it and feel the day begin without urgency. This is stillness made tangible.',
    price: '$45',
    image: '/images/pen-rose.png',
  },
  {
    color: 'teal',
    name: 'Mint Teal',
    hex: '#6FCFB8',
    mood: 'dew · morning',
    scene: 'Dew',
    description:
      'The color of dew on broad leaves. Mint Teal is clarity before the noise begins, the first clean breath of day.',
    ritualCopy:
      'Mint Teal is morning condensed into matte glass. Cool to the touch, grounding to the senses. Begin here. Everything else follows.',
    price: '$45',
    image: '/images/pen-teal.png',
  },
  {
    color: 'lavender',
    name: 'Lavender Purple',
    hex: '#B89FD9',
    mood: 'bloom · afternoon',
    scene: 'Bloom',
    description:
      'The dreaming hour of full bloom. Lavender Purple sits at the threshold between active and contemplative.',
    ritualCopy:
      'Lavender Purple is the bloom of afternoon — unhurried, fully open. The ritual of the mid-day pause. Let the world continue without you for a moment.',
    price: '$45',
    image: '/images/pen-lavender.png',
  },
  {
    color: 'navy',
    name: 'Midnight Navy',
    hex: '#1F3A5F',
    mood: 'dusk · evening',
    scene: 'Dusk',
    description:
      'Deep as the hour before full dark. Midnight Navy is the color of transition, the exhale between afternoon and night.',
    ritualCopy:
      'Midnight Navy marks the hour when the day releases its grip. A precise color for a precise moment — the deliberate step into evening. Put the day behind you.',
    price: '$45',
    image: '/images/pen-navy.png',
  },
  {
    color: 'forest',
    name: 'Deep Forest Green',
    hex: '#1D4031',
    mood: 'grove · golden hour',
    scene: 'Grove',
    description:
      'Rooted. Ancient. The deep green of old growth at golden hour. Forest is the color of ceremony.',
    ritualCopy:
      'Deep Forest Green is where the ritual completes. Old growth. Long roots. The golden hour that rewards patience. This is the color of the grove — and the grove is everywhere you bring it.',
    price: '$45',
    image: '/images/pen-forest.png',
  },
]

export function getProduct(color: string): Product | undefined {
  return products.find((p) => p.color === color)
}
