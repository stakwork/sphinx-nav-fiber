import { Button } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '..'

type Props = {
  onNextStep: () => void
  value?: string
}

export const SourceStep: FC<Props> = ({ onNextStep, value }) => (
  <Flex>
    <Flex align="center" direction="row" justify="space-between" mb={18}>
      <Flex align="center" direction="row">
        <StyledText>Add Source</StyledText>
      </Flex>
    </Flex>

    <Flex mb={12}>
      <TextInput
        id="cy-youtube-channel-id"
        maxLength={50}
        name="source"
        placeholder="Paste your url here..."
        rules={{
          ...requiredRule,
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
