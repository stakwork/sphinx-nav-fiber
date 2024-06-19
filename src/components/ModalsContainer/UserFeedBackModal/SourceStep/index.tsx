import { Button } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'

type Props = {
  allowNextStep?: boolean
}

export const SourceStep: FC<Props> = ({ allowNextStep }) => (
  <Flex p={12}>
    <Flex align="center" direction="row" justify="space-between" mb={25}>
      <Flex align="center" direction="row">
        <StyledText>Feedback</StyledText>
      </Flex>
    </Flex>

    <Flex mb={30}>
      <TextInput
        id="feedback-message"
        isTextArea
        maxLength={500}
        name="message"
        placeholder="Leave your feedback here ..."
        rules={requiredRule}
      />
    </Flex>
    <Flex>
      <Button
        color="secondary"
        data-testid="submit-feedback-btn"
        disabled={!allowNextStep}
        size="large"
        type="submit"
        variant="contained"
      >
        Submit
      </Button>
    </Flex>
  </Flex>
)

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`
