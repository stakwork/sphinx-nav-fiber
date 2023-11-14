import styled from 'styled-components'
import { GraphViewControl } from '~/components/App/ActionsToolbar/GraphViewControl'
import { Button } from '~/components/Button'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'

export const Appearance = () => (
  <Wrapper direction="column">
    <StyledText>Default graph view:</StyledText>
    <GraphViewControl />
    <Flex mt={308}>
      <Button kind="big">Save changes</Button>
    </Flex>
  </Wrapper>
)

const Wrapper = styled(Flex)`
  display: flex;
  gap: 10px;
  padding: 36px;
`

const StyledText = styled(Text)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`
