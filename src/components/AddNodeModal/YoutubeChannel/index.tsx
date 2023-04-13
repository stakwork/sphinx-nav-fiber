import { Flex } from '~/components/common/Flex'
import { requiredRule } from '../index'
import { TextInput } from '../TextInput'

const message = 'Submit youtube channel'

const YoutubeChannel = () => (
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

export default YoutubeChannel;
