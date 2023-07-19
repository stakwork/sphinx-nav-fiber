import { Text, useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Mesh, Raycaster } from 'three'
import { useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { videoTimetoSeconds } from '~/utils/videoTimetoSeconds'
import { fontProps } from '../../../Cubes/Text/constants'
import { setPointerHoverStyle } from '../../constants'
import { useAudioPlayer } from './useAudioPlayer'

const trackWidth = 29
const iconSize = 10

const secondToMinutes = (seconds: number) => new Date(seconds * 1000).toISOString().substring(11, 19)

export const AudioPlayer = () => {
  const selectedNode = useSelectedNode()
  const { link: mediaUrl, timestamp } = selectedNode || {}

  const playPauseIconRef = useRef<Mesh>(null)
  const trackSliderRef = useRef<Mesh>(null)
  const trackButtonRef = useRef<Mesh>(null)

  const { playing, loading, loadError, playPauseToggle, setCurrentTime, currentTime, duration } = useAudioPlayer({
    mediaUrl,
    timestamp,
  })

  const timestampPositions = useMemo(() => {
    const { start, end } = videoTimetoSeconds(timestamp || '')

    const trackStart = -trackWidth / 2
    const pos1 = trackWidth * (start / duration) + trackStart
    const pos2 = trackWidth * (end / duration) + trackStart

    return { start: pos1, end: pos2 }
  }, [timestamp, duration])

  const playTexture = useTexture('icons/play_circle_white.svg')
  const errorTexture = useTexture('icons/error_white.svg')
  const pauseTexture = useTexture('icons/pause_circle_white.svg')
  const loadingTexture = useTexture('icons/pending_white.svg')

  const transportTexture = useMemo(() => {
    if (loadError) {
      return errorTexture
    }

    if (loading) {
      return loadingTexture
    }

    if (playing) {
      return pauseTexture
    }

    return playTexture
  }, [playing, loading, loadError, playTexture, errorTexture, pauseTexture, loadingTexture])

  useFrame(() => {
    if (trackButtonRef.current) {
      const start = -trackWidth / 2
      const amount = currentTime / duration
      const pos = trackWidth * amount + start

      trackButtonRef.current.position.x = pos
    }
  })

  const visible = !!mediaUrl && selectedNode?.type !== 'youtube'

  const { camera, mouse } = useThree()

  const handleClick = () => {
    const raycaster = new Raycaster()

    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObject(trackSliderRef.current as THREE.Object3D)

    if (intersects.length > 0) {
      const { uv } = intersects[0]

      if (uv?.x) {
        const newPosition = uv.x * duration

        setCurrentTime(newPosition)
      }
    }
  }

  return (
    <>
      <group position-y={-1} scale={visible ? 1 : 0}>
        <group position-x={-16}>
          <mesh
            ref={playPauseIconRef}
            onClick={playPauseToggle}
            onPointerEnter={() => setPointerHoverStyle(true)}
            onPointerLeave={() => setPointerHoverStyle(false)}
          >
            {/* Render play/pause icon mesh */}
            <planeGeometry args={[iconSize, iconSize]} />
            <meshStandardMaterial
              alphaMap={transportTexture}
              color={loadError ? 'yellow' : 'white'}
              map={transportTexture}
              transparent
            />
          </mesh>
        </group>

        {/* text */}
        <group position-x={11} position-y={4.5}>
          <Text {...fontProps} color={colors.white} fontSize={2} lineHeight={0.5}>
            {secondToMinutes(currentTime)} - {secondToMinutes(duration)}
          </Text>
        </group>

        <group
          onPointerEnter={() => setPointerHoverStyle(true)}
          onPointerLeave={() => setPointerHoverStyle(false)}
          position-x={5.4}
          visible={!(loading || loadError)}
        >
          {/* track */}
          <mesh>
            <planeGeometry args={[trackWidth, 2]} />
            <meshBasicMaterial color={colors.white} />
          </mesh>

          <group position-z={1}>
            {/* track */}
            <mesh ref={trackSliderRef} onPointerDown={handleClick}>
              <planeGeometry args={[trackWidth, 2]} />
              <meshBasicMaterial color={colors.green100} />
            </mesh>

            <group position-y={-2.6}>
              <mesh position-x={timestampPositions.start}>
                <planeGeometry args={[0.5, 1.4]} />
                <meshBasicMaterial color="lime" />
              </mesh>

              <mesh position-x={timestampPositions.end}>
                <planeGeometry args={[0.5, 1.4]} />
                <meshBasicMaterial color="red" />
              </mesh>
            </group>
          </group>

          {/* start and end markers */}

          {/* button */}

          <mesh ref={trackButtonRef} position-z={1.2}>
            <circleGeometry args={[1.5, 20, 20]} />
            <meshBasicMaterial color={colors.white} transparent />
          </mesh>
        </group>
      </group>
    </>
  )
}
