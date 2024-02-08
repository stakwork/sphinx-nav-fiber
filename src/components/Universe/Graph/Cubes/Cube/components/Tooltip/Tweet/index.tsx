import { FC } from 'react'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'

type Props = {
  twitterHandle?: string
}

export const TwitData: FC<Props> = ({ twitterHandle }) => (
  <>
    <Flex direction="row">
      <Flex align="flex-start" pb={12}>
        <Text>Tweet by @{twitterHandle}</Text>
      </Flex>
    </Flex>
  </>
)
