import { useState, useRef } from 'react'
import { FaMeh, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'
import { Flex } from '~/components/common/Flex'
import SentimentDataIcon from '~/components/Icons/SentimentDataIcon'
import { useTweetMindsetStore } from '~/stores/useTweetMindsetStore'
import { Node } from '~/types'
import { colors } from '~/utils/colors'

type Props = {
  node: Node
  handleAnalyzeClick: () => void
}

interface TweetData {
  id: number
  rank: number
  user: {
    id: string
    profilePic: string
    followerCount: number
  }
  text: string
  timestamp: string
  totalEngagement: number
  engagementPercentage: number
}

const dummyTweets: TweetData[] = [
  {
    id: 1,
    rank: 1,
    user: { id: '@techguru', profilePic: '/api/placeholder/40/40', followerCount: 1243000 },
    text: 'Just discovered an amazing new feature in the latest update! #GameChanger',
    timestamp: '2025-03-09T14:23:00Z',
    totalEngagement: 25840,
    engagementPercentage: 18.2
  },
  {
    id: 2,
    rank: 2,
    user: { id: '@newsupdate', profilePic: '/api/placeholder/40/40', followerCount: 2458000 },
    text: 'Breaking: Major announcement coming this afternoon. Stay tuned for updates!',
    timestamp: '2025-03-09T10:15:00Z',
    totalEngagement: 21450,
    engagementPercentage: 15.1
  },
  {
    id: 3,
    rank: 3,
    user: { id: '@influencer', profilePic: '/api/placeholder/40/40', followerCount: 876000 },
    text: "My honest review of the product everyone's talking about. Thread 🧵",
    timestamp: '2025-03-08T18:45:00Z',
    totalEngagement: 18760,
    engagementPercentage: 13.2
  },
  {
    id: 4,
    rank: 4,
    user: { id: '@startup', profilePic: '/api/placeholder/40/40', followerCount: 156000 },
    text: "We're thrilled to announce our Series B funding round of $15M! Thanks to our amazing team and investors.",
    timestamp: '2025-03-08T09:30:00Z',
    totalEngagement: 15620,
    engagementPercentage: 11.0
  },
  {
    id: 5,
    rank: 5,
    user: { id: '@coder', profilePic: '/api/placeholder/40/40', followerCount: 342000 },
    text: 'I built this cool visualization tool over the weekend. Check it out! [link]',
    timestamp: '2025-03-07T20:10:00Z',
    totalEngagement: 12480,
    engagementPercentage: 8.8
  },
  {
    id: 6,
    rank: 6,
    user: { id: '@celebrity', profilePic: '/api/placeholder/40/40', followerCount: 5240000 },
    text: 'So excited to share my latest project with you all! Coming next month.',
    timestamp: '2025-03-07T16:20:00Z',
    totalEngagement: 10950,
    engagementPercentage: 7.7
  },
  {
    id: 7,
    rank: 7,
    user: { id: '@journalist', profilePic: '/api/placeholder/40/40', followerCount: 785000 },
    text: 'Exclusive: My interview with the CEO about the future of the company.',
    timestamp: '2025-03-07T11:45:00Z',
    totalEngagement: 9850,
    engagementPercentage: 6.9
  },
  {
    id: 8,
    rank: 8,
    user: { id: '@researcher', profilePic: '/api/placeholder/40/40', followerCount: 198000 },
    text: 'New study findings challenge conventional wisdom. Here is what we discovered:',
    timestamp: '2025-03-06T14:50:00Z',
    totalEngagement: 8740,
    engagementPercentage: 6.2
  },
  {
    id: 9,
    rank: 9,
    user: { id: '@product', profilePic: '/api/placeholder/40/40', followerCount: 423000 },
    text: "New feature alert! We've added what you've been asking for. Update your app now.",
    timestamp: '2025-03-06T09:15:00Z',
    totalEngagement: 7620,
    engagementPercentage: 5.4
  },
  {
    id: 10,
    rank: 10,
    user: { id: '@designer', profilePic: '/api/placeholder/40/40', followerCount: 265000 },
    text: 'Redesigned our entire interface. What do you think? Before/after images:',
    timestamp: '2025-03-05T15:30:00Z',
    totalEngagement: 6540,
    engagementPercentage: 4.6
  }
]

const formatFollowers = (count: number): string => {
  if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M'
  if (count >= 1000) return (count / 1000).toFixed(1) + 'K'
  return count.toString()
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

const analyticsMapper = {
  impression_count: {
    label: 'Impressions',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
  like_count: {
    label: 'Likes',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
  reply_count: {
    label: 'Replies',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
  retweet_count: {
    label: 'Retweets',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
  quote_count: {
    label: 'Quotes',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
  bookmark_count: {
    label: 'Bookmarks',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
  analytics_location: { label: 'Location', formatter: (value: string) => value || 'Unknown' },
  analytics_gender: { label: 'Gender', formatter: (value: string) => value || 'Unknown' },
  followers: {
    label: 'Followers',
    formatter: (value: number, index: number) => value.toLocaleString().split(',').at(index),
  },
}

const getSentimentIcon = (score?: number) => {
  if (score === undefined || score === null) {
    return <FaMeh color={colors.GRAY3} />
  }

  if (score <= 4) {
    return <FaThumbsDown color="#ef4444" />
  }

  if (score >= 7) {
    return <FaThumbsUp color="#22c55e" />
  }

  return <FaMeh color={colors.GRAY3} />
}

export const Stats = ({ node, handleAnalyzeClick }: Props) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [sortBy, setSortBy] = useState<'engagement' | 'followers'>('engagement')
  const tableRef = useRef<HTMLDivElement>(null)
  const viewToFollowerRatio =
    node?.properties?.followers !== undefined &&
    node?.properties?.impression_count !== undefined &&
    node.properties.impression_count !== 0
      ? (node.properties.impression_count / node.properties.followers).toFixed(2)
      : 'N/A'

  const tweetPlayingTime = useTweetMindsetStore((s) => s.tweetPlayingTime)

  // Convert to raw timestamps (as numbers)
  const rawTimestamps = node?.properties?.time_series
    ? (node?.properties.time_series as string).split(',').map(Number)
    : []

  let index = -1

  if (tweetPlayingTime) {
    const timeInSeconds = tweetPlayingTime > 1e12 ? tweetPlayingTime / 1000 : tweetPlayingTime

    // Find the last index where the timestamp is <= tweetPlayingTime
    for (let i = 0; i < rawTimestamps.length; i += 1) {
      if (timeInSeconds >= rawTimestamps[i]) {
        index = i
      } else {
        break // timestamps must be in ascending order
      }
    }
  }

  const sortedTweets = [...dummyTweets].sort((a, b) => {
    if (sortBy === 'engagement') {
      return b.totalEngagement - a.totalEngagement
    }
    return b.user.followerCount - a.user.followerCount
  })

  const tweetsWithRanks = sortedTweets.map((tweet, index) => ({
    ...tweet,
    rank: index + 1
  }))

  const scrollToTop = () => {
    if (tableRef.current) {
      tableRef.current.scrollTop = 0
    }
  }

  return (
    <Card>
      <Flex align="center" direction="row" justify="space-between" mb={16}>
        <Title>Analytics</Title>
        <IconButton
          onClick={(e) => {
            e.stopPropagation()
            handleAnalyzeClick()
          }}
        >
          <SentimentDataIcon />
        </IconButton>
      </Flex>
      <Grid>
        {Object.entries(analyticsMapper).map(([key, { label, formatter }]) =>
          node?.properties?.[key] !== undefined ? (
            <Metric key={key}>
              <span>{label}</span>
              <Value key={index}>{formatter(node.properties[key] as never, index)}</Value>
            </Metric>
          ) : null,
        )}
        <Metric>
          <span>Views-to-followers</span>
          <Value>{viewToFollowerRatio}</Value>
        </Metric>
        <Metric>
          <span>Sentiment</span>
          <Value>{getSentimentIcon(node?.properties?.analytics_sentiment_score)}</Value>
        </Metric>
      </Grid>
      <EngagementReportButton
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200"
        onClick={(e) => {
          e.stopPropagation()
          setShowOverlay(true)
        }}
      >
        Engagement Report
      </EngagementReportButton>
      {showOverlay && (
        <Overlay>
          <OverlayContent onClick={(e) => e.stopPropagation()}>
            <OverlayHeader>
              <Title>Engagement Report</Title>
              <CloseButton onClick={() => setShowOverlay(false)}>×</CloseButton>
            </OverlayHeader>
            <SortControls>
              <SortButton 
                $active={sortBy === 'engagement'} 
                onClick={() => setSortBy('engagement')}
              >
                By Engagement
              </SortButton>
              <SortButton 
                $active={sortBy === 'followers'} 
                onClick={() => setSortBy('followers')}
              >
                By Followers
              </SortButton>
            </SortControls>
            <TableContainer ref={tableRef}>
              <Table>
                <TableHead>
                  <tr>
                    <th>Rank</th>
                    <th>User Profile</th>
                    <th>Tweet</th>
                    <th>{sortBy === 'engagement' ? '% Engagement' : 'Followers'}</th>
                  </tr>
                </TableHead>
                <TableBody>
                  {tweetsWithRanks.map((tweet) => (
                    <TableRow key={tweet.id}>
                      <RankCell>{tweet.rank}</RankCell>
                      <UserCell>
                        <UserAvatar src={tweet.user.profilePic} alt={tweet.user.id} />
                        <UserInfo>
                          <UserHandle>{tweet.user.id}</UserHandle>
                          <FollowerCount>{formatFollowers(tweet.user.followerCount)} followers</FollowerCount>
                        </UserInfo>
                      </UserCell>
                      <TweetCell>
                        <TweetText>{tweet.text}</TweetText>
                        <TweetDate>{formatDate(tweet.timestamp)}</TweetDate>
                      </TweetCell>
                      <MetricCell>
                        <MetricValue>
                          {sortBy === 'engagement' 
                            ? `${tweet.engagementPercentage.toFixed(1)}%`
                            : formatFollowers(tweet.user.followerCount)
                          }
                        </MetricValue>
                        <EngagementBar>
                          <EngagementFill 
                            style={{ 
                              width: sortBy === 'engagement' 
                                ? `${tweet.engagementPercentage}%`
                                : `${Math.min((tweet.user.followerCount / 5240000) * 100, 100)}%`
                            }} 
                          />
                        </EngagementBar>
                      </MetricCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Footer>
              <ScrollTopButton onClick={scrollToTop}>Scroll to Top</ScrollTopButton>
              <CloseOverlayButton onClick={() => setShowOverlay(false)}>Close</CloseOverlayButton>
            </Footer>
          </OverlayContent>
        </Overlay>
      )}
    </Card>
  )
}

const Card = styled.div`
  background: ${colors.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 0;
  max-width: 350px;
`

const Title = styled.h2`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`

const Metric = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.GRAY3};
  font-size: 14px;
  padding-right: 4px;
`

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(6px) scale(0.95);
  }
  60% {
    transform: translateY(-2px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const Value = styled.span`
  color: ${colors.GRAY6};
  display: flex;
  align-items: center;
  animation: ${popIn} 0.3s ease;
  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
`

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 24px;
  flex-shrink: 0;
  color: ${colors.SOURCE_TABLE_LINK};
  opacity: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`

const EngagementReportButton = styled.button`
  margin-top: 16px;
  width: 100%;
  background-color: #2563eb;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.2s;
  &:hover {
    background-color: #1d4ed8;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const OverlayContent = styled.div`
  background: ${colors.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
`

const OverlayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 24px;
  cursor: pointer;
  padding: 0 8px;
  &:hover {
    opacity: 0.7;
  }
`

const SortControls = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`

const SortButton = styled.button<{ $active?: boolean }>`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${props => props.$active ? '#0d9488' : '#374151'};
  color: ${colors.white};
  font-size: 14px;
  &:hover {
    opacity: 0.8;
  }
`

const TableContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 16px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableHead = styled.thead`
  background: #1f2937;
  position: sticky;
  top: 0;
  
  th {
    padding: 12px;
    text-align: left;
    color: ${colors.GRAY3};
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    border-bottom: 1px solid #374151;
  }
`

const TableBody = styled.tbody`
  tr:hover {
    background: rgba(31, 41, 55, 0.5);
  }
`

const TableRow = styled.tr`
  border-bottom: 1px solid #374151;
`

const RankCell = styled.td`
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #14b8a6;
  width: 50px;
`

const UserCell = styled.td`
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #374151;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const UserHandle = styled.span`
  color: #14b8a6;
  font-size: 14px;
`

const FollowerCount = styled.span`
  color: ${colors.GRAY3};
  font-size: 12px;
`

const TweetCell = styled.td`
  padding: 12px;
  max-width: 250px;
`

const TweetText = styled.div`
  color: ${colors.GRAY6};
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const TweetDate = styled.div`
  color: ${colors.GRAY3};
  font-size: 12px;
  margin-top: 4px;
`

const MetricCell = styled.td`
  padding: 12px;
  width: 120px;
`

const MetricValue = styled.div`
  color: ${colors.GRAY6};
  font-size: 14px;
  margin-bottom: 4px;
`

const EngagementBar = styled.div`
  width: 100%;
  background: #374151;
  border-radius: 4px;
  height: 8px;
`

const EngagementFill = styled.div`
  background: #14b8a6;
  height: 8px;
  border-radius: 4px;
  transition: width 0.3s ease;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

const ScrollTopButton = styled.button`
  padding: 8px 16px;
  background: #374151;
  border: 1px solid #4b5563;
  border-radius: 6px;
  color: ${colors.GRAY3};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #4b5563;
  }
`

const CloseOverlayButton = styled.button`
  padding: 8px 16px;
  background: #374151;
  border: 1px solid #4b5563;
  border-radius: 6px;
  color: ${colors.GRAY3};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #4b5563;
  }
`
