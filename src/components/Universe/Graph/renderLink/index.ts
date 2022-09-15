import * as THREE from "three";
import { useDataStore } from "~/stores/useDataStore";
import { GRAPH_LINK_COLOR } from "../../../../constants";

const lineMaterial = new THREE.LineBasicMaterial({
  opacity: 0.5,
  transparent: true,
  color: GRAPH_LINK_COLOR,
  linewidth: 1,
  depthWrite: false,
});

const selectedLineMaterial = new THREE.LineBasicMaterial({
  opacity: 1,
  transparent: true,
  color: "yellow",
  linewidth: 5,
  depthWrite: false,
});

const geometry = new THREE.BufferGeometry();

export const renderLink = (link: any) => {
  const { selectedNode } = useDataStore.getState();

  const selectedLine =
    selectedNode &&
    (selectedNode.id === link.source.id || selectedNode.id === link.target.id);

  return new THREE.Line(
    geometry.clone(),
    selectedLine ? selectedLineMaterial : lineMaterial
  );
};
