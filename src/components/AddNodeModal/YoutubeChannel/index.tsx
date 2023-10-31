import { Flex } from '~/components/common/Flex'
import { TextInput } from '../../common/TextInput'
import { requiredRule } from '../index'

const message = 'Submit youtube channel'

export const YoutubeChannel = () => (
  <Flex>
    <TextInput
      id="cy-youtube-channel-id"
      label="Youtube channel"
      maxLength={50}
      message={message}
      name="source"
      placeholder="Type youtube channel here..."
      rules={{
        ...requiredRule,
      }}
    />
  </Flex>
)
