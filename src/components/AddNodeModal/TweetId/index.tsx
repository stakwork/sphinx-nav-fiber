import { Flex } from '~/components/common/Flex'
import { requiredRule } from '../index'
import { TextInput } from '../TextInput'

const TwitId = () => (
  <Flex>
    <TextInput
      id="tweet-id"
      label="Tweet id"
      message="Paste a valid tweet id."
      name="source"
      placeholder="Paste your id here..."
      rules={{
        ...requiredRule,
      }}
    />
  </Flex>
)

export default TwitId
