import { Button } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'

type Props = {
  nodeType?: string
  onclose: () => void
  selectedNodeType: string
}

export const CreateConfirmation: FC<Props> = ({ nodeType, onclose, selectedNodeType }) => (
  <Flex>
    <Flex mb={20}>
      <StyledText>Confirm Type Change</StyledText>
    </Flex>
    <Flex mb={25}>
      <StyledText>From: {selectedNodeType}</StyledText>
    </Flex>
    <Flex mb={25}>
      <StyledText>To: {nodeType}</StyledText>
    </Flex>
    <Flex direction="row">
      <Flex grow={1}>
        <Button color="secondary" onClick={onclose} size="large" variant="contained">
          Cancel
        </Button>
      </Flex>
      <Flex grow={1} ml={20}>
        <Button color="secondary" size="large" type="submit" variant="contained">
          Confirm
        </Button>
      </Flex>
    </Flex>
  </Flex>
)

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`
