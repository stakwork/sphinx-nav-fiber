import { Canvas } from "@react-three/fiber";
import { Controls } from "./Controls";
import { Graph } from "./Graph";
import { Lights } from "./Lights";
import { Tooltip } from "./Tooltip";

const Content = () => (
  <>
    <Graph />

    

    <Lights />

    <Controls />
  </>
);

export const Universe = () => (
  <>
    <Tooltip />
    <Canvas
      id="universe-canvas"
      shadows
      camera={{ position: [1000, 0, 5], near: 0.01, far: 100000, fov: 60 }}
    >
      
      <Content />
    </Canvas>
    </>
);
