'use client'

import { useEffect, useRef } from 'react'
import type { Map as LMap, Marker } from 'leaflet'
import type { Store } from '@/lib/stores'

interface StoreMapProps {
  stores: Store[]
  activeStore?: Store | null
  onMarkerClick?: (store: Store) => void
}

function pinHtml(active: boolean) {
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
  // Always-current ref so marker click handlers never go stale
  const callbackRef = useRef(onMarkerClick)
  useEffect(() => { callbackRef.current = onMarkerClick })

  useEffect(() => {
    if (!containerRef.current) return
    let cancelled = false

    ;(async () => {
      // ── Load Leaflet (cached after first import) ──────────────
      const L = (await import('leaflet')).default
      if (cancelled || !containerRef.current) return

      // Fix Webpack stripping the default icon URLs
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      // ── Create map once ───────────────────────────────────────
      if (!mapRef.current) {
        mapRef.current = L.map(containerRef.current, {
          center: [49.28, -123.12],
          zoom: 12,
          zoomControl: true,
          scrollWheelZoom: false,
        })
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap contributors',
        }).addTo(mapRef.current)
      }

      const map = mapRef.current

      // ── Remove old markers ────────────────────────────────────
      markersRef.current.forEach((m) => m.remove())
      markersRef.current = []

      if (stores.length === 0 || cancelled) return

      // ── Add fresh markers ─────────────────────────────────────
      const makeIcon = (active: boolean) =>
        L.divIcon({
          html: pinHtml(active),
          className: '',
          iconSize:   [28, 36],
          iconAnchor: [14, 36],
          popupAnchor:[0, -40],
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
          callbackRef.current?.(store)
        })

        marker.addTo(map)
        if (isActive) marker.openPopup()
        markersRef.current.push(marker)
      })

      // ── Fit viewport to the current set of stores ─────────────
      // Use fitBounds — Leaflet calculates the right center + zoom
      const bounds = L.latLngBounds(stores.map((s) => [s.lat, s.lng] as [number, number]))
      map.fitBounds(bounds, { padding: [48, 48], maxZoom: 14, animate: true })
    })()

    return () => { cancelled = true }
  }, [stores, activeStore]) // re-run whenever the displayed stores change

  // Destroy on unmount
  useEffect(() => () => {
    mapRef.current?.remove()
    mapRef.current = null
  }, [])

  return (
    <>
      {/* Load Leaflet CSS from CDN — must come before the map div */}
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <div ref={containerRef} className="w-full h-full" />
    </>
  )
}
