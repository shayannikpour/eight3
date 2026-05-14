'use client'

import { useRef, useEffect, useState } from 'react'
import { HeroOverlay } from './HeroOverlay'

export function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isIOS, setIsIOS] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const ios =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    setIsIOS(ios)
  }, [])

  useEffect(() => {
    if (!mounted || isIOS) return
    const video = videoRef.current
    if (!video) return

    video.load()
    video.pause()

    const handleLoaded = () => {
      video.currentTime = 0
    }
    video.addEventListener('loadedmetadata', handleLoaded)

    let cleanup: (() => void) | undefined

    const initGSAP = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=600%',
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          if (video.duration && !isNaN(video.duration)) {
            video.currentTime = video.duration * self.progress
          }
        },
      })

      cleanup = () => {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      }
    }

    initGSAP()

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded)
      cleanup?.()
    }
  }, [mounted, isIOS])

  if (!mounted) {
    return (
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/video/hero-poster.jpg)' }}
        />
      </section>
    )
  }

  if (isIOS) {
    return (
      <section ref={sectionRef} className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          loop
          poster="/video/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/hero-mobile.mp4" type="video/mp4" />
        </video>
        <HeroOverlay containerRef={sectionRef} />
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="relative" style={{ height: '100vh' }}>
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster="/video/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/video/hero-desktop.mp4" type="video/mp4" />
          <source src="/video/hero-mobile.mp4" type="video/mp4" />
        </video>
      </div>
      <HeroOverlay containerRef={sectionRef} />
    </section>
  )
}
