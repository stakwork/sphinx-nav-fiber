import {
  AdaptiveDpr,
  AdaptiveEvents,
  Html,
  Loader,
  Preload,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { colors } from "~/utils/colors";
import { Controls } from "./Controls";
import { Graph } from "./Graph";
import { Lights } from "./Lights";
import { Tooltip } from "./Tooltip";

const Content = () => (
  <>
    <color args={[colors.gray500]} attach="background" />

    <Graph />

    <Lights />

    <Controls />
  </>
);

export const Universe = () => (
  <>
    <Tooltip />

    <Suspense fallback={null}>
      <Canvas
        camera={{ far: 100000, fov: 60, near: 0.01, position: [2000, 0, 5] }}
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
