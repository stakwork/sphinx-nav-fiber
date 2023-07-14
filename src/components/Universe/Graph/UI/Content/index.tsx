import { useMemo } from 'react'
import { Vector3 } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'

// import { View } from '~/components/App/SideBar/View'
import { View } from '~/components/App/SideBar/View'
import { panelIsHidden } from '../constants'
import { HtmlPanel } from './HtmlPanel'

export const Content = () => {
  const data = useDataStore((s) => s.data)

  const hideNodeDetails = useDataStore((s) => s.hideNodeDetails)
  const selectedNode = useSelectedNode()
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)

  const panelIsVisible = useMemo(
    () => selectedNode && !showSelectionGraph && !hideNodeDetails && !panelIsHidden(selectedNode?.node_type),
    [selectedNode, showSelectionGraph, hideNodeDetails],
  )

  const position = useMemo(() => {
    const selected = data?.nodes.find((f) => f.ref_id === selectedNode?.ref_id)

    return new Vector3(selected?.x || 0, selected?.y || 0, selected?.z || 0)
  }, [data?.nodes, selectedNode?.ref_id])

  if (!panelIsVisible) {
    return null
  }

  return (
    <>
      <HtmlPanel position={position}>
        <View isGraphView />
      </HtmlPanel>
    </>
  )
}
