import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
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

export const Controls = ({ disableAnimations }: Props) => {
  const selectedNode = useSelectedNode();

  const cameraControlsRef = useRef<CameraControls | null>(null);

  const [distanceReached, setDistanceReached] = useState(false)
  const [lookAtReached, setLookAtReached] = useState(false)

  const { isUserDragging } = useControlStore();
  const disableCameraRotation = useDataStore((s) => s.disableCameraRotation);

  useCameraAnimations(cameraControlsRef, { enabled: !disableAnimations });

  useEffect(() => {    
    if (selectedNode) {
      setDistanceReached(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode]);


  useFrame((state, delta) => {
    if (cameraControlsRef.current) {
      if (!disableCameraRotation && !isUserDragging) {
        cameraControlsRef.current.azimuthAngle +=
          autoRotateSpeed * delta * MathUtils.DEG2RAD;
      }

      // do movement animation
      if (selectedNode) {
        const mesh = new THREE.Vector3(
          selectedNode.x,
          selectedNode.y,
          selectedNode.z
        );

        if (!distanceReached) {
          const distance = state.camera.position.distanceTo(mesh)
          if (distance < 150) {
            setDistanceReached(true)
          } else {
            state.camera.position.lerp(mesh, 0.5)
            state.camera.updateProjectionMatrix()
            cameraControlsRef.current.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, mesh.x, mesh.y, mesh.z, true) 
          }
        }
      }
      cameraControlsRef.current.update(delta);
    }
  });

  return (
    <CameraControls
      ref={cameraControlsRef}
      dollyToCursor
      
      // infinityDolly
      onEnd={() => useControlStore.setState({ isUserDragging: false })}
      onStart={() => useControlStore.setState({ isUserDragging: true })}
      smoothTime={1}
    />
  );
};
