import * as THREE from "three";
import { GRAPH_LINK_COLOR } from '../../../../constants'

const lineMaterial = new THREE.LineBasicMaterial({
  opacity: 0.5,
  transparent: true,
  color: GRAPH_LINK_COLOR,
  linewidth: 1,
});

const geometry = new THREE.BufferGeometry();

export const renderLink = () => new THREE.Line(geometry.clone(), lineMaterial);
