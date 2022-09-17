import { AdaptiveDpr } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NewGraph } from "~/components/Universe/NewGraph";
import { colors } from "~/utils/colors";
import { Controls } from "./Controls";
import { Lights } from "./Lights";
import { Tooltip } from "./Tooltip";

const Content = () => (
  <>
    {/* eslint-disable-next-line react/no-unknown-property */}
    <color args={[colors.gray500]} attach="background" />

    {/* <Graph /> */}

    <NewGraph />

    <Lights />

    <Controls />
  </>
);

export const Universe = () => (
  <>
    <Tooltip />

    <Canvas
      camera={{ far: 100000, fov: 60, near: 0.01, position: [1000, 0, 5] }}
      id="universe-canvas"
      shadows
    >
      <AdaptiveDpr />

      <Content />
    </Canvas>
  </>
);
