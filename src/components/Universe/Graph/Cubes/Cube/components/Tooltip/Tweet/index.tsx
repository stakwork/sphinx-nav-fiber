import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { Tweet } from 'react-twitter-widgets'
import { ClipLoader } from 'react-spinners'
import { useState, FC } from 'react'
import { colors } from '~/utils/colors'

type Props = {
  twitterHandle?: string;
  tweetId?: string;
}

export const TwitData: FC<Props> = ({ twitterHandle, tweetId }) => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Flex direction="row">
        <Flex align="flex-start" pb={12}>
          <Text>Tweet by @{twitterHandle}</Text>
        </Flex>
      </Flex>
      <Flex direction="column" py={16}>
        {loading && (
          <Flex align="center" direction="row" justify="center" p={10}>
            <ClipLoader color={colors.white} />
          </Flex>
        )}
        {tweetId && <Tweet onLoad={() => setLoading(false)} renderError={() => <Error />} tweetId={tweetId} />}
      </Flex>
    </>
  )
}

const Error = () => <Flex>Error occurred</Flex>
