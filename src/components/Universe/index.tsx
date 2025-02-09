/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { AdaptiveDpr, AdaptiveEvents, Html, Loader, Preload } from '@react-three/drei'
import { Canvas, RootState } from '@react-three/fiber'
import { Bloom, EffectComposer, Outline, Selection, Vignette } from '@react-three/postprocessing'
import { Leva, useControls } from 'leva'
import { BlendFunction, Resolution } from 'postprocessing'
import { Perf } from 'r3f-perf'
import { Suspense, memo, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { getNodeColorByType } from '~/components/Universe/Graph/constant'
import { isDevelopment } from '~/constants'
import { useAppStore } from '~/stores/useAppStore'
import { useControlStore } from '~/stores/useControlStore'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { colors } from '~/utils/colors'
import { addToGlobalForE2e } from '~/utils/tests'
import { UniverseQuestion } from '../App/UniverseQuestion'
import { Flex } from '../common/Flex'
import { outlineEffectColor } from './constants'
import { Controls } from './Controls'
import { initialCameraPosition, selectionGraphCameraPosition } from './Controls/CameraAnimations/constants'
import { CursorTooltip } from './CursorTooltip/index'
import { Graph } from './Graph'
import { GraphSearch } from './GraphSearch'
import { Lights } from './Lights'
import { Overlay } from './Overlay'
import { Preloader } from './Preloader'
import { SelectionContent } from './SelectionContent'

const Fallback = () => (
  <Html>
    <Loader />
  </Html>
)

const Content = () => {
  const { universeColor } = useControls('universe', {
    universeColor: colors.black,
  })

  const dataInitial = useDataStore((s) => s.dataInitial)

  const selectedNode = useSelectedNode()

  const outlineColor: number = useMemo(
    () => (selectedNode?.node_type ? (getNodeColorByType(selectedNode.node_type) as number) : outlineEffectColor),
    [selectedNode],
  )

  return (
    <>
      <color args={[colors.BLUE_PRESS_STATE || universeColor]} attach="transparent" />

      <Lights />

      <Controls />

      <Selection>
        {false && (
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
        )}
        {dataInitial?.nodes?.length ? <Graph /> : null}
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

  const showSelectionGraph = useGraphStore((s) => s.showSelectionGraph)

  const isLoading = useDataStore((s) => s.isFetching)
  const universeQuestionIsOpen = useAppStore((s) => s.universeQuestionIsOpen)

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
        <Leva hidden isRoot />

        <Canvas
          camera={cameraProps}
          frameloop={showSelectionGraph ? 'demand' : 'always'}
          id="universe-canvas"
          onCreated={onCreatedHandler}
          onWheel={onWheelHandler}
        >
          {isDevelopment && <Perf position="top-right" style={{ top: '80px' }} />}
          <Suspense fallback={<Fallback />}>
            <Preload />

            <AdaptiveDpr />

            <AdaptiveEvents />

            <Content />
          </Suspense>
        </Canvas>
        <GraphSearch />
        <CursorTooltip />

        {showSelectionGraph ? (
          <SelectionWrapper>
            <Canvas
              camera={{
                ...cameraProps,
                position: [
                  selectionGraphCameraPosition.x,
                  selectionGraphCameraPosition.y,
                  selectionGraphCameraPosition.z,
                ],
              }}
              id="selection-canvas"
              onCreated={({ gl }) => {
                gl.setClearColor('#000000')
                gl.setClearAlpha(0.8)
              }}
            >
              {isDevelopment && <Perf position="top-right" style={{ top: '80px' }} />}
              <Suspense fallback={<Fallback />}>
                <AdaptiveDpr />

                <AdaptiveEvents />

                <SelectionContent />
              </Suspense>
            </Canvas>
          </SelectionWrapper>
        ) : null}
      </Suspense>
      {universeQuestionIsOpen && <UniverseQuestion />}
      {isLoading && <Preloader fullSize={false} />}
      <Overlay />
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  flex: 1 1 100%;
  position: relative;
`

const SelectionWrapper = styled(Flex)`
  position: absolute;
  inset: 0;
`

export const Universe = memo(_Universe)
