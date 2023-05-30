/* eslint-disable import/no-extraneous-dependencies */
import { AdaptiveDpr, AdaptiveEvents, Html, Loader, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer, Outline, Selection } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { BlendFunction, KernelSize, Resolution } from 'postprocessing'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import { isDevelopment } from '~/constants'
import { useControlStore } from '~/stores/useControlStore'
import { colors } from '~/utils/colors'
import { addToGlobalForE2e } from '~/utils/tests'
import { Controls } from './Controls'
import { Graph } from './Graph'
import { Lights } from './Lights'
import { Overlay } from './Overlay'

const Content = () => {
  const { universeColor } = useControls('universe', {
    universeColor: colors.black,
  })

  return (
    <>
      <color args={[universeColor]} attach="background" />

      <Lights />

      <Controls />

      <Selection>
        <EffectComposer autoClear={false} multisampling={8}>
          <Bloom
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            mipmapBlur
            luminanceThreshold={1} // luminance threshold. Raise this value to mask out darker elements in the scene.
            resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
            resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
          />
          <Outline
            edgeStrength={2}
            kernelSize={KernelSize.HUGE}
            blendFunction={BlendFunction.SCREEN} // set this to BlendFunction.ALPHA for dark outlines
            visibleEdgeColor={0xffffff} // the color of visible edges
            hiddenEdgeColor={0xffffff}
            pulseSpeed={0.1}
            blur={true} // whether the outline should be blurred
            resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
            resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
          />
        </EffectComposer>

        <Graph />
      </Selection>
    </>
  )
}

let wheelEventTimeout: ReturnType<typeof setTimeout> | null = null

export const Universe = () => {
  const [setIsUserScrollingOnHtmlPanel, setIsUserScrolling, setUserMovedCamera] = [
    useControlStore((s) => s.setIsUserScrollingOnHtmlPanel),
    useControlStore((s) => s.setIsUserScrolling),
    useControlStore((s) => s.setUserMovedCamera),
  ]

  return (
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
                setIsUserScrollingOnHtmlPanel(true)
              }
            }

            setIsUserScrolling(true)
            setUserMovedCamera(true)

            wheelEventTimeout = setTimeout(() => {
              setIsUserScrolling(false)
              setIsUserScrollingOnHtmlPanel(false)
            }, 200)
          }}
        >
          {isDevelopment && <Perf position="top-left" />}

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
}
