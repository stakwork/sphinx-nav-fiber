/* eslint-disable no-param-reassign */
import { useFrame } from "@react-three/fiber";
import { RefObject, useEffect, useState, useMemo } from "react";
import * as THREE from "three";
import { useSelectedNode } from "~/stores/useDataStore";
import { NodeExtended } from "~/types";


export const useNavigation = (
    thisNodeRef: RefObject<THREE.Mesh | null>
) => {
  const selectedNode = useSelectedNode();
  const [sleep, setSleep] = useState(true)
  const [distanceReached, setDistanceReached] = useState(false)

  // camera movement to selection params
    const [minDistanceToTarget] = useState(80)
    const [minDistanceToHome] = useState(10)

    const childIsSelected = useMemo(() => {
        const isFloater = thisNodeRef?.current?.userData?.node_type !== 'show'
        const selectedIsChild = thisNodeRef?.current?.userData?.children?.includes(selectedNode?.ref_id || '')
        return isFloater && selectedIsChild
    }, [selectedNode, thisNodeRef])
  
  useFrame((state, delta) => {
    if (thisNodeRef?.current) {
      // do movement animation
        if (selectedNode && childIsSelected && !distanceReached) {
            moveToNode(thisNodeRef.current, selectedNode)
        } else if (!childIsSelected && !sleep){
            moveHome(thisNodeRef.current)
        }
    }
  });

  useEffect(() => {    
    if (childIsSelected) {
        setDistanceReached(false)     
    } else if (!childIsSelected) {
        setSleep(false)    
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode]);
  
  const moveToNode = (thisNode: THREE.Mesh, toNode: NodeExtended) => {
    const mesh = new THREE.Vector3(
        toNode.x,
        toNode.y,
        toNode.z
    );

    const distance = thisNode.position.distanceTo(mesh)

    // stop 200 before colliding with cube
    if (distance < minDistanceToTarget) {
      setDistanceReached(true)
    } else {
        thisNode.position.lerp(mesh, 0.04)
    }
  }
    
  const moveHome = (thisNode: THREE.Mesh) => {
    const mesh = new THREE.Vector3(
        thisNode.userData.x,
        thisNode.userData.y,
        thisNode.userData.z
    );

    const distance = thisNode.position.distanceTo(mesh)

    // stop 200 before colliding with cube
      if (distance < minDistanceToHome) {
        setSleep(true)
    } else {
        thisNode.position.lerp(mesh, 0.04)
    }
  }

  return null;
};
