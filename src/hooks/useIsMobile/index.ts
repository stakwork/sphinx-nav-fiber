import { useEffect, useState } from 'react'

const compatibilityBreakPoint = 620

export const useIsMobile = () => {
  const query = `(max-width: ${compatibilityBreakPoint}px)`

  const [isMobile, setIsMobile] = useState(() => {
    const mediaQuery = window.matchMedia(query)

    return mediaQuery.matches
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    setIsMobile(mediaQuery.matches)

    const handleScreenResize = () => {
      setIsMobile(mediaQuery.matches)
    }

    window.addEventListener('resize', handleScreenResize)

    return () => mediaQuery.removeEventListener('change', handleScreenResize)
  }, [query])

  return isMobile
}
