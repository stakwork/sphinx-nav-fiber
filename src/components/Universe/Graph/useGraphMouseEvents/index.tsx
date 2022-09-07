import { useThree } from "@react-three/fiber";
import { useGesture } from "@use-gesture/react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useMousePosition } from "~/hooks/useMousePosition";
import { useDataStore } from "~/stores/useDataStore";
import { Node, NodeMesh } from "~/types";

const raycaster = new THREE.Raycaster();

export const useGraphMouseEvents = (
  onHover?: (_: any) => void,
  onNotHover?: (_: Node) => void,
  onClicked?: (_: Node) => void
) => {
  const { camera, scene } = useThree();

  const pointer = useMousePosition();

  const hoverNode = useRef<Node | null>(null);

  const previousHoverNode = useRef<Node | null>(null);
  const setHoveredNode = useDataStore((s) => s.setHoveredNode);

  useGesture(
    {
      onMouseUp: () => {
        if (hoverNode.current) {
          onClicked?.(hoverNode.current);
        }
      },
    },
    {
      target: document.getElementById("universe-canvas") || undefined,
    }
  );

  useEffect(() => {
    const [x, y] = pointer;

    raycaster.setFromCamera({ x, y }, camera);

    const intersects = raycaster.intersectObjects<NodeMesh | THREE.Line>(
      scene.children
    );

    const node = intersects.find((f) => {
      if (f.object instanceof THREE.Line) {
        return false;
      }

      return f.object.__data?.type !== "topic";
    });

    const label = intersects.find((f) => {
      if (f.object instanceof THREE.Line) {
        return false;
      }

      return f.object.__data?.type === "topic";
    });

    const hoveredObject =
      (node?.object as NodeMesh)?.__data ||
      (label?.object as NodeMesh)?.__data ||
      null;

    if (hoveredObject?.id !== hoverNode.current?.id) {
      previousHoverNode.current = hoverNode.current;

      setHoveredNode(hoveredObject);
      onHover?.(hoveredObject);
      onNotHover?.(previousHoverNode.current!);

      hoverNode.current = hoveredObject;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onHover, onNotHover, pointer]);

  return {
    hoverNode: hoverNode.current,
    previousHoverNode: previousHoverNode.current,
  };
};
