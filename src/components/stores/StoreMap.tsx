'use client'

import { useEffect, useRef } from 'react'
import type { Map as LMap, Marker } from 'leaflet'
import type { Store } from '@/lib/stores'

interface StoreMapProps {
  stores: Store[]
  activeStore?: Store | null
  onMarkerClick?: (store: Store) => void
}

function getView(stores: Store[]): { center: [number, number]; zoom: number } {
  if (stores.length === 0) return { center: [49.28, -123.12], zoom: 11 }

  const lats = stores.map((s) => s.lat)
  const lngs = stores.map((s) => s.lng)
  const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2
  const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2
  const spread = Math.max(
    Math.max(...lats) - Math.min(...lats),
    Math.max(...lngs) - Math.min(...lngs)
  )

  let zoom = 13
  if (spread > 5) zoom = 7
  else if (spread > 1) zoom = 9
  else if (spread > 0.3) zoom = 12
  else zoom = 14

  return { center: [centerLat, centerLng], zoom }
}

function pinSvg(active: boolean) {
  const fill = active ? '#D4A574' : '#1D4031'
  return `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
    <path d="M14 0C6.27 0 0 6.27 0 14c0 9.625 14 22 14 22S28 23.625 28 14C28 6.27 21.73 0 14 0z" fill="${fill}"/>
    <circle cx="14" cy="14" r="5" fill="white" opacity="0.9"/>
  </svg>`
}

export function StoreMap({ stores, activeStore, onMarkerClick }: StoreMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LMap | null>(null)
  const markersRef = useRef<Marker[]>([])
  // Always-current callback ref — avoids stale closures without re-creating markers
  const onMarkerClickRef = useRef(onMarkerClick)
  useEffect(() => { onMarkerClickRef.current = onMarkerClick })

  // ── Init map once ─────────────────────────────────────────────
  useEffect(() => {
    if (mapRef.current || !containerRef.current) return

    let cancelled = false

    ;(async () => {
      const L = (await import('leaflet')).default
      if (cancelled || !containerRef.current || mapRef.current) return

      // Fix webpack-broken default icon URLs
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      // Start at Vancouver — markers effect will reposition immediately after
      const map = L.map(containerRef.current, {
        center: [49.28, -123.12],
        zoom: 12,
        zoomControl: true,
        scrollWheelZoom: false,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors',
      }).addTo(map)

      mapRef.current = map
      // Trigger marker placement now that the map exists
      placeMarkersRef.current?.()
    })()

    return () => { cancelled = true }
  // run once only
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Stable marker-placement function stored in a ref ─────────
  // This lets the init effect call it as soon as the map is ready,
  // AND the stores/activeStore effect calls it whenever data changes.
  const placeMarkersRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    placeMarkersRef.current = async () => {
      const map = mapRef.current
      if (!map) return

      const L = (await import('leaflet')).default

      // Remove previous markers
      markersRef.current.forEach((m) => m.remove())
      markersRef.current = []

      if (stores.length === 0) return

      const makeIcon = (active: boolean) =>
        L.divIcon({
          html: pinSvg(active),
          className: '',
          iconSize: [28, 36],
          iconAnchor: [14, 36],
          popupAnchor: [0, -40],
        })

      stores.forEach((store) => {
        const isActive = activeStore?.name === store.name
        const marker = L.marker([store.lat, store.lng], { icon: makeIcon(isActive) })

        marker.bindPopup(
          `<div style="font-family:system-ui,sans-serif;min-width:160px;line-height:1.5">
            <strong style="font-size:13px;color:#2B2B2B">${store.name}</strong><br/>
            <span style="font-size:11px;color:#999">${store.neighborhood}</span><br/>
            <span style="font-size:11px;color:#555;display:block;margin-top:3px">${store.address}</span>
            <span style="font-size:11px;color:#888">${store.hours}</span>
          </div>`,
          { maxWidth: 230 }
        )

        marker.on('click', () => {
          onMarkerClickRef.current?.(store)
        })

        marker.addTo(map)
        if (isActive) marker.openPopup()

        markersRef.current.push(marker)
      })

      // Fit view to current store set
      const { center, zoom } = getView(stores)
      map.setView(center, zoom, { animate: true, duration: 0.5 })
    }

    // Run immediately if map already exists (data changed after init)
    placeMarkersRef.current()
  }, [stores, activeStore])

  // ── Destroy on unmount ────────────────────────────────────────
  useEffect(() => {
    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      <div ref={containerRef} className="w-full h-full" />
    </>
  )
}
