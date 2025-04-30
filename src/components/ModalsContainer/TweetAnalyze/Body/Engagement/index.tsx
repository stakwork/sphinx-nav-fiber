import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import MaterialTable from '@mui/material/Table'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { CsvDownloadButton } from '~/components/common/CsvDownloader'
import { Flex } from '~/components/common/Flex'
import LinkIcon from '~/components/Icons/LinkIcon'
import { getEngagement, getFollowers } from '~/network/tweetAnalyze'
import { Node } from '~/types'
import { colors } from '~/utils'
import { Avatar, Engagement, EngagementBar, SORT_OPTIONS, SortBy, TweetLink, TweetTime, UserInfo, Username } from '..'

type Props = {
  sortBy: SortBy
  idsToAnalyze: string[]
}

export const EngagementTable = ({ sortBy, idsToAnalyze }: Props) => {
  const [tweetsByEngagement, setTweetsByEngagement] = useState<Node[]>([])
  const [tweetsByFollowers, setTweetsByFollowers] = useState<Node[]>([])
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
          idsToAnalyze.map((id) => (sortBy === 'followers' ? getEngagement(id) : getFollowers(id))),
        )

        const mainTweetsArray = []
        const mergedTweetsByImpressionCount: Node[] = []
        const mergedTweetsByFollowers: Node[] = []

        responses.forEach((response, responseIndex) => {
          const main = response.nodes.find((node) => node.ref_id === idsToAnalyze[responseIndex])

          if (main) {
            mainTweetsArray.push(main)
          }

          if (sortBy === SORT_OPTIONS.ENGAGEMENT.value) {
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
                      followers: relatedUser.properties?.followers,
                      image_url: relatedUser.properties?.image_url,
                      impression_percentage: (
                        (Number(tweet.properties?.impression_count) / Number(main?.properties?.impression_count || 1)) *
                        100
                      ).toFixed(2),
                    },
                  }
                }

                return tweet
              })

            const tweetsByImpressionCount = [...tweetsWithUserInfo]
              .sort((a, b) => {
                const aEngagement = Number(a.properties?.impression_percentage) || 0
                const bEngagement = Number(b.properties?.impression_percentage) || 0

                return bEngagement - aEngagement
              })
              .slice(0, 20)

            if (tweetsByImpressionCount) {
              mergedTweetsByImpressionCount.push(...(tweetsByImpressionCount as unknown as Node[]))
            }
          }

          if (sortBy === SORT_OPTIONS.FOLLOWERS.value) {
            const userNodes = response.nodes
              .filter(
                (node) =>
                  node.node_type === 'User' &&
                  node.properties?.author_id !== main?.properties?.author &&
                  node.properties?.twitter_handle !== main?.properties?.twitter_handle,
              )
              .sort((a, b) => Number(b.properties?.followers) - Number(a.properties?.followers))
              .slice(0, 20)

            const tweetNodeIdsByUser = userNodes.map((i) => {
              const sourceEdge = response.edges.find((edge) => edge.source === i.ref_id)
              const targetEdge = response.edges.find((edge) => edge.target === i.ref_id)

              if (sourceEdge) {
                return sourceEdge.target
              }

              if (targetEdge) {
                return targetEdge.source
              }

              return null
            })

            const tweetsByUserCount = tweetNodeIdsByUser
              .map((id, index) => {
                if (!id) {
                  return null
                }

                const followersCount = userNodes[index]?.properties?.followers || 0
                const tweetHandle = userNodes[index]?.properties?.twitter_handle || ''
                const imageUrl = userNodes[index]?.properties?.image_url || ''
                const tweetNode = response.nodes.find((node) => node.ref_id === id)

                return {
                  ...tweetNode,
                  properties: {
                    ...(tweetNode?.properties || {}),
                    followers: followersCount,
                    twitter_handle: tweetHandle,
                    image_url: imageUrl,
                  },
                }
              })
              .filter((i) => i !== null)

            if (tweetsByUserCount) {
              mergedTweetsByFollowers.push(...(tweetsByUserCount as unknown as Node[]))
            }
          }
        })

        setTweetsByEngagement(
          mergedTweetsByImpressionCount
            .sort((a, b) => Number(b.properties?.impression_percentage) - Number(a.properties?.impression_percentage))
            .slice(0, 20),
        )

        setTweetsByFollowers(
          mergedTweetsByFollowers
            .sort((a, b) => Number(b.properties?.followers) - Number(a.properties?.followers))
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

  const tweetsToRender = sortBy === SORT_OPTIONS.ENGAGEMENT.value ? tweetsByEngagement : tweetsByFollowers

  if (error) {
    return <div style={{ padding: 24, color: '#FF4D4F' }}>{error}</div>
  }

  if (!tweetsByEngagement.length && !tweetsByFollowers.length) {
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

  const tweetsToDownload =
    sortBy === SORT_OPTIONS.ENGAGEMENT.value
      ? tweetsToRender.map((tweet) => ({
          'User profile': tweet.properties?.twitter_handle ? tweet.properties?.twitter_handle : '',
          Date: tweet.properties?.date ? moment.unix(tweet.properties.date).format('YYYY-MM-DD') : '',
          Tweet: tweet.properties?.text || '',
          Engagement: tweet.properties?.impression_percentage || '',
          'Impression count': tweet.properties?.impression_count || '',
          'Tweet ID': tweet.properties?.tweet_id || '',
        }))
      : tweetsToRender.map((tweet) => ({
          'User profile': tweet.properties?.twitter_handle ? tweet.properties?.twitter_handle : '',
          Date: tweet.properties?.date ? moment.unix(tweet.properties.date).format('YYYY-MM-DD') : '',
          Tweet: tweet.properties?.text || '',
          Followers: tweet.properties?.followers || '',
          'Tweet ID': tweet.properties?.tweet_id || '',
        }))

  return (
    <TableContainer component={Paper}>
      <MaterialTable aria-label="a dense table" size="small" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Rank</TableCell>
            <TableCell align="left">User Profile</TableCell>
            <TableCell align="left">Tweet</TableCell>
            {sortBy === SORT_OPTIONS.ENGAGEMENT.value && <TableCell align="left">Engagement</TableCell>}
            <TableCell align="left">Followers</TableCell>
            <TableCell align="left">
              <CsvDownloadButton data={tweetsToDownload} filename={`${sortBy}-${moment().format('YYYY-MM-DD')}.csv`} />
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
              {sortBy === SORT_OPTIONS.ENGAGEMENT.value && (
                <>
                  <TableCell>
                    {tweet.properties?.impression_percentage} %
                    {tweet.properties?.impression_count !== undefined &&
                      Boolean(tweet.properties?.impression_count) && (
                        <Engagement>
                          <EngagementBar percentage={Number(tweet.properties?.impression_percentage)} />
                        </Engagement>
                      )}
                  </TableCell>
                  <TableCell align="right">{Number(tweet.properties?.followers).toLocaleString()}</TableCell>
                </>
              )}
              {sortBy === SORT_OPTIONS.FOLLOWERS.value && (
                <TableCell align="right">{Number(tweet.properties?.followers).toLocaleString()}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  )
}
