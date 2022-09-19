import { Edges, useSelect } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { MeshBasicMaterial, TextureLoader } from "three";
import { NodeExtended } from "~/types";

const geometryXs = new THREE.BoxGeometry(10, 10, 10);
const geometryS = new THREE.BoxGeometry(20, 20, 20);
const geometryM = new THREE.BoxGeometry(35, 35, 35);

const baseMaterial = new THREE.MeshBasicMaterial();

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

const loader = new TextureLoader();

export const Cube = ({ node }: { node: NodeExtended }) => {
  const ref = useRef<THREE.Mesh | null>(null);

  const map = useMemo(
    () => loader.load(node.image_url || "/noimage.jpeg"),
    [node]
  );

  const selectedNodes = useSelect().map((sel) => sel.userData.id);

  const isSelected = !!selectedNodes.find((sel) => sel === node?.id);

  const geometry = useMemo(() => getGeometry(node), [node]);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.set(node.x || 0, node.y || 0, node.z || 0);

      const material = ref.current.material as MeshBasicMaterial;

      if (!Array.isArray(material) && !material.map) {
        material.map = map;
      }
    }
  });

  return (
    <mesh ref={ref} geometry={geometry} name={node.id} userData={node}>
      <meshBasicMaterial />

      <Edges renderOrder={1000} visible={isSelected}>
        <meshBasicMaterial color="white" depthTest={false} transparent />
      </Edges>
    </mesh>
  );
};
