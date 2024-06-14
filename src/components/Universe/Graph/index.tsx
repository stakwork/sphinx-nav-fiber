import { Segment, SegmentObject, Segments } from '@react-three/drei'
import { isEqual } from 'lodash'
import { useEffect, useMemo, useRef } from 'react'
import { Group } from 'three'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNodeRelativeIds } from '~/stores/useGraphStore'
import { Link, NodeExtended } from '~/types'
import { Cubes } from './Cubes'
import { Earth } from './Earth'
import { LoadingNodes } from './LoadingNodes'
import { Particles } from './Particles'
import { NodeDetailsPanel } from './UI'

export const Graph = () => {
  const { dataInitial, isLoadingNew, isFetching, dataNew, resetDataNew } = useDataStore((s) => s)
  const groupRef = useRef<Group>(null)
  const segmentsRef = useRef<SegmentObject[]>([])

  const { setData, simulation, simulationCreate, simulationHelpers, graphStyle, showSelectionGraph, selectedNode } =
    useGraphStore((s) => s)

  const selectedNodeRelativeIds = useSelectedNodeRelativeIds()

  console.log(selectedNodeRelativeIds, selectedNode)

  useEffect(() => {
    if (!dataNew) {
      return
    }

    const nodes = dataNew.nodes || []
    const links = dataNew.links || []

    const nodesClose = structuredClone(nodes)
    const linksClone = structuredClone(links)

    if (simulation) {
      const replace = isEqual(dataNew, dataInitial)

      simulationHelpers.addNodesAndLinks(nodesClose, linksClone, replace)
    }

    if (!simulation) {
      simulationCreate(nodesClose, linksClone)
    }

    resetDataNew()
  }, [setData, dataNew, simulation, simulationCreate, resetDataNew, simulationHelpers, dataInitial])

  const lineWidth = useMemo(() => {
    if (showSelectionGraph) {
      return 0
    }

    if (selectedNode) {
      return 1
    }

    return 0.1
  }, [showSelectionGraph, selectedNode])

  const nodeBadges = useMemo(() => {
    if (!dataInitial) {
      return []
    }

    const badgesToRender = dataInitial.links.map((l: Link, i: number) => (
      <Segment
        key={l.ref_id}
        ref={(r) => {
          if (Array.isArray(segmentsRef.current) && r) {
            segmentsRef.current[i] = r as SegmentObject
          }
        }}
        color="rgba(136, 136, 136, 0.1)"
        end={[100, 100, 100]}
        start={[0, 0, 0]}
      />
    ))

    return badgesToRender
  }, [dataInitial])

  useEffect(() => {
    if (!simulation) {
      return
    }

    simulationHelpers.setForces()
  }, [graphStyle, simulationHelpers, simulation])

  // useEffect(() => {
  //   console.log(selectedNode)

  //   if (segmentsRef.current) {
  //     console.log(selectedNode)
  //   }
  // }, [selectedNode, segmentsRef])

  useEffect(() => {
    if (!simulation) {
      return
    }

    simulation.on('tick', () => {
      if (groupRef.current) {
        const gr = groupRef.current.getObjectByName('simulation-3d-group') as Group

        gr.children.forEach((mesh, index) => {
          const simulationNode = simulation.nodes()[index]

          if (simulationNode) {
            mesh.position.set(simulationNode.x, simulationNode.y, simulationNode.z)
          }
        })
      }

      if (segmentsRef.current?.length && dataInitial) {
        segmentsRef.current.forEach((r, i) => {
          const link = dataInitial.links[i]

          if (link) {
            const sourceNode = simulation.nodes().find((n: NodeExtended) => n.ref_id === link.source)
            const targetNode = simulation.nodes().find((n: NodeExtended) => n.ref_id === link.target)

            r.start.set(sourceNode.x, sourceNode.y, sourceNode.z)
            r.end.set(targetNode.x, targetNode.y, targetNode.z)
          }
        })
      }
    })
  }, [dataInitial, simulation])

  if (!simulation) {
    return null
  }

  return (
    <group ref={groupRef}>
      <Cubes />
      <Earth />

      {false && <Particles />}
      {(isLoadingNew || isFetching) && <LoadingNodes />}

      {graphStyle !== 'earth' && (
        <Segments
          /** NOTE: using the key in this way the segments re-mounts
           *  everytime the data.links count changes
           * */
          key={`links-${nodeBadges.length}-${graphStyle}`}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          fog
          limit={nodeBadges.length}
          lineWidth={lineWidth}
        >
          {nodeBadges}
        </Segments>
      )}
      <NodeDetailsPanel />
    </group>
  )
}
