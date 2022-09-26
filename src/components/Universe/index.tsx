import {
  AdaptiveDpr,
  AdaptiveEvents,
  Html,
  Loader,
  Preload,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Outline,
  Selection,
  SSAO,
} from "@react-three/postprocessing";
import { Suspense } from "react";
import { colors } from "~/utils/colors";
import { Controls } from "./Controls";
import { Graph } from "./Graph";
import { Lights } from "./Lights";
import { Tooltip } from "./Tooltip";

const Content = () => (
  <>
    <color args={[colors.gray500]} attach="background" />

    <Lights />

    <Controls />

    <Selection>
      <Graph />

      <EffectComposer autoClear={false} multisampling={0}>
        <SSAO
          color="black"
          intensity={150}
          luminanceInfluence={0.5}
          radius={0.05}
        />

        <Outline blur edgeStrength={100} visibleEdgeColor={0xfbff00} />
      </EffectComposer>
    </Selection>
  </>
);

export const Universe = () => (
  <>
    <Tooltip />

    <Suspense fallback={null}>
      <Canvas
        camera={{
          aspect: 1920 / 1080,
          far: 8000,
          near: 1,
          position: [2000, 0, 5],
        }}
        id="universe-canvas"
        shadows
      >
        <Suspense
          fallback={
            <Html>
              <Loader />
            </Html>
          }
        >
          <Preload all />

          <AdaptiveDpr />

          <AdaptiveEvents />

          <Content />
        </Suspense>
      </Canvas>
    </Suspense>
  </>
);
