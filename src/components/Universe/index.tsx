import { Canvas } from "@react-three/fiber";
import { colors } from "~/utils/colors";
import { Controls } from "./Controls";
import { Graph } from "./Graph";
import { Lights } from "./Lights";
import { Tooltip } from "./Tooltip";

const Content = () => (
  <>
    <color attach="background" args={[colors.gray500]} />

    <Graph />

    <Lights />

    <Controls />
  </>
);

export const Universe = () => (
  <>
    <Tooltip />

    <Canvas
      camera={{ position: [1000, 0, 5], near: 0.01, far: 100000, fov: 60 }}
      id="universe-canvas"
      shadows
    >
      <Content />
    </Canvas>
  </>
);
