import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { GraphViewControl } from '~/components/common/GraphViewControl'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { useUserStore } from '~/stores/useUserStore'
import { CameraRecenterControl } from './CameraRecenterControl'
import { GraphClear } from './GraphClear'
import { PlayerControl } from './PlayerControl'

export const ActionsToolbar = () => {
  const selectedNode = useSelectedNode()
  const isLoading = useDataStore((s) => s.isFetching)
  const universeQuestionIsOpen = useAppStore((s) => s.universeQuestionIsOpen)
  const { isAdmin } = useUserStore((s) => s)

  return (
    <Wrapper align="flex-end" id="actions-toolbar">
      <ButtonWrapper>
        {!isLoading && !universeQuestionIsOpen && isAdmin && <GraphClear />}
        {!isLoading && !universeQuestionIsOpen && <CameraRecenterControl />}
      </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
