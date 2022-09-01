import * as THREE from "three";

const lineMaterial = new THREE.LineBasicMaterial({
  opacity: 0.6,
  transparent: true,
  color: "#000",
  linewidth: 1,
});

const geometry = new THREE.BufferGeometry();

export const renderLink = () => new THREE.Line(geometry.clone(), lineMaterial);
