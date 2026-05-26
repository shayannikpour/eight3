'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FadeIn } from '@/components/ui/FadeIn'
import { stores, cities, type City, type Store } from '@/lib/stores'

// Load Leaflet map client-side only (no SSR — Leaflet needs the DOM)
const StoreMap = dynamic(
  () => import('@/components/stores/StoreMap').then((m) => m.StoreMap),
  { ssr: false, loading: () => <div className="w-full h-full bg-charcoal/5 rounded-2xl animate-pulse" /> }
)

function StoreCard({
  store,
  active,
  onClick,
}: {
  store: Store
  active: boolean
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={[
        'group border rounded-2xl p-6 transition-all duration-300 cursor-pointer',
        active
          ? 'border-forest bg-forest text-cream shadow-md'
          : 'border-charcoal/8 bg-cream hover:border-charcoal/20 hover:shadow-sm',
      ].join(' ')}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className={`font-display text-xl italic leading-tight ${active ? 'text-cream' : 'text-charcoal'}`}>
            {store.name}
          </p>
          <p className={`font-sans text-xs uppercase tracking-[0.15em] mt-1 ${active ? 'text-cream/60' : 'text-charcoal/40'}`}>
            {store.neighborhood}
          </p>
        </div>
        <span className={`text-xs font-sans border rounded-full px-3 py-1 flex-shrink-0 ml-3 ${active ? 'border-cream/20 text-cream/60' : 'border-charcoal/10 text-charcoal/30'}`}>
          {store.city}
        </span>
      </div>

      <div className="space-y-2 mb-5">
        <div className="flex items-start gap-2.5">
          <MapPin size={13} className={`mt-0.5 flex-shrink-0 ${active ? 'text-cream/50' : 'text-charcoal/30'}`} />
          <p className={`font-sans text-sm ${active ? 'text-cream/80' : 'text-charcoal/60'}`}>{store.address}, {store.city}, BC</p>
        </div>
        <div className="flex items-start gap-2.5">
          <Phone size={13} className={`mt-0.5 flex-shrink-0 ${active ? 'text-cream/50' : 'text-charcoal/30'}`} />
          <p className={`font-sans text-sm ${active ? 'text-cream/80' : 'text-charcoal/60'}`}>{store.phone}</p>
        </div>
        <div className="flex items-start gap-2.5">
          <Clock size={13} className={`mt-0.5 flex-shrink-0 ${active ? 'text-cream/50' : 'text-charcoal/30'}`} />
          <p className={`font-sans text-sm ${active ? 'text-cream/80' : 'text-charcoal/60'}`}>{store.hours}</p>
        </div>
      </div>

      <a
        href={store.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={`inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] transition-colors group-hover:gap-3 duration-300 ${active ? 'text-cream/70 hover:text-cream' : 'text-forest hover:text-charcoal'}`}
      >
        Get Directions <ExternalLink size={11} />
      </a>
    </div>
  )
}

export default function StoresPage() {
  const [activeCity, setActiveCity] = useState<City>('All')
  const [activeStore, setActiveStore] = useState<Store | null>(null)

  const filtered = activeCity === 'All'
    ? stores
    : stores.filter((s) => s.city === activeCity)

  const cityCount = (city: City) =>
    city === 'All' ? stores.length : stores.filter((s) => s.city === city).length

  const handleCityChange = (city: City) => {
    setActiveCity(city)
    setActiveStore(null)
  }

  const handleMarkerClick = (store: Store) => {
    setActiveStore(store)
    // Scroll the matching card into view
    const el = document.getElementById(`store-${store.name.replace(/\s+/g, '-')}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  const handleCardClick = (store: Store) => {
    setActiveStore((prev) => (prev?.name === store.name ? null : store))
  }

  return (
    <>
      {/* Hero */}
      <div className="bg-forest text-cream pt-32 pb-20">
        <Container>
          <FadeIn>
            <Eyebrow className="text-cream/40 mb-4">find eight3</Eyebrow>
            <h1 className="font-display text-6xl md:text-8xl italic leading-none mb-6">
              find a store
            </h1>
            <p className="font-sans text-cream/50 max-w-md leading-relaxed">
              EIGHT3 is available at licensed cannabis retailers across British Columbia.
              Find a store near you and begin your ritual.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="flex items-center gap-8 mt-10 pt-10 border-t border-cream/10">
            {[
              { n: '20', label: 'retail locations' },
              { n: '4', label: 'cities' },
              { n: 'BC', label: 'Canada' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl italic text-cream">{s.n}</p>
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-cream/40">{s.label}</p>
              </div>
            ))}
          </FadeIn>
        </Container>
      </div>

      {/* Map + listings */}
      <div className="bg-cream">
        <Container>
          {/* City tabs */}
          <div className="flex flex-wrap gap-2 py-8 border-b border-charcoal/8">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => handleCityChange(city)}
                className={[
                  'rounded-full px-5 py-2 font-sans text-xs uppercase tracking-[0.15em] transition-all cursor-pointer',
                  activeCity === city
                    ? 'bg-charcoal text-cream'
                    : 'border border-charcoal/15 text-charcoal/50 hover:border-charcoal/40 hover:text-charcoal',
                ].join(' ')}
              >
                {city} <span className="ml-1 opacity-50">({cityCount(city)})</span>
              </button>
            ))}
          </div>

          {/* Map + cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 py-12">
            {/* Map */}
            <div className="lg:col-span-3 lg:sticky lg:top-24 self-start">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-charcoal/8">
                <StoreMap
                  stores={filtered}
                  activeStore={activeStore}
                  onMarkerClick={handleMarkerClick}
                />
              </div>
              <p className="font-sans text-xs text-charcoal/30 mt-3 text-center">
                {filtered.length} store{filtered.length !== 1 ? 's' : ''} in{' '}
                {activeCity === 'All' ? 'British Columbia' : activeCity}
                {activeStore ? ` · ${activeStore.name} selected` : ''}
              </p>
            </div>

            {/* Store list */}
            <div className="lg:col-span-2 space-y-4 max-h-[80vh] overflow-y-auto pr-1">
              {filtered.map((store, i) => (
                <FadeIn key={`${store.name}-${i}`} delay={i * 0.04}>
                  <div id={`store-${store.name.replace(/\s+/g, '-')}`}>
                    <StoreCard
                      store={store}
                      active={activeStore?.name === store.name}
                      onClick={() => handleCardClick(store)}
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom note */}
      <div className="border-t border-charcoal/8 py-10">
        <Container>
          <p className="font-sans text-xs text-charcoal/30 text-center leading-relaxed max-w-lg mx-auto">
            Store hours and availability may vary. Contact the retailer directly to confirm EIGHT3 stock.
            Proof of age (19+, 18 in AB and QC) required at point of sale.
          </p>
        </Container>
      </div>
    </>
  )
}
