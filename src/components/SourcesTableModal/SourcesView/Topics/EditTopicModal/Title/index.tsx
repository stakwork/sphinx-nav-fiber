import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'

type Props = {
  value?: string
}

export const TitleEditor: FC<Props> = () => (
  <Flex>
    <Flex align="center" direction="row" justify="space-between" mb={18}>
      <Flex align="center" direction="row">
        <StyledText>Edit topic</StyledText>
      </Flex>
    </Flex>

    <Flex mb={12}>
      <TextInput
        id="cy-topic"
        maxLength={50}
        name="name"
        placeholder="Add your topic"
        rules={{
          ...requiredRule,
        }}
      />
    </Flex>
  </Flex>
)

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`
