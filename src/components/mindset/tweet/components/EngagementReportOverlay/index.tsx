import { useState, useRef } from 'react'
import styled from 'styled-components'
import { FaTimes, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'
import { MdArrowDropDown, MdArrowDropUp, MdExpandLess, MdExpandMore } from 'react-icons/md'

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
    engagementPercentage: 18.2,
  },
  {
    id: 2,
    rank: 2,
    user: { id: '@newsupdate', profilePic: '/api/placeholder/40/40', followerCount: 2458000 },
    text: 'Breaking: Major announcement coming this afternoon. Stay tuned for updates!',
    timestamp: '2025-03-09T10:15:00Z',
    totalEngagement: 21450,
    engagementPercentage: 15.1,
  },
  {
    id: 3,
    rank: 3,
    user: { id: '@influencer', profilePic: '/api/placeholder/40/40', followerCount: 876000 },
    text: "My honest review of the product everyone's talking about. Thread 🧵",
    timestamp: '2025-03-08T18:45:00Z',
    totalEngagement: 18760,
    engagementPercentage: 13.2,
  },
  {
    id: 4,
    rank: 4,
    user: { id: '@startup', profilePic: '/api/placeholder/40/40', followerCount: 156000 },
    text: "We're thrilled to announce our Series B funding round of $15M! Thanks to our amazing team and investors.",
    timestamp: '2025-03-08T09:30:00Z',
    totalEngagement: 15620,
    engagementPercentage: 11.0,
  },
  {
    id: 5,
    rank: 5,
    user: { id: '@coder', profilePic: '/api/placeholder/40/40', followerCount: 342000 },
    text: 'I built this cool visualization tool over the weekend. Check it out! [link]',
    timestamp: '2025-03-07T20:10:00Z',
    totalEngagement: 12480,
    engagementPercentage: 8.8,
  },
  {
    id: 6,
    rank: 6,
    user: { id: '@celebrity', profilePic: '/api/placeholder/40/40', followerCount: 5240000 },
    text: 'So excited to share my latest project with you all! Coming next month.',
    timestamp: '2025-03-07T16:20:00Z',
    totalEngagement: 10950,
    engagementPercentage: 7.7,
  },
  {
    id: 7,
    rank: 7,
    user: { id: '@journalist', profilePic: '/api/placeholder/40/40', followerCount: 785000 },
    text: 'Exclusive: My interview with the CEO about the future of the company.',
    timestamp: '2025-03-07T11:45:00Z',
    totalEngagement: 9850,
    engagementPercentage: 6.9,
  },
  {
    id: 8,
    rank: 8,
    user: { id: '@researcher', profilePic: '/api/placeholder/40/40', followerCount: 198000 },
    text: "New study findings challenge conventional wisdom. Here's what we discovered:",
    timestamp: '2025-03-06T14:50:00Z',
    totalEngagement: 8740,
    engagementPercentage: 6.2,
  },
  {
    id: 9,
    rank: 9,
    user: { id: '@product', profilePic: '/api/placeholder/40/40', followerCount: 423000 },
    text: "New feature alert! We've added what you've been asking for. Update your app now.",
    timestamp: '2025-03-06T09:15:00Z',
    totalEngagement: 7620,
    engagementPercentage: 5.4,
  },
  {
    id: 10,
    rank: 10,
    user: { id: '@designer', profilePic: '/api/placeholder/40/40', followerCount: 265000 },
    text: 'Redesigned our entire interface. What do you think? Before/after images:',
    timestamp: '2025-03-05T15:30:00Z',
    totalEngagement: 6540,
    engagementPercentage: 4.6,
  },
]

