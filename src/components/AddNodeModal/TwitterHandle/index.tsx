import { FC, ChangeEvent } from 'react'
import { Flex } from '~/components/common/Flex'
import { requiredRule } from '../index'
import { TextInput } from '../TextInput'

type Props = {
  setValue?: (field: string, value: string) => void
}

const TwitterHandle: FC<Props> = ({ setValue }) => (
    <Flex>
      <TextInput
        id="twitter-handle"
        label="Twitter Handle"
        mask="@***********************************"
        maxLength={16}
        message="Paste a valid twitter handle."
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
