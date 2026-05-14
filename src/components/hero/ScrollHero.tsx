'use client'

import { useRef, useEffect, useState } from 'react'
import { HeroOverlay } from './HeroOverlay'

export function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const video = videoRef.current
    if (!video) return

    video.load()

    const onLoaded = () => {
      video.currentTime = 0
    }
    video.addEventListener('loadedmetadata', onLoaded)

    // iOS Safari blocks seeking until after a user-gesture play() call.
    // We listen for the first touch and briefly play+pause to unlock seeking.
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

    let cleanup: (() => void) | undefined

    const initGSAP = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=600%',
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          if (video.duration && !isNaN(video.duration)) {
            const target = video.duration * self.progress
            if (Math.abs(video.currentTime - target) > 0.033) {
              video.currentTime = target
            }
          }
        },
      })

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill())
    }

    initGSAP()

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded)
      window.removeEventListener('touchstart', unlock)
      cleanup?.()
    }
  }, [mounted])

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
          <source src="/video/hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/video/hero-desktop.mp4" type="video/mp4" />
        </video>
      </div>
      <HeroOverlay containerRef={sectionRef} />
    </section>
  )
}
