import { Flex } from '~/components/common/Flex'
import { requiredRule } from '../index'
import { TextInput } from '../TextInput'

const TwitterHandle = () => (
  <Flex>
    <TextInput
      id="twitter-handle"
      label="Tweet Handle"
      mask="@***********************************"
      message="Paste a valid tweet handle."
      name="source"
      placeholder="Paste your id here..."
      rules={{
        ...requiredRule,
      }}
      showMask={false}
    />
  </Flex>
)

export default TwitterHandle
