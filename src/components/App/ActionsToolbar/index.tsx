import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useSelectedNode } from '~/stores/useDataStore'
import { CameraRecenterControl } from './CameraRecenterControl'
import { GraphViewControl } from './GraphViewControl'
import { PlayerControl } from './PlayerControl'

export const ActionsToolbar = () => {
  const selectedNode = useSelectedNode()

  return (
    <Wrapper align="flex-end" id="actions-toolbar">
      <CameraRecenterControl />
      <GraphViewControl />
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
