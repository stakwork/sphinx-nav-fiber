import { Segments, Select } from '@react-three/drei'
import { ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import { forceCenter, forceLink, forceManyBody, forceSimulation } from 'd3-force-3d'
import { memo, useCallback, useEffect } from 'react'
import { Object3D } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { createLinks } from '~/network/fetchGraphData/getGraphData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { GraphData, NodeExtended } from '~/types'
import { Segment } from '../../Segment'
import { Cube } from '../Cube'
import { AnimatedHighlights } from '../Highlights/animated'
import { TextNode } from '../Text'

const simulation = forceSimulation()
  .numDimensions(3)
  .force(
    'link',
    forceLink()
      .distance((d: { source: NodeExtended; target: NodeExtended }) => {
        const sourceType = d.source.node_type
        const targetType = d.target.node_type

        let distance = 100

        if (sourceType === 'show') {
          distance = 500
        }

        switch (targetType) {
          case 'show':
            distance = 5
            break
          case 'topic':
            distance = 10
            break
          case 'guest':
            distance = 8
            break
          case 'clip':
            distance = 9
            break
          case 'episode':
            distance = 4
            break
          default:
        }

        return distance * 100
      })
      .strength(0.02),
  )
  .force('center', forceCenter().strength(0.9))
  .force('charge', forceManyBody().strength(0.9))
  .force('dagRadial', null)
  .velocityDecay(0.1)
  .stop()

export const SelectionDataGraph = memo(() => {
  const data = useGraphData()
  const selectedNode = useSelectedNode()
  const setHoveredNode = useDataStore((s) => s.setHoveredNode)

  const setTranscriptOpen = useAppStore((s) => s.setTranscriptOpen)
  const selectedNodeRelativeIds = useDataStore((s) => s.selectedNodeRelativeIds)

  const selectionGraphData = useDataStore((s) => s.selectionGraphData)
  const setSelectionData = useDataStore((s) => s.setSelectionData)

  useEffect(() => {
    const x = 0
    const y = 0
    const z = 0

    const nodes = data.nodes
      .filter((f) => f.ref_id === selectedNode?.ref_id || selectedNodeRelativeIds.includes(f?.ref_id || ''))
      .map((n) => ({ ...n, x, y, z }))
    const links = createLinks(nodes)

    setSelectionData({ nodes, links })
  }, [data, selectedNode, selectedNodeRelativeIds])

  const { clock } = useThree()

  useEffect(() => {
    simulation.alpha(0).stop()
    simulation.stop().nodes(selectionGraphData?.nodes || [])
    simulation
      .force('link')
      .id((d: NodeExtended) => d.id)
      .links(selectionGraphData.links)
    simulation.alpha(0).restart()
    simulation.alpha(1).restart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clock, selectionGraphData])

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
        {selectionGraphData?.nodes.map((node) => {
          if (node.node_type === 'topic') {
            return <TextNode key={node.ref_id || node.id + '-compact'} node={node} />
          }

          return <Cube animated key={node.ref_id || node.id + '-compact'} node={node} />
        })}
      </Select>

      <Segments
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fog
        limit={selectionGraphData?.links.length}
        lineWidth={0.6}
      >
        {(selectionGraphData?.links as unknown as GraphData['links']).map((link, index) => (
          <Segment
            animated
            // eslint-disable-next-line react/no-array-index-key
            key={index.toString()}
            link={link}
          />
        ))}
      </Segments>

      <AnimatedHighlights />
    </>
  )
})
