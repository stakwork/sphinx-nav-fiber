import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { MediaPlayer } from '~/components/mindset/components/MediaPlayer'
import { useMindsetStore } from '~/stores/useMindsetStore'

export const FloatingPlayer = () => {
  const selectedEpisode = useMindsetStore((s) => s.selectedEpisode)
  const isFullScreen = useMindsetStore((s) => s.isFullScreen)

  const playerContainer = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Create container div once
    if (!playerContainer.current) {
      playerContainer.current = document.createElement('div')
    }

    const node = playerContainer.current
    const target = document.getElementById(isFullScreen ? 'floating-player-root' : 'sidebar-player-root')

    if (node && target && !target.contains(node)) {
      target.appendChild(node)
    }

    setMounted(true)

    return () => {
      const parent = node?.parentNode as HTMLElement | null

      if (
        parent &&
        'id' in parent &&
        typeof parent.id === 'string' &&
        ['floating-player-root', 'sidebar-player-root'].includes(parent.id)
      ) {
        parent.removeChild(node)
      }
    }
  }, [isFullScreen])

  if (!selectedEpisode?.properties?.media_url || !mounted || !playerContainer.current) {
    return null
  }

  return createPortal(<MediaPlayer mediaUrl={selectedEpisode.properties.media_url} />, playerContainer.current)
}
