import { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { Tweet } from 'react-twitter-widgets'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'

export const TwitData = () => {
  const selectedNode = useSelectedNode()
  const [loading, setLoading] = useState(true)

  const twitId: string = selectedNode?.tweet_id || ''

  return (
    <Flex direction="column" px={24} py={16}>
      <Flex align="center" direction="row" justify="flex-start" p={10}>
        <Text color="primaryText1">{selectedNode?.label}</Text>
      </Flex>
      {loading && (
        <Flex align="center" direction="row" justify="center" p={10}>
          <ClipLoader color={colors.white} />
        </Flex>
      )}
      {twitId && (
        <Tweet
          onLoad={() => setLoading(false)}
          options={{ theme: 'dark' }}
          renderError={() => <Error />}
          tweetId={twitId}
        />
      )}
    </Flex>
  )
}

const Error = () => <Flex>Error occurred</Flex>
