import { memo, useMemo } from 'react'
import { Vector3 } from 'three'
import { Transcript } from '~/components/App/SideBar/Transcript'
import { View } from '~/components/App/SideBar/View'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { HtmlPanel } from '../Cubes/Cube/components/HtmlPanel'

export const NodeDetailsPanel = memo(() => {
  const selectedNode = useSelectedNode()
  const selectedTimestamp = useDataStore((s) => s.selectedTimestamp)
  const transcriptIsOpen = useAppStore((s) => s.transcriptIsOpen)
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)

  const position = useMemo(
    () => new Vector3(selectedNode?.x || 0, selectedNode?.y || 0, selectedNode?.z || 0),
    [selectedNode],
  )

  return (
    <>
      <HtmlPanel position={position} visible={!!selectedNode} onClose={() => setSelectedNode(null)}>
        <View isSelectedView />
      </HtmlPanel>

      <HtmlPanel
        intensity={2}
        position={position}
        speed={4}
        visible={transcriptIsOpen && !!selectedNode}
        withTranscript
      >
        <Flex p={20}>
          <Transcript node={selectedTimestamp || selectedNode} />
        </Flex>
      </HtmlPanel>
    </>
  )
})

NodeDetailsPanel.displayName = 'NodeDetailsPanel'
