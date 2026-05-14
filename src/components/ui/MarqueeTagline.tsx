'use client'

export function MarqueeTagline() {
  const items = ['rose', 'teal', 'lavender', 'navy', 'forest']
  const doubled = [...items, ...items, ...items, ...items]

  return (
    <div className="border-y border-charcoal/10 py-5 overflow-hidden bg-cream">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-2xl italic text-charcoal/40 mx-8">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
