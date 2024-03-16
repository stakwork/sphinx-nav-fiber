import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { colors } from '~/utils'

type Props = {
  value?: string
}

export const TitleEditor: FC<Props> = () => (
  <Flex>
    <Flex align="center" direction="row" justify="space-between" mb={18}>
      <Flex align="center" direction="row">
        <StyledText>Edit Node</StyledText>
      </Flex>
    </Flex>

    <Flex mb={36}>
      <LabelText
        style={{
          marginBottom: 8,
        }}
      >
        Node Name
      </LabelText>
      <TextInput
        id="cy-topic"
        maxLength={50}
        name="topic"
        placeholder="Node name"
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

const LabelText = styled(Text)`
  color: ${colors.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`
