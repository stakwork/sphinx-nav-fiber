import Paper from '@mui/material/Paper'
import MaterialTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import moment from 'moment'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import LinkIcon from '~/components/Icons/LinkIcon'
import { getPathway } from '~/network/fetchSourcesData'
import { Node } from '~/types'
import { colors } from '~/utils'

const SortButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? colors.primaryBlue : 'transparent')};
  border: 1px solid ${({ active }) => (active ? colors.primaryGreen : colors.GRAY9)};
  color: ${({ active }) => (active ? colors.white : colors.GRAY6)};
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    border-color: ${({ active }) => (active ? colors.primaryGreen : colors.GRAY6)};
  }
`

const Avatar = styled.div<{ imageUrl?: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${colors.BG1};
  ${({ imageUrl }) => imageUrl && `background-image: url(${imageUrl});`}
  background-size: cover;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const Username = styled.span`
  font-size: 14px;
`

const TweetTime = styled.div`
  color: ${colors.GRAY7};
  font-size: 12px;
`

const TweetLink = styled.a`
  color: ${colors.SOURCE_TABLE_LINK};
  cursor: pointer;
  font-size: 16px;
  height: 16px;
  margin-left: 8px;
`

const Engagement = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const EngagementBar = styled.div<{ percentage: number }>`
  width: 100px;
  height: 4px;
  background-color: ${colors.BG1};
  border-radius: 2px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => props.percentage}%;
    background-color: ${colors.primaryGreen};
    border-radius: 2px;
  }
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${colors.white};
`

const ENGAGEMENT = 'impression_count'
const FOLLOWERS = 'followers'

type Props = {
  tweetId: string
}

export const Body = ({ tweetId }: Props) => {
  const [sortBy, setSortBy] = useState<'impression_count' | 'followers'>(ENGAGEMENT)
  const [tweetsByEngagement, setTweetsByEngagement] = useState<Node[]>([])
  const [tweetsByFollowers, setTweetsByFollowers] = useState<Node[]>([])
  const [mainTweet, setMainTweets] = useState<Node[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const { tweetId: tweetIds } = useParams()

  const idsToAnalyze = useMemo(() => {
    const ids = tweetIds?.split('&') || []

    return tweetId === 'summary' ? ids : ids.filter((id) => id === tweetId)
  }, [tweetIds, tweetId])

  useEffect(() => {
    const fetchTweets = async () => {
      if (idsToAnalyze.length === 0) {
        return
      }

      setLoading(true)

      try {
        const responses = await Promise.all(
          idsToAnalyze.map((id) =>
            getPathway(id, [], ['HAS_REPLY>', 'HAS_QUOTE>', 'THREAD_NEXT>', '<POSTED'], sortBy, true, 0, 10, 800),
          ),
        )

        const allNodes = responses.flatMap((response) => response.nodes)
        const allEdges = responses.flatMap((response) => response.edges)

        const mainTweets = idsToAnalyze
          .map((id) => allNodes.find((node) => node.ref_id === id))
          .filter((i) => i !== undefined)

        if (mainTweets.length) {
          setMainTweets(mainTweets)
        }

        if (sortBy === ENGAGEMENT) {
          const tweetsWithUserInfo = allNodes
            .filter(
              (node) =>
                node.node_type === 'Tweet' &&
                !mainTweets.some(
                  (main) =>
                    node.properties?.author === main.properties?.author &&
                    node.properties?.twitter_handle === main.properties?.twitter_handle,
                ),
            )
            .map((tweet) => {
              const relatedUser = allNodes.find(
                (node) => node.node_type === 'User' && node.properties?.author_id === tweet.properties?.author,
              )

              return relatedUser
                ? {
                    ...tweet,
                    properties: {
                      ...tweet.properties,
                      twitter_handle: relatedUser.properties?.twitter_handle,
                      image_url: relatedUser.properties?.image_url,
                    },
                  }
                : tweet
            })

          const tweetsByImpressionCount = tweetsWithUserInfo
            .sort((a, b) => Number(b.properties?.impression_count || 0) - Number(a.properties?.impression_count || 0))
            .slice(0, 20)

          setTweetsByEngagement(tweetsByImpressionCount)
        }

        if (sortBy === FOLLOWERS) {
          const userNodes = allNodes
            .filter(
              (node) =>
                node.node_type === 'User' &&
                !mainTweets.some((main) => main.properties?.author === node.properties?.author_id),
            )
            .sort((a, b) => Number(b.properties?.followers || 0) - Number(a.properties?.followers || 0))
            .slice(0, 20)

          const tweetNodeIdsByUser = userNodes
            .map((user) => {
              const sourceEdge = allEdges.find((edge) => edge.source === user.ref_id || edge.target === user.ref_id)
              let connectedNodeId = null

              if (sourceEdge) {
                connectedNodeId = sourceEdge.source === user.ref_id ? sourceEdge.target : sourceEdge.source
              }

              return connectedNodeId
            })
            .filter(Boolean)

          const tweetsByUserCount = tweetNodeIdsByUser
            .map((id, index) => {
              const userNode = userNodes[index]
              const tweetNode = allNodes.find((node) => node.ref_id === id)

              return tweetNode
                ? {
                    ...tweetNode,
                    properties: {
                      ...tweetNode.properties,
                      followers: userNode.properties?.followers,
                      twitter_handle: userNode.properties?.twitter_handle,
                      image_url: userNode.properties?.image_url,
                    },
                  }
                : null
            })
            .filter(Boolean) as Node[]

          setTweetsByFollowers(tweetsByUserCount)
        }

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

  const tweetsToRender = sortBy === ENGAGEMENT ? tweetsByEngagement : tweetsByFollowers

  return (
    <Wrapper>
      <Flex p={24}>
        <Title>Engagement Report</Title>
        <Flex direction="row">
          <SortButton active={sortBy === ENGAGEMENT} onClick={() => setSortBy(ENGAGEMENT)}>
            Total Engagement
          </SortButton>
          <SortButton active={sortBy === FOLLOWERS} onClick={() => setSortBy(FOLLOWERS)}>
            Follower Count
          </SortButton>
        </Flex>
      </Flex>
      {loading ? (
        <Flex align="center" grow={1} justify="center">
          <ClipLoader color={colors.white} />
          <div style={{ padding: 24, fontSize: 16, textAlign: 'center', color: colors.white }}>
            Loading engagement data...
          </div>
        </Flex>
      ) : (
        <TableContainer component={Paper}>
          <MaterialTable aria-label="a dense table" size="small" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Rank</TableCell>
                <TableCell align="left">User Profile</TableCell>
                <TableCell align="left">Tweet</TableCell>
                {sortBy === ENGAGEMENT && <TableCell align="left">Engagement</TableCell>}
                {sortBy === FOLLOWERS && <TableCell align="left">Followers</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {tweetsToRender.map((tweet, index) => {
                const percentage = (
                  (Number(tweet.properties?.impression_count) / Number(mainTweet?.properties?.impression_count || 1)) *
                  100
                ).toFixed(2)

                return (
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
                          <TweetTime aria-label="Time since tweet">
                            {moment.unix(tweet.properties.date).fromNow()}
                          </TweetTime>
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
                    {sortBy === ENGAGEMENT && (
                      <TableCell>
                        {percentage} %
                        {mainTweet?.properties?.impression_count !== undefined &&
                          tweet.properties?.impression_count && (
                            <Engagement>
                              <EngagementBar percentage={Number(percentage)} />
                            </Engagement>
                          )}
                      </TableCell>
                    )}
                    {sortBy === FOLLOWERS && (
                      <TableCell align="right">{Number(tweet.properties?.followers).toLocaleString()}</TableCell>
                    )}
                  </TableRow>
                )
              })}
            </TableBody>
          </MaterialTable>
        </TableContainer>
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  display: flex;
  flex: 1;
  min-height: 572px;
  overflow: auto;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 400px;
    max-height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 300px;
    max-height: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: 250px;
    max-height: 250px;
  }
`
