import styled from 'styled-components'
import { GraphViewControl } from '~/components/App/ActionsToolbar/GraphViewControl'
import { Flex } from '~/components/common/Flex'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { CameraRecenterControl } from './CameraRecenterControl'
import { PlayerControl } from './PlayerControl'

export const ActionsToolbar = () => {
  const selectedNode = useSelectedNode()
  const isLoading = useDataStore((s) => s.isFetching)

  return (
    <Wrapper align="flex-end" id="actions-toolbar">
      {!isLoading && <CameraRecenterControl />}
      {!isLoading && <GraphViewControl />}
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
