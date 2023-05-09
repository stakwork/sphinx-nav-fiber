import { Instance, Instances, Select } from '@react-three/drei'
import { memo, useCallback, useMemo } from 'react'
import * as THREE from 'three'
import { Object3D } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { NodeInstance } from './NodeInstance'

type InstanceRecords = {
  nodes: NodeExtended[]
  texture?: THREE.Texture
  geometry?: THREE.BufferGeometry
}

const textureLoader = new THREE.TextureLoader()
const boxGeometry = new THREE.BoxGeometry(10, 10, 10)

export const Cubes = memo(() => {
  const data = useGraphData()

  const searchTerm = useAppStore((s) => s.currentSearch)
  const setTranscriptOpen = useAppStore((s) => s.setTranscriptOpen)

  const handleSelect = useCallback(
    (nodes: Object3D[]) => {
      const node = nodes?.[0]

      if (node) {
        // always close transcript when switching nodes
        setTranscriptOpen(false)

        if (node.userData) {
          useDataStore.getState().setSelectedNode((node?.userData as NodeExtended) || null)
        }
      }
    },
    [setTranscriptOpen],
  )

  // const shouldHighlightPartial =
  //   searchTerm &&
  //   !data.nodes.some((i) => i.node_type === 'guest' && searchTerm.toLowerCase() === i?.label?.toLowerCase())

  // group nodes by texture
  const nodeInstances: Record<string, InstanceRecords> = useMemo(() => {
    const instances: Record<string, InstanceRecords> = {}

    data.nodes.forEach((node) => {
      // nodes with textures
      if (node.image_url) {
        if (instances[node.image_url]) {
          instances[node.image_url].nodes.push(node)
        } else {
          const texture = textureLoader.load(node.image_url, undefined, undefined, () => {
            // if loading fails, assign texture noimage.jpeg
            if (node.image_url && instances[node.image_url]) {
              instances[node.image_url].texture = textureLoader.load('noimage.jpeg')
            }
          })

          instances[node.image_url] = {
            nodes: [node],
            texture,
            geometry: boxGeometry,
          }
        }
      }
      // nodes without textures
      else if (instances['no-texture']) {
        instances['no-texture'].nodes.push(node)
      } else {
        const texture = textureLoader.load('noimage.jpeg')

        instances['no-texture'] = {
          nodes: [node],
          texture,
          geometry: boxGeometry,
        }
      }
    })

    return instances
  }, [data.nodes])

  // group nodes by texture
  const highlightInstances: Record<string, InstanceRecords> = useMemo(() => {
    const instances: Record<string, InstanceRecords> = {}

    data.nodes.forEach((node) => {
      // nodes with textures
      if (node.image_url) {
        if (instances[node.image_url]) {
          instances[node.image_url].nodes.push(node)
        } else {
          const texture = textureLoader.load(node.image_url, undefined, undefined, () => {
            // if loading fails, assign texture noimage.jpeg
            if (node.image_url && instances[node.image_url]) {
              instances[node.image_url].texture = textureLoader.load('noimage.jpeg')
            }
          })

          instances[node.image_url] = {
            nodes: [node],
            texture,
            geometry: boxGeometry,
          }
        }
      }
      // nodes without textures
      else if (instances['no-texture']) {
        instances['no-texture'].nodes.push(node)
      } else {
        const texture = textureLoader.load('noimage.jpeg')

        instances['no-texture'] = {
          nodes: [node],
          texture,
          geometry: boxGeometry,
        }
      }
    })

    return instances
  }, [data.nodes])

  const renderInstances = () =>
    Object.keys(nodeInstances).map((instanceKey) => {
      const instance = nodeInstances[instanceKey]
      const { nodes, texture, geometry } = instance

      console.log('render')

      return (
        <Instances key={instanceKey} geometry={geometry}>
          <meshStandardMaterial map={texture} />
          {nodes.map((node, index) => {
            return (
              <NodeInstance
                // eslint-disable-next-line react/no-array-index-key
                key={`${node.id}-${index}`}
                node={node}
              />
            )
          })}
        </Instances>
      )
    })

  const renderHighlights = () => (
    <Instances>
      <boxGeometry />
      <meshStandardMaterial emissiveIntensity={30} opacity={0.1} toneMapped={false} transparent />
      {Object.keys(highlightInstances).map((instanceKey) => {
        const instance = nodeInstances[instanceKey]
        const { nodes, texture, geometry } = instance

        return <Instance key={instanceKey} />
      })}
    </Instances>
  )

  console.log('nodeInstances', nodeInstances)

  return (
    <Select onChange={handleSelect} filter={(selected) => selected.filter((f) => !!f.userData?.id)}>
      {renderInstances()}
      {/* {renderHighlights()} */}
    </Select>
  )
})

Cubes.displayName = 'Cubes'
