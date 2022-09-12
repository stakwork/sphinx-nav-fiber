import { Canvas } from "@react-three/fiber";
import { colors } from "~/utils/colors";
import { Controls } from "./Controls";
import { Graph } from "./Graph";
import { Lights } from "./Lights";
import { Tooltip } from "./Tooltip";

const Content = () => (
  <>
    {/* eslint-disable-next-line react/no-unknown-property */}
    <color args={[colors.gray500]} attach="background" />

    <Graph />

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
      <Content />
    </Canvas>
  </>
);
