import { ThreeEvent, useFrame } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { memo, useCallback, useRef } from "react";
import * as THREE from "three";
import { usePathway } from "~/components/DataRetriever";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { NodeExtended } from "~/types";
import { PathwayBadge } from "./PathwayBadge";
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

export const Cube = memo(({ node, highlight, highlightColor }: { node: NodeExtended; highlight: boolean; highlightColor: string }) => {
  const ref = useRef<THREE.Mesh | null>(null);

  const material = useMaterial(node.image_url || "noimage.jpeg", highlight, highlightColor);

  const selectedNode = useSelectedNode();
  const setHoveredNode = useDataStore((s) => s.setHoveredNode);
  const categoryFilter = useDataStore((s) => s.categoryFilter);

  const isSelected = !!selectedNode && selectedNode?.id === node.id;

  const isSelectedCategory = node.node_type === categoryFilter;

  useFrame(() => {
    if (selectedNode) {
      material.toneMapped = false;
    }

    ref.current?.position.set(node.x || 0, node.y || 0, node.z || 0);
  });

  const onPointerIn = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();

      document.body.style.cursor = "pointer";

      if (ref.current) {
        setHoveredNode(ref.current.userData as NodeExtended);

        ref.current.scale.set(ref.current.scale.x * 1.5, ref.current.scale.x * 1.5, ref.current.scale.x * 1.5);
      }
    },
    [setHoveredNode]
  );

  const onPointerOut = useCallback(() => {
    document.body.style.cursor = "auto";

    if (ref.current) {
      setHoveredNode(null);

      ref.current.scale.set(ref.current.scale.x / 1.5, ref.current.scale.x / 1.5, ref.current.scale.x / 1.5);
    }
  }, [setHoveredNode]);

  const { currentNodeIndex } = usePathway();

  return (
    <Select enabled={selectedNode ? isSelected : isSelectedCategory}>
      <mesh
        ref={ref}
        geometry={getGeometry(node)}
        material={material}
        name={node.id}
        onPointerOut={onPointerOut}
        onPointerOver={onPointerIn}
        userData={node}
      >
        <PathwayBadge show={currentNodeIndex >= 0} value={currentNodeIndex + 1} />
      </mesh>
    </Select>
  );
});

Cube.displayName = "Cube";
