export const Lights = () => (
  <>
    <hemisphereLight args={["#fff", "#333", 1]} />

    <fog attach="fog" args={["#f1f1f1", 1500, 3000]} />
  </>
);
