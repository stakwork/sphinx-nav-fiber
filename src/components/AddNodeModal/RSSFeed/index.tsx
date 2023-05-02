import { Flex } from '~/components/common/Flex'
import { requiredRule } from '../index'
import { TextInput } from '../TextInput'

const message = 'Submit RSS feed'

const RSSFeed = () => (
  <Flex>
    <TextInput
      id="cy-rss-feed-id"
      label="RSS feed"
      maxLength={50}
      message={message}
      name="source"
      placeholder="Type RSS link here..."
      rules={{
        ...requiredRule,
      }}
    />
  </Flex>
)

export default RSSFeed;
