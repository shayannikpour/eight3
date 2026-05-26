'use client'

import { useEffect, useRef } from 'react'
import type { Store } from '@/lib/stores'

interface StoreMapProps {
  stores: Store[]
  activeStore?: Store | null
  onMarkerClick?: (store: Store) => void
}

// City-level viewport configs
function getView(stores: Store[]): { center: [number, number]; zoom: number } {
  if (stores.length === 0) return { center: [49.25, -123.12], zoom: 10 }

  const lats = stores.map((s) => s.lat)
  const lngs = stores.map((s) => s.lng)
  const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2
  const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2

  // Spread heuristic → zoom
  const latSpread = Math.max(...lats) - Math.min(...lats)
  const lngSpread = Math.max(...lngs) - Math.min(...lngs)
  const spread = Math.max(latSpread, lngSpread)

  let zoom = 13
  if (spread > 5) zoom = 7
  else if (spread > 1) zoom = 10
  else if (spread > 0.3) zoom = 12
  else zoom = 14

  return { center: [centerLat, centerLng], zoom }
}

export function StoreMap({ stores, activeStore, onMarkerClick }: StoreMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<unknown>(null)
  const markersRef = useRef<unknown[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    // Dynamically import Leaflet (SSR-safe)
    let L: typeof import('leaflet')
    let map: import('leaflet').Map

    const init = async () => {
      L = (await import('leaflet')).default

      // Fix default icon paths broken by webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      if (mapRef.current) {
        // Already initialised — just update view + markers
        map = mapRef.current as import('leaflet').Map
        updateMarkers(L, map)
        return
      }

      map = L.map(containerRef.current!, { zoomControl: true, scrollWheelZoom: false })
      mapRef.current = map

      // OpenStreetMap tiles — no API key needed
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors',
      }).addTo(map)

      updateMarkers(L, map)
    }

    const updateMarkers = (L: typeof import('leaflet'), map: import('leaflet').Map) => {
      // Remove old markers
      markersRef.current.forEach((m) => (m as import('leaflet').Marker).remove())
      markersRef.current = []

      if (stores.length === 0) return

      // Custom pin SVG — forest green circle with white dot
      const pinSvg = (active = false) => `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
          <path d="M14 0C6.27 0 0 6.27 0 14c0 9.625 14 22 14 22S28 23.625 28 14C28 6.27 21.73 0 14 0z"
            fill="${active ? '#D4A574' : '#1D4031'}" />
          <circle cx="14" cy="14" r="5" fill="white" opacity="0.9" />
        </svg>`

      const makeIcon = (active = false) =>
        L.divIcon({
          html: pinSvg(active),
          className: '',
          iconSize: [28, 36],
          iconAnchor: [14, 36],
          popupAnchor: [0, -38],
        })

      stores.forEach((store) => {
        const isActive = activeStore?.name === store.name
        const marker = L.marker([store.lat, store.lng], { icon: makeIcon(isActive) })

        marker.bindPopup(
          `<div style="font-family:system-ui,sans-serif;min-width:160px;line-height:1.4">
            <strong style="font-size:13px;color:#2B2B2B">${store.name}</strong><br/>
            <span style="font-size:11px;color:#888">${store.neighborhood}</span><br/>
            <span style="font-size:11px;color:#555;margin-top:4px;display:block">${store.address}</span>
            <span style="font-size:11px;color:#888">${store.hours}</span>
          </div>`,
          { maxWidth: 220 }
        )

        marker.on('click', () => {
          onMarkerClick?.(store)
        })

        marker.addTo(map)
        markersRef.current.push(marker)

        if (isActive) marker.openPopup()
      })

      // Fit map to markers
      const { center, zoom } = getView(stores)
      map.setView(center, zoom, { animate: true })
    }

    init()

    return () => {
      // Don't destroy map — just let it persist across filter changes
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stores, activeStore])

  // Destroy on unmount
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        ;(mapRef.current as import('leaflet').Map).remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      <div ref={containerRef} className="w-full h-full" />
    </>
  )
}
