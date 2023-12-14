import lottie, { AnimationItem } from 'lottie-web'
import { useEffect, useRef } from 'react'
import animationData from './lottie.json'

export const Equalizer = () => {
  const lottieRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    const container = document.getElementById('lottie-timestamp-equalizer')

    if (container) {
      lottieRef.current = lottie.loadAnimation({
        container,
        animationData,
        loop: true,
        autoplay: true,
      })
    }

    return () => {
      if (lottieRef.current) {
        lottieRef.current.destroy()
      }
    }
  }, [])

  return <div id="lottie-timestamp-equalizer" style={{ width: '40px', height: '40px' }} />
}
