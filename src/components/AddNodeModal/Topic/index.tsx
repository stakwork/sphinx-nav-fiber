import { Flex } from '~/components/common/Flex'
import { requiredRule } from '../index'
import { TextInput } from '../TextInput'

const message =
  'Submit a topic that you would like to monitor (for example, “inflation”, “bitcoin”, etc). We will continuously fetch the latest content associated with your topic and add them to your graph.';

const Topic = () => (
  <Flex>
    <TextInput
      id="cy-topic-id"
      label="Topic"
      maxLength={50}
      message={message}
      name="source"
      placeholder="Type your topic here..."
      rules={{
        ...requiredRule,
      }}
    />
  </Flex>
)

export default Topic
