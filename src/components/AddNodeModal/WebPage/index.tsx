import { Flex } from '~/components/common/Flex'
import { TextInput } from '../TextInput'
import { requiredRule } from '../index'

const message = `Submit a valid webpage url. If you find a webpage with great text content you’d like to add to the graph, use this option (e.g. A news article, a wiki page, etc). This is NOT for audio or video content.`

const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,10}(?:\/[^\s]*)?$/

export const WebPage = () => (
  <Flex>
    <TextInput
      id="tweet-id"
      label="Web page url"
      message={message}
      name="web_page"
      placeholder="Paste your url here..."
      rules={{
        ...requiredRule,
        pattern: {
          message: 'You must enter a valid webpage url',
          value: urlRegex,
        },
      }}
    />
  </Flex>
)
