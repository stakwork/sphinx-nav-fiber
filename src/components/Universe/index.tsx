import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Graph } from "./Graph";

type Props = { data: any };

export const Universe = ({ data }: Props) => (
  <Canvas
    shadows
    camera={{ position: [1500, 0, 5], near: 0.01, far: 100000, fov: 60 }}
  >
    <Environment preset="night" />

    <Graph data={data} />

    <OrbitControls makeDefault zoomSpeed={1.5} />
  </Canvas>
);
