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
import { outlineEffectColor } from './constants'

const Content = () => {
  const { universeColor, outlineColor, outlinePulseSpeed } = useControls('universe', {
    universeColor: colors.black,
    outlineColor: outlineEffectColor,
    outlinePulseSpeed: 0.1,
  })

  return (
    <>
      <color args={[universeColor]} attach="background" />

      <Lights />

      <Controls />

      <Selection>
        <EffectComposer autoClear={false} multisampling={8}>
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
            blur // whether the outline should be blurred
            edgeStrength={1}
            hiddenEdgeColor={outlineColor}
            kernelSize={KernelSize.HUGE}
            pulseSpeed={outlinePulseSpeed}
            resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
            resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
            visibleEdgeColor={outlineColor} // the color of visible edges
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
