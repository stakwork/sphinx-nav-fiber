import { memo, useMemo } from 'react'
import { Vector3 } from 'three'
import { Transcript } from '~/components/App/SideBar/Transcript'
import { View } from '~/components/App/SideBar/View'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { HtmlPanel } from '../Cubes/Cube/components/HtmlPanel'
import { NodeControls } from './NodeControls'

export const NodeDetailsPanel = memo(() => {
  const selectedNode = useSelectedNode()
  const data = useDataStore((s) => s.data)
  const selectedTimestamp = useDataStore((s) => s.selectedTimestamp)
  const transcriptIsOpen = useAppStore((s) => s.transcriptIsOpen)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)

  const position = useMemo(() => {
    const selected = data?.nodes.find((f) => f.ref_id === selectedNode?.ref_id)
    return new Vector3(selected?.x || 0, selected?.y || 0, selected?.z || 0)
  }, [selectedNode, data])

  return (
    <>
      <NodeControls />

      {!showSelectionGraph && (
        <>
          <HtmlPanel position={position} visible={!!selectedNode}>
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
      )}
    </>
  )
})

NodeDetailsPanel.displayName = 'NodeDetailsPanel'
