import { FC } from 'react'
import { Flex } from '~/components/common/Flex'
import { TextInput } from '../TextInput'
import { requiredRule } from '../index'

type Props = {
  setValue?: (field: string, value: string) => void
}

export const TwitterHandle: FC<Props> = () => (
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
