import { useThree } from "@react-three/fiber";
import { useGesture } from "@use-gesture/react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useMousePosition } from "~/hooks/useMousePosition";
import { useDataStore } from "~/stores/useDataStore";
import { NodeExtended, NodeMesh } from "~/types";

const raycaster = new THREE.Raycaster();

export const useGraphMouseEvents = (
  onHover?: (_: NodeExtended) => void,
  onNotHover?: (c: NodeExtended | null, p: NodeExtended) => void,
  onClicked?: (_: NodeExtended | null) => void
) => {
  const { camera, scene } = useThree();

  const pointer = useMousePosition();

  const hoverNode = useRef<NodeExtended | null>(null);

  const previousHoverNode = useRef<NodeExtended | null>(null);
  const isMovingRef = useRef(false);

  const [clickTarget, setClickTarget] = useState<NodeExtended | null>(null);

  const [cameraAnimation, setCameraAnimation] = useDataStore((s) => [
    s.cameraAnimation,
    s.setCameraAnimation,
  ]);

  useGesture(
    {
      onMouseDown: () => {
        isMovingRef.current = false;

        if (hoverNode.current) {
          setClickTarget(hoverNode.current);
        }

        if (cameraAnimation) {
          cameraAnimation.kill();
          setCameraAnimation(null);
        }
      },
      onMouseMove: () => {
        isMovingRef.current = true;
      },
      onMouseUp: () => {
        if (!isMovingRef.current) {
          onClicked?.(clickTarget);
          setClickTarget(null);
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

      // eslint-disable-next-line no-underscore-dangle
      return f.object.__data?.node_type !== "topic";
    });

    const label = intersects.find((f) => {
      if (f.object instanceof THREE.Line) {
        return false;
      }

      // eslint-disable-next-line no-underscore-dangle
      return f.object.__data?.node_type === "topic";
    });

    const hoveredObject =
      // eslint-disable-next-line no-underscore-dangle
      (node?.object as NodeMesh)?.__data ||
      // eslint-disable-next-line no-underscore-dangle
      (label?.object as NodeMesh)?.__data ||
      null;

    if (hoveredObject?.id !== hoverNode.current?.id) {
      previousHoverNode.current = hoverNode.current;

      if (hoveredObject) {
        onHover?.(hoveredObject);
      }

      onNotHover?.(hoveredObject, previousHoverNode.current!);

      hoverNode.current = hoveredObject;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onHover, onNotHover, pointer]);

  return {
    hoverNode: hoverNode.current,
    previousHoverNode: previousHoverNode.current,
  };
};