function formatFollowers(count: number): string {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M'
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K'
  }
  return count.toString()
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export const EngagementReportOverlay = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [sortBy, setSortBy] = useState<'totalEngagement' | 'followerCount'>('totalEngagement')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  const [tweets] = useState<TweetData[]>(dummyTweets)
  const tableRef = useRef<HTMLDivElement>(null)

  const handleSort = (column: 'totalEngagement' | 'followerCount') => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(column)
      setSortDirection('desc')
    }
  }

  const sortedTweets = [...tweets].sort((a, b) => {
    let valueA: number, valueB: number

    if (sortBy === 'totalEngagement') {
      valueA = a.totalEngagement
      valueB = b.totalEngagement
    } else {
      valueA = a.user.followerCount
      valueB = b.user.followerCount
    }

    return sortDirection === 'asc' ? valueA - valueB : valueB - valueA
  })

  const tweetsWithUpdatedRanks = sortedTweets.map((tweet, index) => ({
    ...tweet,
    rank: index + 1,
  }))

  const handleScrollToTop = () => {
    if (tableRef.current) {
      tableRef.current.scrollTop = 0
    }
  }

  if (!isOpen) {
    return (
      <FloatingButton onClick={() => setIsOpen(true)}>
        <FloatingButtonText>Engagement Report</FloatingButtonText>
        <MdExpandMore size={20} />
      </FloatingButton>
    )
  }

  return (
    <OverlayContainer>
      <OverlayContent>
        <Header>
          <Title>Engagement Report</Title>
          <CloseButton onClick={() => setIsOpen(false)} aria-label="Close engagement report">
            <FaTimes size={20} />
          </CloseButton>
        </Header>

        <SortingControls>
          <SortInfo>Showing top {tweetsWithUpdatedRanks.length} tweets by engagement</SortInfo>
          <SortButtons>
            <SortButton
              $active={sortBy === 'totalEngagement'}
              onClick={() => handleSort('totalEngagement')}
            >
              <span>Total Engagement</span>
              {sortBy === 'totalEngagement' ? (
                sortDirection === 'desc' ? (
                  <MdArrowDropDown size={18} />
                ) : (
                  <MdArrowDropUp size={18} />
                )
              ) : (
                <FaSortAmountDown size={14} style={{ marginLeft: 4 }} />
              )}
            </SortButton>
            <SortButton
              $active={sortBy === 'followerCount'}
              onClick={() => handleSort('followerCount')}
            >
              <span>Follower Count</span>
              {sortBy === 'followerCount' ? (
                sortDirection === 'desc' ? (
                  <MdArrowDropDown size={18} />
                ) : (
                  <MdArrowDropUp size={18} />
                )
              ) : (
                <FaSortAmountDown size={14} style={{ marginLeft: 4 }} />
              )}
            </SortButton>
          </SortButtons>
        </SortingControls>

        <TableContainer ref={tableRef}>
          <Table>
            <thead>
              <tr>
                <th style={{ width: 60 }}>Rank</th>
                <th>User Profile</th>
                <th>Tweet</th>
                <th style={{ width: 160 }}>
                  {sortBy === 'followerCount' ? 'Follower Count' : '% of Total Engagement'}
                </th>
              </tr>
            </thead>
            <tbody>
              {tweetsWithUpdatedRanks.map((tweet) => (
                <TableRow key={tweet.id}>
                  <td>
                    <RankNumber>{tweet.rank}</RankNumber>
                  </td>
                  <td>
                    <UserInfo>
                      <ProfilePic
                        src={tweet.user.profilePic}
                        alt={tweet.user.id}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                      <UserDetails>
                        <TwitterHandle>{tweet.user.id}</TwitterHandle>
                        <FollowerCount>{formatFollowers(tweet.user.followerCount)} followers</FollowerCount>
                      </UserDetails>
                    </UserInfo>
                  </td>
                  <td>
                    <TweetText>{tweet.text}</TweetText>
                    <TweetDate>{formatDate(tweet.timestamp)}</TweetDate>
                  </td>
                  <td>
                    {sortBy === 'followerCount' ? (
                      <FollowerValue>{formatFollowers(tweet.user.followerCount)}</FollowerValue>
                    ) : (
                      <EngagementContainer>
                        <EngagementValue>{tweet.engagementPercentage.toFixed(1)}%</EngagementValue>
                        <ProgressBar>
                          <ProgressFill style={{ width: `${tweet.engagementPercentage}%` }} />
                        </ProgressBar>
                      </EngagementContainer>
                    )}
                  </td>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>

        <Footer>
          <ScrollToTopButton onClick={handleScrollToTop}>
            <MdExpandLess size={18} />
            <span>Scroll to Top</span>
          </ScrollToTopButton>
          <CloseFooterButton onClick={() => setIsOpen(false)}>Close</CloseFooterButton>
        </Footer>
      </OverlayContent>
    </OverlayContainer>
  )
}

const OverlayContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 64px;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

const OverlayContent = styled.div`
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid #334155;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 1200px;
  height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: #1e293b;
  border-bottom: 1px solid #334155;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #2dd4bf;
  margin: 0;
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: #334155;
    color: #fff;
  }
`

const SortingControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: #1e293b;
  border-bottom: 1px solid #334155;
  flex-wrap: wrap;
  gap: 12px;
`

const SortInfo = styled.div`
  font-size: 14px;
  color: #94a3b8;
`

const SortButtons = styled.div`
  display: flex;
  gap: 8px;
`

const SortButton = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  background: ${(props) => (props.$active ? '#0d9488' : '#334155')};
  color: ${(props) => (props.$active ? '#2dd4bf' : '#cbd5e1')};

  &:hover {
    opacity: 0.8;
  }
`

const TableContainer = styled.div`
  flex: 1;
  overflow: auto;
  background: #0f172a;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`

const TableRow = styled.tr`
  transition: background-color 0.15s;
  cursor: pointer;

  &:hover {
    background: #1e293b;
  }
`

const RankNumber = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #2dd4bf;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #334155;
`

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const TwitterHandle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #2dd4bf;
`

const FollowerCount = styled.div`
  font-size: 12px;
  color: #64748b;
`

const TweetText = styled.div`
  font-size: 14px;
  color: #e2e8f0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const TweetDate = styled.div`
  font-size: 12px;
  color: #64748b;
  margin-top: 4px;
`

const EngagementContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const EngagementValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #e2e8f0;
`

const ProgressBar = styled.div`
  width: 100%;
  background: #334155;
  border-radius: 9999px;
  height: 8px;
  margin-top: 6px;
  overflow: hidden;
`

const ProgressFill = styled.div`
  background: #2dd4bf;
  height: 100%;
  border-radius: 9999px;
  transition: width 0.3s;
`

const FollowerValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #e2e8f0;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  background: #1e293b;
  border-top: 1px solid #334155;
`

const ScrollToTopButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  background: #334155;
  border: 1px solid #475569;
  border-radius: 6px;
  color: #cbd5e1;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #475569;
  }
`

const CloseFooterButton = styled.button`
  padding: 10px 16px;
  background: #334155;
  border: 1px solid #475569;
  border-radius: 6px;
  color: #cbd5e1;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #475569;
  }
`

const FloatingButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #0d9488;
  color: #fff;
  padding: 14px 20px;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  z-index: 1000;
  transition: all 0.2s;

  &:hover {
    background: #0f766e;
    transform: translateY(-2px);
  }
`

const FloatingButtonText = styled.span``
