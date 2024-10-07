import lottie, { AnimationItem } from 'lottie-web'
import { useEffect, useRef } from 'react'
import animationData from './animation.json'

export const Animation = ({ meshId }: { meshId: string }) => {
  const lottieRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    const container = document.getElementById(`lottie-animation-${meshId}`)

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
  }, [meshId])

  return <div id={`lottie-animation-${meshId}`} style={{ width: '2em', height: '2em' }} />
}
