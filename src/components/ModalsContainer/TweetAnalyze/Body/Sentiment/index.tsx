import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import MaterialTable from '@mui/material/Table'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { CsvDownloadButton } from '~/components/common/CsvDownloader'
import { Flex } from '~/components/common/Flex'
import LinkIcon from '~/components/Icons/LinkIcon'
import { getPathway } from '~/network/fetchSourcesData'
import { Node } from '~/types'
import { colors } from '~/utils'
import { Avatar, SortBy, TweetLink, TweetTime, UserInfo, Username } from '..'

type Props = {
  sortBy: SortBy
  idsToAnalyze: string[]
}

export const SentimentTable = ({ sortBy, idsToAnalyze }: Props) => {
  const [tweets, setTweets] = useState<Node[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchTweets = async () => {
      if (idsToAnalyze.length === 0) {
        return
      }

      setLoading(true)

      try {
        const responses = await Promise.all(
          idsToAnalyze.map((id) =>
            getPathway(id, [], ['HAS_REPLY>', 'HAS_QUOTE>', 'THREAD_NEXT>', '<POSTED'], 'sentiment', true, 0, 10, 800),
          ),
        )

        const mainTweetsArray = []
        const mergedTweetsByImpressionCount: Node[] = []

        responses.forEach((response, responseIndex) => {
          const main = response.nodes.find((node) => node.ref_id === idsToAnalyze[responseIndex])

          if (main) {
            mainTweetsArray.push(main)
          }

          const tweetsWithUserInfo = response.nodes
            .filter(
              (node) =>
                node.node_type === 'Tweet' &&
                node.properties?.author !== main?.properties?.author &&
                node.properties?.twitter_handle !== main?.properties?.twitter_handle,
            )
            .map((tweet) => {
              const relatedUser = response.nodes.find(
                (node) => node.node_type === 'User' && node.properties?.author_id === tweet.properties?.author,
              )

              if (relatedUser) {
                return {
                  ...tweet,
                  properties: {
                    ...tweet.properties,
                    twitter_handle: relatedUser.properties?.twitter_handle,
                    image_url: relatedUser.properties?.image_url,
                    followers: relatedUser.properties?.followers,
                  },
                }
              }

              return tweet
            })

          const tweetsByImpressionCount = [...tweetsWithUserInfo]
            .sort((a, b) => {
              const aEngagement = Number(a.properties?.sentiment) || 0
              const bEngagement = Number(b.properties?.sentiment) || 0

              return bEngagement - aEngagement
            })
            .slice(0, 20)

          if (tweetsByImpressionCount) {
            mergedTweetsByImpressionCount.push(...(tweetsByImpressionCount as unknown as Node[]))
          }
        })

        setTweets(
          mergedTweetsByImpressionCount
            .sort((a, b) => Number(b.properties?.sentiment) - Number(a.properties?.sentiment))
            .slice(0, 20),
        )

        setLoading(false)
      } catch (err) {
        console.error('Error fetching tweets:', err)
        setLoading(false)
        setError('Error fetching tweets')
      } finally {
        setLoading(false)
      }
    }

    fetchTweets()
  }, [sortBy, idsToAnalyze])

  const tweetsToRender = tweets

  if (error) {
    return <div style={{ padding: 24, color: '#FF4D4F' }}>{error}</div>
  }

  if (!tweets.length) {
    return loading ? (
      <Flex align="center" grow={1} justify="center">
        <ClipLoader color={colors.white} />
        <div style={{ padding: 24, fontSize: 16, textAlign: 'center', color: colors.white }}>
          Loading engagement data...
        </div>
      </Flex>
    ) : (
      <div style={{ padding: 24, textAlign: 'center' }}>No engagement data available</div>
    )
  }

  const dataToDownload = tweetsToRender.map((tweet) => ({
    'User profile': tweet.properties?.twitter_handle ? tweet.properties?.twitter_handle : '',
    Tweet: tweet.properties?.text || '',
    Sentiment: tweet.properties?.sentiment || '',
    Followers: tweet.properties?.followers || '',
  }))

  return (
    <TableContainer component={Paper}>
      <MaterialTable aria-label="a dense table" size="small" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Rank</TableCell>
            <TableCell align="left">User Profile</TableCell>
            <TableCell align="left">Tweet</TableCell>
            <TableCell align="left">Sentiment</TableCell>
            <TableCell align="left">Followers</TableCell>
            <TableCell align="left">
              <CsvDownloadButton data={dataToDownload} filename={`${sortBy}-${moment().format('YYYY-MM-DD')}.csv`} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tweetsToRender.map((tweet, index) => (
            <TableRow key={tweet.ref_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Avatar imageUrl={tweet.properties?.image_url} />
                <UserInfo>
                  {tweet?.properties?.twitter_handle && <Username>{tweet.properties.twitter_handle}</Username>}
                </UserInfo>
              </TableCell>
              <TableCell>
                {tweet.properties?.text || ''}
                <Flex align="center" direction="row" justify="flex-start" mt={16}>
                  {tweet?.properties?.date && (
                    <TweetTime aria-label="Time since tweet">{moment.unix(tweet.properties.date).fromNow()}</TweetTime>
                  )}
                  <TweetLink
                    aria-label="View tweet on Twitter"
                    href={`https://twitter.com/${tweet?.properties?.twitter_handle}/status/${tweet?.properties?.tweet_id}?open=system`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkIcon />
                  </TweetLink>
                </Flex>
              </TableCell>

              <TableCell align="right">{tweet.properties?.sentiment}</TableCell>
              <TableCell align="right">{tweet.properties?.followers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  )
}
