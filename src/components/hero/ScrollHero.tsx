'use client'

import { useRef, useEffect } from 'react'
import { useScroll } from 'framer-motion'
import { HeroOverlay } from './HeroOverlay'

export function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.load()
    const onLoaded = () => { video.currentTime = 0 }
    video.addEventListener('loadedmetadata', onLoaded)

    // iOS Safari: unlock seeking on first touch
    let unlocked = false
    const unlock = () => {
      if (unlocked) return
      unlocked = true
      video.play().then(() => {
        video.pause()
        video.currentTime = video.currentTime
      }).catch(() => {})
    }
    window.addEventListener('touchstart', unlock, { once: true, passive: true })

    // Drive video time from scroll progress
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      if (video.duration && !isNaN(video.duration)) {
        const target = video.duration * progress
        if (Math.abs(video.currentTime - target) > 0.033) {
          video.currentTime = target
        }
      }
    })

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded)
      window.removeEventListener('touchstart', unlock)
      unsubscribe()
    }
  }, [scrollYProgress])

  return (
    // 600vh tall container drives the scroll distance
    <div ref={containerRef} style={{ height: '600vh' }}>
      {/* CSS sticky — browser-native, React never loses track of the DOM node */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster="/video/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/video/hero-desktop.mp4" type="video/mp4" />
        </video>
        <HeroOverlay containerRef={containerRef} />
      </div>
    </div>
  )
}
