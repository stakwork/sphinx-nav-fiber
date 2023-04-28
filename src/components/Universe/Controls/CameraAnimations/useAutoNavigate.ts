/* eslint-disable no-param-reassign */
import type { CameraControls } from "@react-three/drei";
import { useFrame, Camera, useThree } from "@react-three/fiber";
import { RefObject, useEffect, useState } from "react";
import * as THREE from "three";
import { useDataStore, useSelectedNode } from "~/stores/useDataStore";
import { useControlStore } from "~/stores/useControlStore";
import { NodeExtended } from "~/types";
import { playInspectSound } from "~/components/common/Sounds";

let lookAtAnimationTimer: ReturnType<typeof setTimeout>

export const useAutoNavigate = (
  cameraControlsRef: RefObject<CameraControls | null>
) => {

  const selectedNode = useSelectedNode();
  const cameraFocusTrigger = useDataStore(s=>s.cameraFocusTrigger)

  const { isUserDragging } = useControlStore();

  const { camera } = useThree()

  const [distanceReached, setDistanceReached] = useState(false)
  const [lookAtReached, setLookAtReached] = useState(false)

  // camera movement to selection params
  const [minDistance] = useState(180)
  
  const arrive = () => {
    setDistanceReached(true)
  }

  const depart = () => {
    if (selectedNode) {
      const mesh = new THREE.Vector3(
        selectedNode.x,
        selectedNode.y,
        selectedNode.z
      );

      const distance = camera.position.distanceTo(mesh)
      
      playInspectSound(distance)
    }

    useControlStore.setState({ userMovedCamera: false })
    setDistanceReached(false)
    setLookAtReached(false)        
  }

  useEffect(() => {
    setDistanceReached(false)
    setLookAtReached(false)
    useControlStore.setState({ userMovedCamera: false })
  },[cameraFocusTrigger])

  useEffect(() => {
    // stop navigation when user interacts
    if (isUserDragging && !distanceReached) {
      arrive()
      setLookAtReached(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserDragging])
  
  useFrame((state) => {
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
      
      depart() 
    }

    return ()=> clearTimeout(lookAtAnimationTimer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode]);

  
  const moveCameraToNode = (node: NodeExtended, cam: Camera) => {
    const mesh = new THREE.Vector3(
      node.x,
      node.y,
      node.z
    );

    const distance = cam.position.distanceTo(mesh)

    // stop before colliding with cube
    if (distance < minDistance) {
      arrive()
    } else {
      cam.position.lerp(mesh, 0.5)
      cam.updateProjectionMatrix()
    }
  }

  const turnCameraToNode = (node: NodeExtended, cam: Camera) => {
    const mesh = new THREE.Vector3(
      node.x,
      node.y,
      node.z
    );
    
    cameraControlsRef?.current?.setLookAt(cam.position.x, cam.position.y, cam.position.z, mesh.x, mesh.y, mesh.z, true) 
  }

  return null;
};
