import { memo, useMemo } from 'react'
import { MdClose } from 'react-icons/md'
import styled from 'styled-components'
import { Vector3 } from 'three'
import { Transcript } from '~/components/App/SideBar/Transcript'
import { View } from '~/components/App/SideBar/View'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { HtmlPanel } from '../Cubes/Cube/components/HtmlPanel'
import { NodeControls } from './NodeControls'
import { Panel } from './Panel'

export const NodeDetailsPanel = memo(() => {
  const selectedNode = useSelectedNode()
  const data = useDataStore((s) => s.data)

  const selectedTimestamp = useDataStore((s) => s.selectedTimestamp)
  const transcriptIsOpen = useAppStore((s) => s.transcriptIsOpen)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const hideNodeDetails = useDataStore((s) => s.hideNodeDetails)
  const setHideNodeDetails = useDataStore((s) => s.setHideNodeDetails)

  const position = useMemo(() => {
    const selected = data?.nodes.find((f) => f.ref_id === selectedNode?.ref_id)

    return new Vector3(selected?.x || 0, selected?.y || 0, selected?.z || 0)
  }, [data?.nodes, selectedNode?.ref_id])

  return (
    <>
      <NodeControls />
      <Panel />

      {!showSelectionGraph && !hideNodeDetails && (
        <>
          <HtmlPanel position={position} visible={!!selectedNode}>
            <Closer onPointerDown={() => setHideNodeDetails(true)}>
              <MdClose size={25} />
            </Closer>
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

const Closer = styled.div`
  position: fixed;
  margin: 6px;
  width: 34px;
  height: 34px;
  border-radius: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000bb;
  color: #ffffff;
  border-radius: 100%;
  font-size: 20px;
  cursor: pointer;
`
