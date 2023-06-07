import { Flex } from '~/components/common/Flex'
import { TextInput } from '../TextInput'
import { requiredRule } from '../index'

export const TwitId = () => (
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
