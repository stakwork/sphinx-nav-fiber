import { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { Flex } from '~/components/common/Flex'
import preloadData from './preloader.json'

export const SphereAnimation = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)

    return () => {
      setIsReady(false)
    }
  }, [])

  if (!isReady) {
    return <></>
  }

  return (
    <Flex style={{ width: '167px', height: '167px', opacity: 0.5 }}>
      <Lottie
        height={167}
        options={{
          loop: true,
          autoplay: true,
          animationData: preloadData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        width={167}
      />
    </Flex>
  )
}
