import { useFrame } from "@react-three/fiber";
import { IntersectionEvent } from "@react-three/fiber/dist/declarations/src/core/events";
import { Select } from "@react-three/postprocessing";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { usePathway } from "~/components/DataRetriever";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { useAppStore } from "~/stores/useAppStore";
import { NodeExtended } from "~/types";
import { PathwayBadge } from "./components/PathwayBadge";
import { Portal } from "./components/Portal";
import { Tooltip } from "./components/Tooltip";
import { useMaterial } from "./hooks/useMaterial";
import { View } from '../../../../App/SideBar/View/index'
import { Transcript } from "~/components/App/SideBar/Transcript";
import { HtmlPanel } from "./components/HtmlPanel"


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

type Props = {
  node: NodeExtended;
  highlight: boolean;
  highlightColor: string;
};

export const Cube = memo(({ node, highlight, highlightColor }: Props) => {
  const ref = useRef<THREE.Mesh | null>(null);
  const [hovered, setHovered] = useState(false);

  const categoryFilter = useDataStore((s) => s.categoryFilter);

  const transcriptIsOpen = useAppStore((s) => s.transcriptIsOpen)

  const selectedNode = useSelectedNode();
  

  const material = useMaterial(
    node.image_url || "noimage.jpeg",
    highlight,
    highlightColor
  );

  const isSelected = selectedNode?.id === node.id;
  const isSelectedCategory = node.node_type === categoryFilter;

  useFrame(() => {
    if (selectedNode) {
      material.toneMapped = false;
    }

    ref.current?.position.set(node.x || 0, node.y || 0, node.z || 0);
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const onPointerIn = useCallback((e: IntersectionEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true)
  }, []);

  const onPointerOut = useCallback((e: IntersectionEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(false);
  }, []);

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
          scale={(hovered && !isSelected) ? 1.5 : 1}
          userData={node}
        >

          {isSelected &&
            <HtmlPanel>
            <View isSelectedView/>
            </HtmlPanel>
          }
     
          
          {isSelected && transcriptIsOpen &&
            <HtmlPanel
            intensity={8}
            speed={4}
            style={{ top: 260, left: -40,  width: 600, height: 300}}
            >
              <Transcript />
            </HtmlPanel>
            }
            
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
