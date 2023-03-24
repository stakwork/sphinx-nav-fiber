import { Flex } from '~/components/common/Flex'
import { requiredRule } from '../index'
import { TextInput } from '../TextInput'

const TwitId = () => (
  <Flex>
    <TextInput
      id="tweet-id"
      label="Tweet id"
      message="Paste a valid tweet url or tweet id."
      name="tweet"
      placeholder="Paste your link or id here..."
      rules={{
        ...requiredRule,
      }}
    />
  </Flex>
)

export default TwitId
