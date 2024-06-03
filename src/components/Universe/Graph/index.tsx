import { Segments } from '@react-three/drei'
import { isEqual } from 'lodash'
import { useEffect, useMemo, useRef } from 'react'
import { Group, Vector3 } from 'three'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStoreLatest'
import { Link } from '~/types'
import { maxChildrenDisplayed } from '../constants'
import { Cubes } from './Cubes'
import { Earth } from './Earth'
import { LoadingNodes } from './LoadingNodes'
import { Particles } from './Particles'
import { Segment } from './Segment'
import { NodeDetailsPanel } from './UI'

export const Graph = () => {
  const { dataInitial, isLoadingNew, isFetching, dataNew, resetDataNew } = useDataStore((s) => s)
  const groupRef = useRef<Group>(null)

  const {
    data,
    setData,
    simulation,
    simulationCreate,
    simulationHelpers,
    graphStyle,
    showSelectionGraph,
    selectedNodeRelativeIds,
    selectionGraphData,
    selectedNode,
  } = useGraphStore((s) => s)

  useEffect(() => {
    if (!dataNew) {
      return
    }

    const nodes = dataNew.nodes || []
    const links = dataNew.links || []

    if (simulation && !isEqual(dataNew, dataInitial)) {
      console.log('not equal')

      simulationHelpers.addNodesAndLinks(nodes, links)
    }

    if (!simulation) {
      simulationCreate(nodes, links)
    }

    resetDataNew()
  }, [setData, dataNew, simulation, simulationCreate, resetDataNew, simulationHelpers, dataInitial])

  const lineWidth = useMemo(() => {
    if (showSelectionGraph) {
      return 0
    }

    if (graphStyle === 'force') {
      return 0.2
    }

    return 0.4
  }, [showSelectionGraph, graphStyle])

  const nodeBadges = useMemo(() => {
    const nodes = showSelectionGraph ? selectionGraphData.nodes : data?.nodes || []

    const childIds = nodes
      .filter((f) => selectedNodeRelativeIds.includes(f?.ref_id || '') || selectedNode?.ref_id === f?.ref_id)
      .slice(0, maxChildrenDisplayed)

    const badgesToRender = childIds.map((n) => {
      const spos = new Vector3(selectedNode?.x, selectedNode?.y, selectedNode?.z)

      const tpos = new Vector3(n.x, n.y, n.z)

      const l: Link<string> = {
        source: selectedNode?.ref_id ? selectedNode.ref_id : '',
        target: n.ref_id ? n.ref_id : '',
        targetRef: n.ref_id,
        sourceRef: selectedNode?.ref_id,
        sourcePosition: spos,
        targetPosition: tpos,
      }

      return (
        <Segment
          // eslint-disable-next-line react/no-array-index-key
          key={n.ref_id}
          link={l}
        />
      )
    })

    return badgesToRender
  }, [selectedNodeRelativeIds, data?.nodes, showSelectionGraph, selectionGraphData, selectedNode])

  useEffect(() => {
    if (!simulation) {
      return
    }

    if (graphStyle === 'split') {
      simulationHelpers.addSplitForce()
    }

    if (graphStyle === 'sphere') {
      simulationHelpers.addRadialForce()
    }
  }, [graphStyle, simulationHelpers, simulation])

  useEffect(() => {
    if (!simulation) {
      return
    }

    simulation.on('tick', () => {
      console.log('tick')

      if (groupRef.current) {
        const gr = groupRef.current.getObjectByName('simulation-3d-group') as Group

        gr.children.forEach((mesh, index) => {
          const simulationNode = simulation.nodes()[index]

          if (simulationNode) {
            mesh.position.set(simulationNode.x, simulationNode.y, simulationNode.z)
          }
        })
      }
    })
  }, [simulation])

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
