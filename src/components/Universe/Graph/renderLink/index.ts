import * as THREE from "three";
import { useDataStore } from "~/stores/useDataStore";
import { GRAPH_LINK_COLOR } from "../../../../constants";

const lineMaterial = new THREE.LineBasicMaterial({
  color: GRAPH_LINK_COLOR,
  depthWrite: false,
  linewidth: 1,
  opacity: 0.5,
  transparent: true,
});

const selectedLineMaterial = new THREE.LineBasicMaterial({
  color: "yellow",
  depthWrite: false,
  linewidth: 5,
  opacity: 1,
  transparent: true,
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
