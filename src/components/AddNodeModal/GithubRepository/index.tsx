import { Flex } from '~/components/common/Flex'
import { TextInput } from '../../common/TextInput'
import { requiredRule } from '../index'

const message = 'Submit github repository'

export const GithubRepository = () => (
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
