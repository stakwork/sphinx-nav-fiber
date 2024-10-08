import lottie, { AnimationItem } from 'lottie-web'
import { Flex } from '~/components/common/Flex'

import { useEffect, useRef } from 'react'
import preloadData from './preloader.json'

export const SphereAnimation = () => {
  const lottieRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    const container = document.getElementById('lottie-sphere-animation')

    if (container) {
      lottieRef.current = lottie.loadAnimation({
        container,
        animationData: preloadData,
        loop: true,
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      })
    }

    return () => {
      if (lottieRef.current) {
        lottieRef.current.destroy()
      }
    }
  }, [])

  return <Flex id="lottie-sphere-animation" style={{ width: '167px', height: '167px', opacity: 0.5 }} />
}
