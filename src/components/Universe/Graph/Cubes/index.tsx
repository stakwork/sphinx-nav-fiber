import { Instance, Instances, Select } from '@react-three/drei'
import { memo, useCallback, useMemo } from 'react'
import * as THREE from 'three'
import { Object3D } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { NodeInstance } from './NodeInstance'

type NodeTypeColors = Record<string, string>

const NODE_TYPE_COLORS: NodeTypeColors = {
  data_series: 'red',
  tweet: 'aqua',
}

type HighlighterProps = {
  node: NodeExtended | null
  selectedNode: NodeExtended | null
  searchTerm: string | null
  shouldHighlightPartial: string | boolean | null
}

type InstanceRecords = {
  nodes: NodeExtended[]
  texture?: THREE.Texture
  geometry?: THREE.BufferGeometry
}

const textureLoader = new THREE.TextureLoader()
const boxGeometry = new THREE.BoxGeometry(10, 10, 10)

export const Cubes = memo(() => {
  const data = useGraphData()

  const selectedNode = useSelectedNode()

  const searchTerm = useAppStore((s) => s.currentSearch)
  const setTranscriptOpen = useAppStore((s) => s.setTranscriptOpen)

  const handleSelect = useCallback(
    (nodes: Object3D[]) => {
      const node = nodes?.[0]

      if (node) {
        // always close transcript when switching nodes
        setTranscriptOpen(false)

        useDataStore.getState().setSelectedNode((node?.userData as NodeExtended) || null)
      }
    },
    [setTranscriptOpen],
  )

  const shouldHighlightPartial =
    searchTerm &&
    !data.nodes.some((i) => i.node_type === 'guest' && searchTerm.toLowerCase() === i?.label?.toLowerCase())

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

      return (
        <Instances key={instanceKey} geometry={geometry}>
          <meshStandardMaterial map={texture} />
          {nodes.map((node, index) => {
            const { highlight, highlightColor } = getHighlighter({
              node,
              selectedNode,
              searchTerm,
              shouldHighlightPartial,
            })

            return (
              <NodeInstance
                // eslint-disable-next-line react/no-array-index-key
                key={`${node.id}-${index}`}
                highlight={highlight}
                highlightColor={highlightColor}
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

  return (
    <Select onChange={handleSelect} filter={(selected) => selected.filter((f) => !!f.userData?.id)}>
      {renderInstances()}
      {renderHighlights()}
    </Select>
  )
})

const getHighlighter = ({ node, selectedNode, searchTerm, shouldHighlightPartial }: HighlighterProps) => {
  let highlight = false

  if (searchTerm && node?.node_type === 'guest') {
    if (shouldHighlightPartial) {
      highlight = searchTerm
        .split(' ')
        .some((i) => node?.label.toLowerCase().match(new RegExp(`\\b${i.toLowerCase()}\\b`)) !== null)
    } else {
      highlight = node?.label.toLowerCase() === searchTerm.toLowerCase()
    }
  }

  let relationHighlightColor: string | undefined

  // highlight node if exists in children of selected
  if (node?.ref_id && selectedNode?.children?.length && selectedNode.children.includes(node.ref_id)) {
    highlight = true
    relationHighlightColor = NODE_RELATIVE_HIGHLIGHT_COLORS.children.nodeColor
  } else if (selectedNode?.guests?.length && node?.type === 'guest') {
    const nodeIsGuest = !!selectedNode?.guests.find((f) => {
      if (typeof f !== 'string') {
        return f?.ref_id && f.ref_id === node?.ref_id
      }

      return false
    })

    if (nodeIsGuest) {
      // highlight node if exists in guests of selected
      highlight = true
      relationHighlightColor = NODE_RELATIVE_HIGHLIGHT_COLORS.guests.nodeColor
    }
  }

  const highlightColor = relationHighlightColor || NODE_TYPE_COLORS[node?.node_type || ''] || 'green'

  highlight = highlight || !!NODE_TYPE_COLORS[node?.node_type || '']

  return { highlight, highlightColor }
}

Cubes.displayName = 'Cubes'
