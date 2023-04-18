import { useFrame } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { usePathway } from "~/components/DataRetriever";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { NodeExtended } from "~/types";
import { PathwayBadge } from "./components/PathwayBadge";
import { Portal } from "./components/Portal";
import { Tooltip } from "./components/Tooltip";
import { useMaterial } from "./hooks/useMaterial";

const geometryXs = new THREE.BoxGeometry(10, 10, 10);
const geometryS = new THREE.BoxGeometry(20, 20, 20);
const geometryM = new THREE.SphereGeometry(185, 185, 185);

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

type Props = {
  node: NodeExtended;
  highlight: boolean;
  highlightColor: string;
};

export const Cube = memo(({ node, highlight, highlightColor }: Props) => {
  const ref = useRef<THREE.Mesh | null>(null);
  const [hovered, setHovered] = useState(false);

  const selectedNode = useSelectedNode();
  const categoryFilter = useDataStore((s) => s.categoryFilter);

  const material = useMaterial(
    node.image_url || "noimage.jpeg",
    highlight,
    highlightColor
  );

  if (node.type === 'show') {
    material.transparent = true
    material.opacity = 0.06  
  }
  

  const isSelected = selectedNode?.id === node.id;
  const isSelectedCategory = node.node_type === categoryFilter;

  useFrame(() => {
    if (selectedNode) {
      material.toneMapped = false;
    }

    // ref.current?.position.set(node.x || 0, node.y || 0, node.z || 0);
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const onPointerIn = useCallback(() => setHovered(true), []);

  const onPointerOut = useCallback(() => {
    if (selectedNode) {
      setHovered(false);

      return;
    }

    setTimeout(() => {
      setHovered(false);
    }, 500);
  }, [selectedNode]);

  const { currentNodeIndex } = usePathway();

  return (
    <>
      <Select enabled={selectedNode ? isSelected : isSelectedCategory}>
        <mesh
          ref={ref}
          geometry={getGeometry(node)}
          material={material}
          name={node.id}
          onPointerOut={onPointerOut}
          onPointerOver={onPointerIn}
          scale={hovered ? 1.5 : 1}
          userData={node}
          position={[node.x,node.y,node.z]}
        >
          <PathwayBadge
            show={currentNodeIndex >= 0}
            value={currentNodeIndex + 1}
          />

          {hovered && (
            <Portal>
              <Tooltip node={node} />
            </Portal>
          )}
        </mesh>
      </Select>
    </>
  );
});

Cube.displayName = "Cube";
