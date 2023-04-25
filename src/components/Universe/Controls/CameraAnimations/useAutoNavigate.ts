/* eslint-disable no-param-reassign */
import type { CameraControls } from "@react-three/drei";
import { useFrame, Camera } from "@react-three/fiber";
import { RefObject, useEffect, useState } from "react";
import * as THREE from "three";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { useControlStore } from "~/stores/useControlStore";
import { NodeExtended } from "~/types";

let lookAtAnimationTimer: ReturnType<typeof setTimeout>

export const useAutoNavigate = (
  cameraControlsRef: RefObject<CameraControls | null>
) => {

  const selectedNode = useSelectedNode();
  const cameraFocusTrigger = useDataStore(s=>s.cameraFocusTrigger)

  const { isUserDragging } = useControlStore();

  const [distanceReached, setDistanceReached] = useState(false)
  const [lookAtReached, setLookAtReached] = useState(false)

  // camera movement to selection params
  const [minDistance] = useState(180)

  useEffect(() => {
    setDistanceReached(false)
    setLookAtReached(false)
    useControlStore.setState({ userMovedCamera: false })
  },[cameraFocusTrigger])

  useEffect(() => {
    // stop navigation when user interacts
    if (isUserDragging) {
        setDistanceReached(true)
        setLookAtReached(true)
    }
  },[isUserDragging,distanceReached,lookAtReached])
  
  useFrame((state, delta) => {
    if (cameraControlsRef.current) {
      // do movement animation
      if (selectedNode) {
        if (!distanceReached) {
          moveCameraToNode(selectedNode, state.camera)
        }

        if (!lookAtReached) {
          turnCameraToNode(selectedNode, state.camera)
        }
      }
    }
  });

  useEffect(() => {    
    if (selectedNode) {
      clearTimeout(lookAtAnimationTimer)

      lookAtAnimationTimer = setTimeout(() => {
        setLookAtReached(true)
        clearTimeout(lookAtAnimationTimer)
      }, 2000)
      
      setDistanceReached(false)
      setLookAtReached(false)      
      useControlStore.setState({ userMovedCamera: false })
    }

    return ()=> clearTimeout(lookAtAnimationTimer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode]);

  
  const moveCameraToNode = (node: NodeExtended, camera: Camera) => {
    const mesh = new THREE.Vector3(
      node.x,
      node.y,
      node.z
    );

    const distance = camera.position.distanceTo(mesh)

    // stop 200 before colliding with cube
    if (distance < minDistance) {
      setDistanceReached(true)
    } else {
      camera.position.lerp(mesh, 0.5)
      camera.updateProjectionMatrix()
    }
  }

  const turnCameraToNode = (node: NodeExtended, camera: Camera) => {
    const mesh = new THREE.Vector3(
      node.x,
      node.y,
      node.z
    );
    
    cameraControlsRef?.current?.setLookAt(camera.position.x, camera.position.y, camera.position.z, mesh.x, mesh.y, mesh.z, true) 
  }

  return null;
};
