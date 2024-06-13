import lottie, { AnimationItem } from 'lottie-web'
import { ComponentProps, useEffect, useRef } from 'react'

interface Props extends ComponentProps<'div'> {
  animationData: unknown
}

export const Animation = (props: Props) => {
  const lottieRef = useRef<AnimationItem | null>(null)
  const { animationData } = props

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
  }, [animationData])

  return <div id="lottie-animation" {...props} />
}
