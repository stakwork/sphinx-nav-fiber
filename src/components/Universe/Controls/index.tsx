import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useLayoutEffect } from "react";
import * as THREE from "three";
import { MathUtils } from "three";
import { useControlStore } from "~/stores/useControlStore";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { useCameraAnimations } from "./CameraAnimations";

const autoRotateSpeed = 1;

const p = new THREE.Vector3();

const introAnimationTargetPosition = new THREE.Vector3(-1900, -2200, -2800);

type Props = {
  disableAnimations?: boolean;
};

let listenerInitialized = false
export const Controls = ({ disableAnimations }: Props) => {
  const selectedNode = useSelectedNode();

  const cameraControlsRef = useRef<CameraControls | null>(null);

  const { isUserDragging } = useControlStore();
  const disableCameraRotation = useDataStore((s) => s.disableCameraRotation);

  useCameraAnimations(cameraControlsRef, { enabled: !disableAnimations });

  // camera events
  useEffect(() => {
    if (!listenerInitialized) {
      cameraControlsRef?.current?.addEventListener('rest', () => {
        if (isUserDragging) {
          useControlStore.setState({ isUserDragging: false })
        }
      })
      listenerInitialized = true
    }
  },[cameraControlsRef,isUserDragging])

  useEffect(() => {
    const run = async () => {
      if (cameraControlsRef.current) {
        cameraControlsRef.current.smoothTime = 0.7;

        if (!selectedNode) {
          await cameraControlsRef.current.setLookAt(
            introAnimationTargetPosition.x,
            introAnimationTargetPosition.y,
            introAnimationTargetPosition.z,
            0,
            0,
            0,
            true
          );

          return;
        }

        const mesh = new THREE.Vector3(
          selectedNode.x,
          selectedNode.y,
          selectedNode.z
        );

        p.copy(mesh);

        p.add(
          new THREE.Vector3(
            THREE.MathUtils.randInt(60, 80),
            THREE.MathUtils.randInt(60, 80),
            THREE.MathUtils.randInt(60, 80)
          )
        );

        await cameraControlsRef.current.setLookAt(
          p.x,
          p.y,
          p.z,
          mesh.x,
          mesh.y,
          mesh.z,
          true
        );
      }
    };

    run();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode]);

  useFrame((_, delta) => {
    if (cameraControlsRef.current) {
      if (!disableCameraRotation && !isUserDragging) {
        // cameraControlsRef.current.azimuthAngle +=
        //   autoRotateSpeed * delta * MathUtils.DEG2RAD;
      }

      cameraControlsRef.current.update(delta);
    }
  });

  return (
    <CameraControls
      ref={cameraControlsRef}
      dollyToCursor
      infinityDolly
      onStart={() => useControlStore.setState({ isUserDragging: true })}
    />
  );
};
