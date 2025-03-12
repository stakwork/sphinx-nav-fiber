import Paper from '@mui/material/Paper'
import MaterialTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { getPathway } from '~/network/fetchSourcesData'
import { Node } from '~/types'
import { colors } from '~/utils'

const TabPanelWrapper = styled(Flex)`
  display: flex;
  flex: 1;
  min-height: 572px;
  max-height: 572px;
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: ${colors.BG1};
  border-bottom: 1px solid ${colors.divider3};
  border-radius: 12px 12px 0 0;
`

const Title = styled.h1`
  color: ${colors.white};
  font-size: 25px;
  font-weight: 600;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: ${colors.BG1};
  border-bottom: 1px solid ${colors.divider3};
  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

const Text = styled.span`
  color: ${colors.GRAY7};
  font-size: 14px;
`

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

const Table = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 24px;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 3fr 1fr;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid ${colors.divider3};
  align-items: center;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${colors.MESSAGE_BG_HOVER};
  }
`

const HeaderRow = styled(Row)`
  color: ${colors.GRAY7};
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 1px solid ${colors.divider3};
  padding: 12px 0;
`

const Avatar = styled.div<{ $imageUrl?: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${colors.BG1};
  ${({ $imageUrl }) => $imageUrl && `background-image: url(${$imageUrl});`}
  background-size: cover;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const Username = styled.span`
  font-size: 14px;
`

const Followers = styled.span`
  color: ${colors.GRAY7};
  font-size: 12px;
`

const Tweet = styled.div`
  font-size: 14px;
  color: ${colors.white};
  max-width: 400px;
`

const TweetTime = styled.div`
  color: ${colors.GRAY7};
  font-size: 12px;
  margin-top: 4px;
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

export const Body = () => {
  const [sortBy, setSortBy] = useState<'engagement' | 'followers'>('engagement')
  const [tweets, setTweets] = useState<Node[]>([])
  const [mainTweet, setMainTweet] = useState<Node | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { tweetId: selectedTweetId } = useParams()

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        if (!selectedTweetId) {
          return
        }

        const response = await getPathway(
          selectedTweetId,
          ['Tweet'],
          ['HAS_REPLY>', 'HAS_QUOTE>', 'RETWEETED_BY>', 'THREAD_NEXT>', '<POSTED'],
          'impression_count',
          true,
          10,
          21,
        )

        const main = response.nodes.find((node) => node.ref_id === selectedTweetId)

        if (main) {
          setMainTweet(main)
        }

        setTweets(response.nodes.filter((node) => node.ref_id !== selectedTweetId))
      } catch (err) {
        console.error('Error fetching tweets:', err)
        setError('Failed to load engagement data')
      } finally {
        setLoading(false)
      }
    }

    fetchTweets()
  }, [selectedTweetId])

  console.log(mainTweet)

  return (
    <TabPanelWrapper>
      <Header>
        <Title>Engagement Report</Title>
      </Header>

      <Controls>
        <Text>
          Showing top {tweets.length} tweets by {sortBy === 'engagement' ? 'engagement' : 'followers'}
        </Text>
        {false && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Text style={{ marginBottom: '1px' }}>Sort by:</Text>
            <SortButton active={sortBy === 'engagement'} onClick={() => setSortBy('engagement')}>
              Total Engagement
            </SortButton>
            <SortButton active={sortBy === 'followers'} onClick={() => setSortBy('followers')}>
              Follower Count
              <img alt="Close" src="/svg-icons/ChevronUpIcon.svg" />
            </SortButton>
          </div>
        )}
      </Controls>

      {(() => {
        if (loading) {
          return <div style={{ padding: 24, textAlign: 'center' }}>Loading engagement data...</div>
        }

        if (error) {
          return <div style={{ padding: 24, color: '#FF4D4F' }}>{error}</div>
        }

        if (!tweets.length) {
          return <div style={{ padding: 24, textAlign: 'center' }}>No engagement data available</div>
        }

        return false ? (
          <>
            <Table>
              <HeaderRow>
                <div>Rank</div>
                <div>User Profile</div>
                <div>Tweet</div>
                <div>{sortBy === 'engagement' ? '% of Total Engagement' : 'Follower Count'}</div>
              </HeaderRow>
              {tweets.map((tweet, index) => (
                <Row key={tweet.ref_id}>
                  <div style={{ color: colors.primaryBlue, fontWeight: 500 }}>{index + 1}</div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', maxWidth: '200px' }}>
                    <Avatar $imageUrl={tweet.image_url} />
                    <UserInfo>
                      {tweet?.properties?.twitter_handle && <Username>{tweet.properties.twitter_handle}</Username>}
                      {tweet?.properties?.followers && <Followers>{tweet.properties.followers}</Followers>}
                    </UserInfo>
                  </div>
                  <Tweet>
                    {tweet.properties?.text || ''}
                    {tweet?.properties?.date && <TweetTime>{moment.unix(tweet.properties.date).fromNow()}</TweetTime>}
                  </Tweet>
                  <Engagement>
                    <EngagementBar percentage={20} />
                  </Engagement>
                </Row>
              ))}
            </Table>
          </>
        ) : (
          <TableContainer component={Paper}>
            <MaterialTable aria-label="a dense table" size="small" sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Rank</TableCell>
                  <TableCell align="left">User Profile</TableCell>
                  <TableCell align="left">Tweet</TableCell>
                  <TableCell align="left">% of Total Engagement</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tweets.map((tweet, index) => {
                  const percentage = (
                    (Number(tweet.properties?.impression_count) /
                      Number(mainTweet?.properties?.impression_count || 1)) *
                    100
                  ).toFixed(1)

                  return (
                    <TableRow key={tweet.ref_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <Avatar $imageUrl={tweet.image_url} />
                        <UserInfo>
                          {tweet?.properties?.twitter_handle && <Username>{tweet.properties.twitter_handle}</Username>}
                          {tweet?.properties?.followers && <Followers>{tweet.properties.followers}</Followers>}
                        </UserInfo>
                      </TableCell>
                      <TableCell>
                        {tweet.properties?.text || ''}
                        {tweet?.properties?.date && (
                          <TweetTime>{moment.unix(tweet.properties.date).fromNow()}</TweetTime>
                        )}
                      </TableCell>
                      <TableCell>
                        {percentage} %
                        {mainTweet?.properties?.impression_count !== undefined &&
                          tweet.properties?.impression_count && (
                            <Engagement>
                              <EngagementBar percentage={Number(percentage)} />
                            </Engagement>
                          )}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </MaterialTable>
          </TableContainer>
        )
      })()}
    </TabPanelWrapper>
  )
}
