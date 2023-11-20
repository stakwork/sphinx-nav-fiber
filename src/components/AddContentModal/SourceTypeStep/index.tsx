import { Button } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TWITTER_HANDLE, YOUTUBE_CHANNEL } from '~/constants'
import { colors } from '~/utils'
import { extractNameFromLink } from '../utils'

type Props = {
  type: string
  value: string
  onNextStep: () => void
  onPrevStep: () => void
}

const CONTENT_TYPE_MAPPING: Record<string, string> = {
  [TWITTER_HANDLE]: 'Twitter handle',
  [YOUTUBE_CHANNEL]: 'Youtube channel',
}

export const SourceTypeStep: FC<Props> = ({ onNextStep, onPrevStep, type, value }) => (
  <Flex>
    <Flex align="center" direction="row" justify="space-between" mb={20}>
      <Flex align="center" direction="row">
        <StyledText>Source Type</StyledText>
      </Flex>
    </Flex>

    <Flex direction="row" mb={20}>
      <StyledText>
        {CONTENT_TYPE_MAPPING[type]}: @{extractNameFromLink(value, type) ?? value}
      </StyledText>
    </Flex>
    <Flex direction="row">
      <Flex grow={1}>
        <StyledButton color="secondary" disabled={false} onClick={() => onPrevStep()} size="large" variant="contained">
          Cancel
        </StyledButton>
      </Flex>
      <Flex grow={1} ml={20}>
        <Button color="secondary" onClick={() => onNextStep()} size="large" variant="contained">
          Next
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

const StyledButton = styled(Button)`
  && {
    background: ${colors.white};
    color: ${colors.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${colors.white};
      color: ${colors.BG2};
    }
  }
`
