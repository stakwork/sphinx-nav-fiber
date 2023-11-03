import { Button } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { LINK, requiredRule } from '~/constants'
import { twitterOrYoutubeRegexOrMp3 } from './utils'

type Props = {
  type: string
  onNextStep: () => void
  value?: string
}

export const SourceStep: FC<Props> = ({ type, onNextStep, value }) => (
  <Flex>
    <Flex align="center" direction="row" justify="space-between" mb={18}>
      <Flex align="center" direction="row">
        <StyledText>Add Content</StyledText>
      </Flex>
    </Flex>

    <Flex mb={12}>
      <TextInput
        id="cy-youtube-channel-id"
        maxLength={250}
        name="source"
        placeholder="Paste your url here..."
        rules={{
          ...requiredRule,
          ...(type === LINK
            ? {
                pattern: {
                  message: 'You must enter a valid YouTube, Twitter Space or mp3 link.',
                  value: twitterOrYoutubeRegexOrMp3,
                },
              }
            : {}),
        }}
      />
    </Flex>
    <Flex>
      <Button color="secondary" disabled={!value} onClick={onNextStep} size="large" variant="contained">
        Next
      </Button>
    </Flex>
  </Flex>
)

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`
