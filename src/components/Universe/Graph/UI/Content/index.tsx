import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Group, Vector3 } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'

// import { View } from '~/components/App/SideBar/View'
import { panelIsHidden } from '../constants'
import { HtmlPanel } from './HtmlPanel'

// The Panel component, will always stay at the top of the screen

const width = 40
const height = 10

const zero = new Vector3()

export const Content = () => {
  const groupRef = useRef<Group>(null)

  const offset = useMemo(() => {
    return new Vector3(-10, 0, -90)
  }, []) // Offset from the camera's position

  useFrame(({ camera }) => {
    if (groupRef.current) {
      // Create a new copy of the offset
      const offsetCopy = offset.clone()

      // Apply the camera's rotation to the offset copy
      offsetCopy.applyQuaternion(camera.quaternion)

      // Copy the camera's position and rotation to the panel
      groupRef.current.position.copy(camera.position)
      groupRef.current.quaternion.copy(camera.quaternion)

      // Add the rotated offset to the panel's position
      groupRef.current.position.add(offsetCopy)
    }
  })

  const selectedNode = useSelectedNode()
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const hideNodeDetails = useDataStore((s) => s.hideNodeDetails)

  const panelIsVisible = useMemo(() => {
    return !showSelectionGraph && !hideNodeDetails && !panelIsHidden(selectedNode?.node_type)
  }, [selectedNode, showSelectionGraph, hideNodeDetails])

  return (
    <group ref={groupRef} visible={panelIsVisible}>
      <HtmlPanel position={zero}>
        {/* <Closer onPointerDown={() => setHideNodeDetails(true)}>
              <MdClose size={25} />
            </Closer> */}
        {/* <View isGraphView /> */}

        <div>hiii</div>
      </HtmlPanel>
    </group>
  )
}
