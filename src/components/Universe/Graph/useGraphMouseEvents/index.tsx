import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useMousePosition } from "../../../../hooks/useMousePosition";
import { Node, NodeMesh } from "../../../../types";

const raycaster = new THREE.Raycaster();

export const useGraphMouseEvents = (
  onHover?: (_: Node) => void,
  onNotHover?: (_: Node) => void,
  onClicked?: (_: Node) => void
) => {
  const { camera, scene } = useThree();

  const previousHoverNode = useRef<Node | null>(null);
  const hoverNode = useRef<Node | null>(null);
  const pointer = useMousePosition();

  useEffect(() => {
    const handleMouseup = () => {
      if (hoverNode.current) {
        onClicked?.(hoverNode.current);
      }
    };

    document.addEventListener("mouseup", handleMouseup);

    return () => document.removeEventListener("mouseup", handleMouseup);
  }, []);

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

      if (hoveredObject) {
        onHover?.(hoveredObject);
      }

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
