/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { AdaptiveDpr, AdaptiveEvents, Html, Loader, Preload } from '@react-three/drei'
import { Canvas, RootState } from '@react-three/fiber'
import { Bloom, EffectComposer, Outline, Selection, Vignette } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { BlendFunction, Resolution } from 'postprocessing'
import { Perf } from 'r3f-perf'
import { Suspense, memo, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { getNodeColorByType } from '~/components/Universe/Graph/constant'
import { isDevelopment } from '~/constants'
import { useControlStore } from '~/stores/useControlStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { addToGlobalForE2e } from '~/utils/tests'
import { Flex } from '../common/Flex'
import { Controls } from './Controls'
import { initialCameraPosition } from './Controls/CameraAnimations/constants'
import { Graph } from './Graph'
import { Lights } from './Lights'
import { Overlay } from './Overlay'
import { Preloader } from './Preloader'
import { outlineEffectColor } from './constants'

const Fallback = () => (
  <Html>
    <Loader />
  </Html>
)

const Content = () => {
  const { universeColor } = useControls('universe', {
    universeColor: colors.black,
  })

  const selectedNode = useSelectedNode()

  const outlineColor: number = useMemo(
    () => (selectedNode?.node_type ? (getNodeColorByType(selectedNode.node_type) as number) : outlineEffectColor),
    [selectedNode],
  )

  return (
    <>
      <color args={[universeColor]} attach="background" />

      <Lights />

      <Controls />

      <Selection>
        <EffectComposer autoClear={false} multisampling={8}>
          <Vignette darkness={0.7} eskil={false} offset={0.05} />

          <Bloom
            luminanceThreshold={1} // luminance threshold. Raise this value to mask out darker elements in the scene.
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            mipmapBlur
            resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
            resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
          />
          <Outline
            blendFunction={BlendFunction.SCREEN} // set this to BlendFunction.ALPHA for dark outlines
            blur
            edgeStrength={4}
            hiddenEdgeColor={outlineColor}
            visibleEdgeColor={outlineColor} // the color of visible edges
          />
        </EffectComposer>

        <Graph />
      </Selection>
    </>
  )
}

let wheelEventTimeout: ReturnType<typeof setTimeout> | null = null

const cameraProps = {
  aspect: window.innerWidth / window.innerHeight,
  far: 30000,
  near: 1,
  position: [initialCameraPosition.x, initialCameraPosition.y, initialCameraPosition.z],
} as const

const _Universe = () => {
  const [setIsUserScrollingOnHtmlPanel, setIsUserScrolling, setUserMovedCamera] = [
    useControlStore((s) => s.setIsUserScrollingOnHtmlPanel),
    useControlStore((s) => s.setIsUserScrolling),
    useControlStore((s) => s.setUserMovedCamera),
  ]

  const isLoading = useDataStore((s) => s.isFetching)

  const onWheelHandler = useCallback(
    (e: React.WheelEvent) => {
      const { target } = e
      const { offsetParent } = target as HTMLDivElement

      if (wheelEventTimeout) {
        clearTimeout(wheelEventTimeout)
      }

      if (offsetParent?.classList?.contains('html-panel')) {
        // if overflowing on y, disable camera controls to scroll on div
        if (offsetParent.clientHeight < offsetParent.scrollHeight) {
          setIsUserScrollingOnHtmlPanel(true)
        }
      }

      setIsUserScrolling(true)
      setUserMovedCamera(true)

      wheelEventTimeout = setTimeout(() => {
        setIsUserScrolling(false)
        setIsUserScrollingOnHtmlPanel(false)
      }, 200)
    },
    [setIsUserScrolling, setIsUserScrollingOnHtmlPanel, setUserMovedCamera],
  )

  const onCreatedHandler = useCallback((s: RootState) => addToGlobalForE2e(s, 'threeState'), [])

  return (
    <Wrapper>
      <Suspense fallback={null}>
        <Canvas camera={cameraProps} id="universe-canvas" onCreated={onCreatedHandler} onWheel={onWheelHandler}>
          {isDevelopment && <Perf position="top-right" />}
          <Suspense fallback={<Fallback />}>
            <Preload />

            <AdaptiveDpr />

            <AdaptiveEvents />

            <Content />
          </Suspense>
        </Canvas>
      </Suspense>
      {isLoading && <Preloader fullSize={false} />}
      <Overlay />
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  flex: 1 1 100%;
  position: relative;
`

export const Universe = memo(_Universe)
