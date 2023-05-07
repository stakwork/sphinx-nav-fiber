/* eslint-disable import/no-extraneous-dependencies */
import { AdaptiveDpr, AdaptiveEvents, Html, Loader, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer, Outline, SSAO, Selection } from '@react-three/postprocessing'
import { Suspense } from 'react'
import { colors } from '~/utils/colors'
import { Controls } from './Controls'
import { Graph } from './Graph'
import { Lights } from './Lights'

import { useControls } from 'leva'
import { useControlStore } from '~/stores/useControlStore'
import { addToGlobalForE2e } from '~/utils/tests'
import { Overlay } from './Overlay'

const NODE_SELECTED_COLOR = 0x00ff00

const Content = () => {
  const { universeColor, ssaoColor } = useControls('universe', {
    universeColor: colors.black,
    ssaoColor: 'black',
  })

  return (
    <>
      <color args={[universeColor]} attach="background" />

      <Lights />

      <Controls />

      <Selection>
        <Graph />

        <EffectComposer autoClear={false} multisampling={8}>
          <SSAO color={ssaoColor} intensity={80} luminanceInfluence={0.5} radius={0.05} />

          <Bloom
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            luminanceThreshold={1}
            mipmapBlur
          />

          <Outline blur edgeStrength={5} visibleEdgeColor={NODE_SELECTED_COLOR} />
        </EffectComposer>
      </Selection>
    </>
  )
}

let wheelEventTimeout: ReturnType<typeof setTimeout> | null = null

export const Universe = () => (
  <>
    <Overlay />

    <Suspense fallback={null}>
      <Canvas
        camera={{
          aspect: 1920 / 1080,
          far: 30000,
          near: 1,
          position: [1000, 0, 5],
        }}
        id="universe-canvas"
        onCreated={(s) => addToGlobalForE2e(s, 'threeState')}
        onWheel={(e: React.WheelEvent) => {
          const { target } = e
          const { offsetParent } = target as HTMLDivElement

          if (wheelEventTimeout) {
            clearTimeout(wheelEventTimeout)
          }

          if (offsetParent?.classList?.contains('html-panel')) {
            // if overflowing on y, disable camera controls to scroll on div
            if (offsetParent.clientHeight < offsetParent.scrollHeight) {
              useControlStore.setState({ isUserScrollingOnHtmlPanel: true })
            }
          }

          useControlStore.setState({ isUserScrolling: true })
          useControlStore.setState({ userMovedCamera: true })

          wheelEventTimeout = setTimeout(() => {
            useControlStore.setState({ isUserScrolling: false })
            useControlStore.setState({ isUserScrollingOnHtmlPanel: false })
          }, 200)
        }}
      >
        <Suspense
          fallback={
            <Html>
              <Loader />
            </Html>
          }
        >
          <Preload />

          <AdaptiveDpr />

          <AdaptiveEvents />

          <Content />
        </Suspense>
      </Canvas>
    </Suspense>
  </>
)
