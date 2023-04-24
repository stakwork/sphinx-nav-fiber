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
import { useNavigation } from './hooks/useNavigation'

const geometryXs = new THREE.BoxGeometry(10, 10, 10);
const geometryS = new THREE.BoxGeometry(20, 20, 20);
const geometryM = new THREE.BoxGeometry(35, 35, 35);
const sphereGeometry = new THREE.SphereGeometry(10, 10, 10);
const sphereMaterial = new THREE.MeshStandardMaterial({
  transparent: true,
  opacity:0
});

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

  // useNavigation(ref)

  const material = useMaterial(
    node.image_url || "noimage.jpeg",
    highlight,
    highlightColor
  );

  const geometry = getGeometry(node)

  const isSelected = selectedNode?.id === node.id;
  const isSelectedCategory = node.node_type === categoryFilter;

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
          geometry={geometry}
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

      {node.node_type === 'topic' && <Select enabled>
        <mesh
          geometry={sphereGeometry}
          material={sphereMaterial}
          position={[node.x, node.y, node.z]}
          scale={20}
          userData={node}
          onPointerOut={onPointerOut}
          onPointerOver={onPointerIn}
        />
        </Select>}
    </>
  );
});

Cube.displayName = "Cube";
