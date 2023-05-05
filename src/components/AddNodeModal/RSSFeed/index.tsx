import { Flex } from '~/components/common/Flex'
import { TextInput } from '../TextInput'
import { requiredRule } from '../index'

const message = 'Submit RSS feed'

export const RSSFeed = () => (
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
