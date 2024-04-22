import styled from 'styled-components'
import { imageUrlRegex, validateImageInputType } from '~/components/ModalsContainer/EditNodeNameModal/utils'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { colors } from '~/utils'

export const TitleEditor = () => (
  <Flex>
    <Flex align="center" direction="row" justify="space-between" mb={18}>
      <Flex align="center" direction="row">
        <StyledText>Edit Node</StyledText>
      </Flex>
    </Flex>

    <Flex mb={18}>
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
        name="name"
        placeholder="Node name"
        rules={{
          ...requiredRule,
        }}
      />
    </Flex>

    <Flex mb={36}>
      <LabelText
        style={{
          marginBottom: 8,
        }}
      >
        image_url
      </LabelText>
      <TextInput
        id="cy-image_url"
        maxLength={500}
        name="image_url"
        placeholder="image_url"
        rules={{
          pattern: {
            message: 'Please enter a valid URL',
            value: imageUrlRegex,
          },
          validate: {
            source: validateImageInputType,
          },
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
