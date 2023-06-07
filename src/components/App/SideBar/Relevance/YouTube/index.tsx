import { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import { useSelectedNode } from '~/stores/useDataStore'
import { videoTimetoSeconds } from '~/utils/videoTimetoSeconds'

export const YouTube = () => {
  const selectedNode = useSelectedNode()
  const playerRef = useRef<ReactPlayer | null>(null)

  const { link, timestamp } = selectedNode || {}

  const secs = videoTimetoSeconds(timestamp || '')

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current?.seekTo(secs)
    }
  }, [playerRef, secs])

  if (!selectedNode) {
    return null
  }

  return (
    <div style={{ height: '100%', overflow: 'auto', width: '100%' }}>
      <div>
        <ReactPlayer ref={playerRef} controls height="200px" playing url={link} width="100%" />
      </div>
    </div>
  )
}
