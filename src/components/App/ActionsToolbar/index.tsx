import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useHasAiChatsResponseLoading } from '~/stores/useAiSummaryStore'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { CameraRecenterControl } from './CameraRecenterControl'
import { GraphViewControl } from './GraphViewControl'
import { PlayerControl } from './PlayerControl'
import { UniverseQuestionControl } from './UniverseQuestionControl'

export const ActionsToolbar = () => {
  const selectedNode = useSelectedNode()
  const isLoading = useDataStore((s) => s.isFetching)
  const universeQuestionIsOpen = useAppStore((s) => s.universeQuestionIsOpen)
  const chatInterfaceFeatureFlag = useFeatureFlagStore((s) => s.chatInterfaceFeatureFlag)
  const newQuestionInProgress = useHasAiChatsResponseLoading()

  return (
    <Wrapper align="flex-end" id="actions-toolbar">
      {!isLoading && !universeQuestionIsOpen && <CameraRecenterControl />}
      <Flex align="center" direction="row" mt={16}>
        {!newQuestionInProgress && !isLoading && chatInterfaceFeatureFlag && !universeQuestionIsOpen && (
          <UniverseQuestionControl />
        )}
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
