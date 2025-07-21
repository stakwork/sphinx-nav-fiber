import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
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

      if (isFullScreen) {
        playerContainer.current.style.width = '100%'
        playerContainer.current.style.height = '100%'
        playerContainer.current.style.display = 'flex'
        playerContainer.current.style.justifyContent = 'center'
        playerContainer.current.style.alignItems = 'center'
      }
    } else if (isFullScreen) {
      playerContainer.current.style.width = '100%'
      playerContainer.current.style.height = '100%'
      playerContainer.current.style.display = 'flex'
      playerContainer.current.style.justifyContent = 'center'
      playerContainer.current.style.alignItems = 'center'
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

  return createPortal(
    <FullScreenWrapper isFullScreen={isFullScreen}>
      <MediaPlayer mediaUrl={selectedEpisode.properties.media_url} />
    </FullScreenWrapper>,
    playerContainer.current,
  )
}

const FullScreenWrapper = styled.div<{ isFullScreen: boolean }>`
  width: ${(props) => (props.isFullScreen ? '100%' : 'auto')};
  height: ${(props) => (props.isFullScreen ? '100%' : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  ${(props) =>
    props.isFullScreen &&
    `
    position: relative;
    flex: 1;
  `}
`
