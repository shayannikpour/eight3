'use client'

import { useState } from 'react'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FadeIn } from '@/components/ui/FadeIn'
import { stores, cities, type City, type Store } from '@/lib/stores'

function StoreCard({ store }: { store: Store }) {
  return (
    <div className="group border border-charcoal/8 rounded-2xl p-6 hover:border-charcoal/20 hover:shadow-sm transition-all duration-300 bg-cream">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-display text-xl italic text-charcoal leading-tight">{store.name}</p>
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal/40 mt-1">
            {store.neighborhood}
          </p>
        </div>
        <span className="text-xs font-sans text-charcoal/30 border border-charcoal/10 rounded-full px-3 py-1 flex-shrink-0 ml-3">
          {store.city}
        </span>
      </div>

      <div className="space-y-2 mb-5">
        <div className="flex items-start gap-2.5">
          <MapPin size={13} className="text-charcoal/30 mt-0.5 flex-shrink-0" />
          <p className="font-sans text-sm text-charcoal/60">{store.address}, {store.city}, BC</p>
        </div>
        <div className="flex items-start gap-2.5">
          <Phone size={13} className="text-charcoal/30 mt-0.5 flex-shrink-0" />
          <p className="font-sans text-sm text-charcoal/60">{store.phone}</p>
        </div>
        <div className="flex items-start gap-2.5">
          <Clock size={13} className="text-charcoal/30 mt-0.5 flex-shrink-0" />
          <p className="font-sans text-sm text-charcoal/60">{store.hours}</p>
        </div>
      </div>

      <a
        href={store.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-forest hover:text-charcoal transition-colors group-hover:gap-3 duration-300"
      >
        Get Directions <ExternalLink size={11} />
      </a>
    </div>
  )
}

export default function StoresPage() {
  const [activeCity, setActiveCity] = useState<City>('All')

  const filtered = activeCity === 'All'
    ? stores
    : stores.filter((s) => s.city === activeCity)

  const cityCount = (city: City) =>
    city === 'All' ? stores.length : stores.filter((s) => s.city === city).length

  // Map embed centers: Vancouver metro for All/Vancouver/Burnaby, specific for others
  const mapSrc = {
    All: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d166822.57!2d-123.12!3d49.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1716000000000!5m2!1sen!2sca',
    Vancouver: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40196!2d-123.124!3d49.282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1716000000000!5m2!1sen!2sca',
    Burnaby: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40196!2d-122.984!3d49.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1716000000000!5m2!1sen!2sca',
    Kelowna: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40196!2d-119.496!3d49.888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1716000000000!5m2!1sen!2sca',
    Whistler: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20098!2d-122.957!3d50.116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1716000000000!5m2!1sen!2sca',
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
                onClick={() => setActiveCity(city)}
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
                <iframe
                  src={mapSrc[activeCity]}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`EIGHT3 stores in ${activeCity}`}
                />
              </div>
              <p className="font-sans text-xs text-charcoal/30 mt-3 text-center">
                {filtered.length} store{filtered.length !== 1 ? 's' : ''} in {activeCity === 'All' ? 'British Columbia' : activeCity}
              </p>
            </div>

            {/* Store list */}
            <div className="lg:col-span-2 space-y-4 max-h-[80vh] overflow-y-auto pr-1">
              {filtered.map((store, i) => (
                <FadeIn key={`${store.name}-${i}`} delay={i * 0.04}>
                  <StoreCard store={store} />
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
