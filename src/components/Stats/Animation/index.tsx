import lottie, { AnimationItem } from 'lottie-web'
import { useEffect, useRef } from 'react'
import animationData from './animation.json'

type AnimationProps = {
  id: string
}

// eslint-disable-next-line react/prop-types
export const Animation: React.FC<AnimationProps> = ({ id }) => {
  const lottieRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    const container = document.getElementById(id)

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
  }, [id])

  return <div id={id} style={{ width: '2em', height: '2em' }} />
}
