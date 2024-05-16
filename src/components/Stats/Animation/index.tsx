import lottie, { AnimationItem } from 'lottie-web'
import { useEffect, useRef } from 'react'
import animationData from './animation.json'

export const Animation = () => {
  const lottieRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    const container = document.getElementById('lottie-animation')

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

  return <div id="lottie-animation" style={{ width: '2em', height: '2em' }} />
}
