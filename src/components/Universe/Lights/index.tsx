import { useControls } from "leva";

export const Lights = () => {
  const { intensity, x } = useControls({
    intensity: { value: 1, min: 0, max: 5 },
    x: { value: 0, min: -4000, max: 4000 },
  });

  return (
    <>
      <hemisphereLight args={["#fff", "#333", intensity]} />

      <fog attach="fog" args={["#f1f1f1", 0, 1500]} />
    </>
  );
};
