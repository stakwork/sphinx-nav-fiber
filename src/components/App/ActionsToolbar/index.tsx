import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { GraphViewControl } from './GraphViewControl'

export const ActionsToolbar = () => (
  <Wrapper id="actions-toolbar">
    <GraphViewControl />
  </Wrapper>
)

const Wrapper = styled(Flex)`
  position: absolute;
  right: 20px;
  bottom: 50px;
`
