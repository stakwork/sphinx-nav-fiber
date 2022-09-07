import * as THREE from "three";

const lineMaterial = new THREE.LineBasicMaterial({
  opacity: 0.6,
  transparent: true,
  color: "#000000",
  linewidth: 1,
});

const geometry = new THREE.BufferGeometry();

export const linkObject = () => new THREE.Line(geometry.clone(), lineMaterial);

export function getNodeScale(nodeType: any) {
  switch (nodeType) {
    case "clip":
      return [20, 30];
    case "episode":
      return [30, 40];
    case "show":
      return [50, 60];
    case "guest":
      return [70, 80];
    default:
      return [25, 35];
  }
}
