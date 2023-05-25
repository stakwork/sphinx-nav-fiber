import { Select } from '@react-three/drei'
import { ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import { forceCenter, forceLink, forceManyBody, forceSimulation } from 'd3-force-3d'
import { useCallback, useEffect } from 'react'
import { Object3D, Vector3 } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { generateForceGraphPositions } from '~/transformers/forceGraph'
import { generateSplitGraphPositions } from '~/transformers/splitGraph'
import { NodeExtended } from '~/types'
import { Cube } from '../Cube'
import { TextNode } from '../Text'

const simulation = forceSimulation()
  .numDimensions(3)
  .force(
    'link',
    forceLink()
      // .distance((d: { source: NodeExtended; target: NodeExtended }) => {
      //   const sourceType = d.source.node_type
      //   const targetType = d.target.node_type

      //   if (sourceType === 'show') {
      //     return 500
      //   }

      //   switch (targetType) {
      //     case 'show':
      //       return 200
      //     case 'topic':
      //       return 1000
      //     case 'guest':
      //       return 300
      //     case 'clip':
      //       return 100
      //     case 'episode':
      //       return 150
      //     default:
      //       return 100
      //   }
      // })
      .strength(0.02),
  )
  .force('center', forceCenter().strength(0.01))
  .force('charge', forceManyBody())
  .force('dagRadial', null)
  .velocityDecay(0.1)
  .stop()

const maxTicks = 200
let currentTick: number

// Time in seconds
const timeLimit = 3

export const CompactView = () => {
  const data = useGraphData()
  const setData = useDataStore((s) => s.setData)
  const graphStyle = useDataStore((s) => s.graphStyle)
  const selectedNode = useSelectedNode()
  const setHoveredNode = useDataStore((s) => s.setHoveredNode)
  const setTranscriptOpen = useAppStore((s) => s.setTranscriptOpen)
  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)

  const { clock } = useThree()

  const resetNodePositions = (position: Vector3) => {
    const nodes = data.nodes.map((n) => ({ ...n, ...position }))
    const links = data.links.map((l) => ({ ...l, ...position }))

    setData({ nodes, links })
  }

  const restoreNodePositions = () => {
    if (graphStyle === 'split') {
      const updatedData = generateSplitGraphPositions(data)

      setData(updatedData)
    } else {
      const updatedData = generateForceGraphPositions(data, true)

      setData(updatedData)
    }
  }

  // reset node positions to 0
  useEffect(() => {
    resetNodePositions(new Vector3(0, 0, 0))

    return function () {
      restoreNodePositions()
    }
  }, [])

  useEffect(() => {
    resetNodePositions(new Vector3(selectedNode?.x || 0, selectedNode?.y || 0, selectedNode?.z || 0))

    simulation.alpha(0).stop()

    simulation
      .stop()
      .nodes(
        data.nodes.filter(
          (f) => selectedNode?.ref_id === f.ref_id || selectedNodeRelativeIds.includes(f?.ref_id || ''),
        ),
      )

    // layout
    //   .force('link')
    //   .id((d: NodeExtended) => d.ref_id)
    //   .links(data.links)

    simulation.alpha(1).restart()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clock, selectedNode, selectedNodeRelativeIds, setData])

  useFrame(() => {
    simulation.tick()
  })

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

  const onPointerOut = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()
      setHoveredNode(null)
    },
    [setHoveredNode],
  )

  const onPointerIn = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()

      const objects = e.intersections.map((i) => i.object)
      const object = objects[0]

      if (object?.userData?.ref_id) {
        const node = object.userData as NodeExtended

        setHoveredNode(node)
      }
    },
    [setHoveredNode],
  )

  return (
    <>
      <Select
        filter={(selected) => selected.filter((f) => !!f.userData?.id)}
        onChange={handleSelect}
        onPointerOut={onPointerOut}
        onPointerOver={onPointerIn}
      >
        {data.nodes
          .filter((f) => selectedNodeRelativeIds.includes(f?.ref_id || ''))
          .map((node) => {
            if (node.node_type === 'topic') {
              return <TextNode key={node.ref_id || node.id + '-compact'} node={node} />
            }

            return <Cube key={node.ref_id || node.id + '-compact'} node={node} />
          })}
      </Select>

      {/* <Segments key={`links-${data.links.length}-compact`} limit={data.links.length} lineWidth={0.45}>
        {(data.links as unknown as GraphData['links']).map((link, index) => (
          <Segment
            // eslint-disable-next-line react/no-array-index-key
            key={index.toString() + '-compact'}
            link={link}
          />
        ))}
      </Segments> */}
    </>
  )
}
