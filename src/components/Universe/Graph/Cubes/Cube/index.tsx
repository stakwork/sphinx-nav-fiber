import { useFrame } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { useCallback, useMemo, useRef } from "react";
import * as THREE from "three";

import { useSelectedNode } from "~/stores/useDataStore";
import { NodeExtended } from "~/types";
import { useMaterial } from "./useMaterial";

const geometryXs = new THREE.BoxGeometry(10, 10, 10);
const geometryS = new THREE.BoxGeometry(20, 20, 20);
const geometryM = new THREE.BoxGeometry(35, 35, 35);

const getGeometry = (node: NodeExtended) => {
  switch (node.node_type) {
    case "guest":
    case "episode":
      return geometryS;

    case "show":
      return geometryM;

    default:
      return geometryXs;
  }
};

export const Cube = ({ node }: { node: NodeExtended }) => {
  const ref = useRef<THREE.Mesh | null>(null);

  const material = useMaterial(node.image_url || "noimage.jpeg");

  const selectedNode = useSelectedNode();

  // const isSelected = !!selectedNode && selectedNode.id === node.id;

  const geometry = useMemo(() => getGeometry(node), [node]);

  useFrame(() => {
    if (selectedNode) {
      material.toneMapped = false;
    }

    ref.current?.position.set(node.x || 0, node.y || 0, node.z || 0);
  });

  const onPointerIn = useCallback(() => {
    ref.current?.scale.set(
      ref.current.scale.x * 1.5,
      ref.current.scale.x * 1.5,
      ref.current.scale.x * 1.5
    );
  }, []);

  const onPointerOut = useCallback(() => {
    ref.current?.scale.set(
      ref.current.scale.x / 1.5,
      ref.current.scale.x / 1.5,
      ref.current.scale.x / 1.5
    );
  }, []);

  return (
    <Select enabled={!!selectedNode && node.id === selectedNode?.id}>
      <mesh
        ref={ref}
        geometry={geometry}
        material={material}
        name={node.id}
        onPointerOut={onPointerOut}
        onPointerOver={onPointerIn}
        userData={node}
      >
        {/* <Edges renderOrder={1000} visible={isSelected}>
          <meshBasicMaterial color="white" depthTest={false} transparent />
        </Edges> */}
      </mesh>
    </Select>
  );
};
