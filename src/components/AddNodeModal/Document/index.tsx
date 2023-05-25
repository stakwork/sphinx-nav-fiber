import { Flex } from '~/components/common/Flex'
import { TextArea } from '../TextArea'
import { requiredRule } from '../index'

const message = 'Submit peace of text'

export const Document = () => (
  <Flex>
    <TextArea
      id="cy-text-id"
      label="Text"
      maxLength={50}
      message={message}
      name="document"
      placeholder="Type your text here..."
      rules={{
        ...requiredRule,
      }}
    />
  </Flex>
)
