import { memo, useMemo } from 'react'
import { Vector3 } from 'three'
import { Transcript } from '~/components/App/SideBar/Transcript'
import { View } from '~/components/App/SideBar/View'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useDataStore'
import { HtmlPanel } from '../Cubes/Cube/components/HtmlPanel'

export const NodeDetailsPanel = memo(() => {
  const selectedNode = useSelectedNode()

  const transcriptIsOpen = useAppStore((s) => s.transcriptIsOpen)

  const position = useMemo(
    () => new Vector3(selectedNode?.x || 0, selectedNode?.y || 0, selectedNode?.z || 0),
    [selectedNode],
  )

  return (
    <>
      <HtmlPanel position={position}>
        <View isSelectedView />
      </HtmlPanel>

      {transcriptIsOpen && (
        <HtmlPanel intensity={2} position={position} speed={4} withTransacript>
          <Transcript node={selectedNode} />
        </HtmlPanel>
      )}
    </>
  )
})

NodeDetailsPanel.displayName = 'NodeDetailsPanel'
