import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { CameraRecenterControl } from './CameraRecenterControl'
import { GraphViewControl } from '~/components/common/GraphViewControl'
import { PlayerControl } from './PlayerControl'

export const ActionsToolbar = () => {
  const selectedNode = useSelectedNode()
  const isLoading = useDataStore((s) => s.isFetching)
  const universeQuestionIsOpen = useAppStore((s) => s.universeQuestionIsOpen)

  return (
    <Wrapper align="flex-end" id="actions-toolbar">
      {!isLoading && !universeQuestionIsOpen && <CameraRecenterControl />}
      <Flex align="center" direction="row" mt={16}>
        {!isLoading && !universeQuestionIsOpen && <GraphViewControl />}
      </Flex>
      <PlayerControl key={selectedNode?.ref_id} />
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: all;
`
