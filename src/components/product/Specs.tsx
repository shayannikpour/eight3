'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

const specs = [
  { label: 'Voltage', value: '4.2V variable — three output modes for precise draw control.' },
  { label: 'Puff Counter', value: '1000-puff integrated counter. Reset between sessions.' },
  { label: 'Charging', value: 'USB-C, 2-hour full charge from empty.' },
  {
    label: 'Cartridge Compatibility',
    value: 'Universal 510-thread. Compatible with all standard cartridges.',
  },
  { label: 'Battery Capacity', value: '650mAh lithium-ion. Matte-finish outer casing.' },
  {
    label: 'THC Content',
    value: 'TODO: insert lab-verified THC/CBD numbers per cartridge batch.',
  },
]

export function Specs() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-charcoal/10">
      {specs.map((spec, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
          >
            <span className="font-sans text-sm font-medium text-charcoal">{spec.label}</span>
            <ChevronDown
              size={16}
              className={clsx(
                'text-charcoal/40 transition-transform duration-300',
                open === i && 'rotate-180'
              )}
            />
          </button>
          {open === i && (
            <p className="font-sans text-sm text-charcoal/60 pb-4 leading-relaxed">{spec.value}</p>
          )}
        </div>
      ))}
    </div>
  )
}
