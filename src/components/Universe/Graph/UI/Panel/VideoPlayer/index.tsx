import { Html } from '@react-three/drei'
import { useMemo } from 'react'
import styled from 'styled-components'
import { useSelectedNode } from '~/stores/useDataStore'

const extractVideoIdFromUrl = (url: string) => {
  try {
    const videoUrl = new URL(url)
    const videoId = videoUrl.searchParams.get('v')
    return videoId || null
  } catch (e) {}

  return null
}

export const VideoPlayer = () => {
  const selectedNode = useSelectedNode()
  const { link: mediaUrl, timestamp } = selectedNode || {}

  const videoId = useMemo(() => {
    return extractVideoIdFromUrl(mediaUrl || '')
  }, [mediaUrl])

  if (!selectedNode || selectedNode.type !== 'youtube') {
    return null
  }

  return (
    <Html center sprite>
      <Frame>
        <iframe width={560 / 1.5} height={315 / 1.5} src={`https://www.youtube.com/embed/${videoId}`}></iframe>
      </Frame>
    </Html>
  )
}

const Frame = styled.div``
