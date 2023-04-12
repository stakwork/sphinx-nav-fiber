import { Flex } from '~/components/common/Flex'
import { requiredRule } from '../index'
import { TextInput } from '../TextInput'

const message = 'Submit github repository'

const GithubRepository = () => (
  <Flex>
    <TextInput
      id="cy-github-repository-id"
      label="Github repository"
      message={message}
      name="source"
      placeholder="Type github repository here..."
      rules={{
        ...requiredRule,
      }}
    />
  </Flex>
)

export default GithubRepository
