import { FC } from 'react'
import { Flex } from '~/components/common/Flex'
import { Location } from '../Location'
import { TextInput } from '../TextInput'
import { requiredRule } from '../index'

type Props = {
  latitude?: string
  longitude?: string
  setValue?: (field: string, value: boolean) => void
}

export const TwitId: FC<Props> = ({ setValue, latitude, longitude }) => (
  <Flex>
    <TextInput
      id="tweet-id"
      label="Tweet id"
      message="Paste a valid tweet url or tweet id."
      name="tweet"
      placeholder="Paste your link or id here..."
      rules={{
        ...requiredRule,
      }}
    />

    <Location latitude={latitude} longitude={longitude} setValue={setValue} />
  </Flex>
)
