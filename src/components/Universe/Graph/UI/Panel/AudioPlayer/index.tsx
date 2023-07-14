import { Text, useTexture } from '@react-three/drei'
import { ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import { Mesh, Raycaster } from 'three'
import { useSelectedNode } from '~/stores/useDataStore'
import { fontProps } from '../../../Cubes/Text/constants'
import { setPointerHoverStyle } from '../../constants'
import { useAudioPlayer } from './useAudioPlayer'

const trackWidth = 29
const iconSize = 10

const secondToMinutes = (seconds: number) => {
  return new Date(seconds * 1000).toISOString().substring(11, 19)
}

// seekSlider.addEventListener('input', (e) => {
//   const rangeInput = e.target
//   audio.currentTime = rangeInput.value
//   currentTimeContainer.textContent = calculateTime(rangeInput.value);
//   audioPlayerContainer.style.setProperty('--seek-before-width', `${rangeInput.value / rangeInput.max * 100}%`);
//   refreshRender()
// });

export const AudioPlayer = () => {
  const selectedNode = useSelectedNode()
  const { link: mediaUrl, timestamp } = selectedNode || {}

  const playPauseIconRef = useRef<Mesh>(null)
  const trackSliderRef = useRef<Mesh>(null)
  const trackButtonRef = useRef<Mesh>(null)
  const [trackSliderBox, setTrackSliderBox] = useState<DOMRect | null>(null)

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

  // useFrame(() => {
  //   // Update the track slider position in the scene based on the current track position
  //   if (trackSliderRef.current) {
  //     const box = trackSliderRef.current.geometry.boundingBox
  //     if (box) {
  //       const { min, max } = box
  //       const left = (min.x + max.x) / 2
  //       const width = max.x - min.x
  //       setTrackSliderBox((prevBox) => ({ ...prevBox, left, width } as DOMRect))
  //       const newPosition = (currentTime / duration) * width
  //       trackSliderRef.current.position.x = left + newPosition - width / 2
  //     }
  //   }
  // })

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
  }, [playing, loading, loadError])

  useFrame(() => {
    if (trackButtonRef.current) {
      const start = -trackWidth / 2
      const amount = currentTime / duration
      const pos = trackWidth * amount + start

      trackButtonRef.current.position.x = pos
    }
  })

  const visible = !!mediaUrl && selectedNode?.type !== 'youtube'

  const { camera, size, mouse } = useThree()

  const handleClick = (event: ThreeEvent<PointerEvent>) => {
    const raycaster = new Raycaster()
    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObject(trackSliderRef.current as THREE.Object3D)

    if (intersects.length > 0) {
      const intersectionPoint = intersects[0].point

      const meshPosition = trackSliderRef.current?.position

      console.log('meshPosition', meshPosition?.x)

      if (meshPosition) {
        const relativePosition = intersectionPoint.sub(meshPosition)
        console.log('Relative Position from Left:', relativePosition.x)
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
              color={loadError ? 'yellow' : 'white'}
              map={transportTexture}
              alphaMap={transportTexture}
              transparent
            />
          </mesh>
        </group>

        {/* text */}
        <group position-x={11} position-y={4.5}>
          <Text {...fontProps} color={'#ffffff'} lineHeight={0.5} fontSize={2}>
            {secondToMinutes(currentTime)} - {secondToMinutes(duration)}
          </Text>
        </group>

        <group
          position-x={5}
          visible={!(loading || loadError)}
          onPointerEnter={() => setPointerHoverStyle(true)}
          onPointerLeave={() => setPointerHoverStyle(false)}
        >
          {/* track */}
          <mesh onPointerDown={handleTrackDrag}>
            <planeGeometry args={[trackWidth, 2]} />
            <meshStandardMaterial color={'white'} />
          </mesh>

          {/* track */}

          <mesh ref={trackSliderRef} onPointerDown={handleClick} position-z={1}>
            <planeGeometry args={[trackWidth, 2]} />
            <meshStandardMaterial color={'blue'} />
          </mesh>

          {/* button */}

          <mesh ref={trackButtonRef} position-z={1.2}>
            <circleGeometry args={[2, 20, 20]} />
            <meshStandardMaterial color={'white'} />
          </mesh>
        </group>
      </group>
    </>
  )
}
