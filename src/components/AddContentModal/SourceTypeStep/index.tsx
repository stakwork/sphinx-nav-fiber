import { Button } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { RSS, TWITTER_HANDLE, YOUTUBE_CHANNEL } from '~/constants'
import { colors } from '~/utils'
import { extractNameFromLink } from '../utils'

type Props = {
  type: string
  value: string
  onNextStep: () => void
  onPrevStep: () => void
}

const CONTENT_TYPE_MAPPING: Record<string, { [k: string]: string }> = {
  [TWITTER_HANDLE]: {
    label: 'Twitter handle',
    img: 'twitter_default.svg',
  },
  [YOUTUBE_CHANNEL]: {
    label: 'Youtube channel',
    img: 'youtube_default.svg',
  },
  [RSS]: {
    label: 'RSS Feed',
    img: 'rss_feed.svg',
  },
}

export const SourceTypeStep: FC<Props> = ({ onNextStep, onPrevStep, type, value }) => (
  <Flex>
    <Flex align="center" direction="row" justify="space-between" mb={20}>
      <Flex align="center" direction="row">
        <StyledHeaderText>Source Type</StyledHeaderText>
      </Flex>
    </Flex>
    <Flex mb={20}>
      <TextWrapper>
        <img alt={CONTENT_TYPE_MAPPING[type].label} className="badge__img" src={CONTENT_TYPE_MAPPING[type].img} />
        <StyledText>{CONTENT_TYPE_MAPPING[type].label}</StyledText>
      </TextWrapper>
      <StyledLink>{extractNameFromLink(value, type) ?? value}</StyledLink>
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

const StyledLink = styled(Flex)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 15px;
  color: ${colors.GRAY3};
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`

const StyledHeaderText = styled(Text)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`

const StyledText = styled(Text)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${colors.white};
`

const TextWrapper = styled(Flex)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
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
