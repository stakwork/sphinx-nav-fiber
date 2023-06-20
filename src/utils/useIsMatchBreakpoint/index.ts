import { Breakpoint, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'

export const useIsMatchBreakpoint = (point: Breakpoint, direction: 'up' | 'down' = 'down') => {
  const theme = useTheme()
  const [match, setMatch] = useState(false)
  const breakpoint = theme.breakpoints[direction](point).split('@media')[1].trim()

  useEffect(() => {
    const handler = () => {
      const { matches } = window.matchMedia(breakpoint)

      setMatch(matches)
    }

    handler()
    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [breakpoint])

  return match
}
