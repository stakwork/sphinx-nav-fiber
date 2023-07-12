import { Line, useTexture } from '@react-three/drei'
import { ThreeEvent, useFrame } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import { Mesh, Vector3 } from 'three'
import { useSelectedNode } from '~/stores/useDataStore'
import { useAudioPlayer } from './useAudioPlayer'

export const AudioPlayer = () => {
  const selectedNode = useSelectedNode()
  const { link: mediaUrl, timestamp } = selectedNode || {}

  const playPauseIconRef = useRef<Mesh>(null)
  const trackSliderRef = useRef<Mesh>(null)
  const trackButtonRef = useRef<Mesh>(null)
  const [trackSliderBox, setTrackSliderBox] = React.useState<DOMRect | null>(null)

  const { playing, loading, loadError, playPauseToggle, setCurrentTime, currentTime, duration, audioRef } =
    useAudioPlayer({
      mediaUrl,
      timestamp,
    })

  const handleTrackDrag = (event: ThreeEvent<PointerEvent>) => {
    if (audioRef.current && trackSliderBox) {
      const { clientX } = event
      const { left, width } = trackSliderBox
      const clickPosition = clientX - left
      const newPosition = (clickPosition / width) * duration

      setCurrentTime(newPosition)
    }
  }

  useFrame(() => {
    // Update the track slider position in the scene based on the current track position
    if (trackSliderRef.current) {
      const box = trackSliderRef.current.geometry.boundingBox
      if (box) {
        const { min, max } = box
        const left = (min.x + max.x) / 2
        const width = max.x - min.x
        setTrackSliderBox((prevBox) => ({ ...prevBox, left, width } as DOMRect))
        const newPosition = (currentTime / duration) * width
        trackSliderRef.current.position.x = left + newPosition - width / 2
      }
    }
  })

  const trackWidth = 29

  const playTexture = useTexture('icons/play_circle_white.svg')
  const errorTexture = useTexture('icons/error_white.svg')
  const pauseTexture = useTexture('icons/pause_circle_white.svg')
  const loadingTexture = useTexture('icons/pending_white.svg')

  const transportTexture = useMemo(() => {
    if (loadError) {
      return errorTexture
    }
    if (playing) {
      return pauseTexture
    }
    if (loading) {
      return loadingTexture
    }

    return playTexture
  }, [playing, loading, loadError])

  const playerWidth = 46
  const playerHeight = 16
  const iconSize = 8

  const outlinePoints = useMemo(() => {
    const outlineVertices: number[][] = [
      [-playerWidth / 2, playerHeight / 2, 0],
      [playerWidth / 2, playerHeight / 2, 0],
      [playerWidth / 2, -playerHeight / 2, 0],
      [-playerWidth / 2, -playerHeight / 2, 0],
      [-playerWidth / 2, playerHeight / 2, 0],
    ]

    const points = outlineVertices.map((p) => {
      const coords = new Vector3(p[0], p[1], 0)

      return coords
    })
    return points
  }, [])

  return (
    <group position-y={-1} visible={!!mediaUrl && selectedNode?.type !== 'youtube'}>
      <group>
        <Line
          forceSinglePass={false}
          lineWidth={3}
          color={'#fff'}
          matrixWorldAutoUpdate={false}
          opacity={0.4}
          points={outlinePoints}
          transparent
        />
        <mesh position-z={-2}>
          <planeGeometry args={[playerWidth, playerHeight]} />
          <meshBasicMaterial color={'#000'} opacity={0.9} transparent />
        </mesh>
      </group>
      <group position-x={-16}>
        <mesh ref={playPauseIconRef} onClick={playPauseToggle}>
          {/* Render play/pause icon mesh */}
          <planeGeometry args={[iconSize, iconSize]} />
          <meshBasicMaterial
            color={loadError ? 'yellow' : 'white'}
            map={transportTexture}
            alphaMap={transportTexture}
            transparent
          />
        </mesh>
      </group>

      <group position-x={5} visible={!(loading || loadError)}>
        <mesh onPointerDown={handleTrackDrag}>
          <planeGeometry args={[trackWidth, 2]} />
          <meshStandardMaterial color={'white'} />
        </mesh>
        <mesh ref={trackSliderRef} onPointerDown={handleTrackDrag} position-z={1}>
          <planeGeometry args={[trackWidth, 2]} />
          <meshStandardMaterial color={'blue'} />
        </mesh>

        <mesh ref={trackButtonRef} position-z={1.2}>
          <circleGeometry args={[2, 20, 20]} />
          <meshStandardMaterial color={'white'} />
        </mesh>
      </group>
    </group>
  )
}
