import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getPathway } from '~/network/fetchSourcesData'
import { colors } from '~/utils'

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: ${colors.ANALYTICS_CARD_BG};
  border-radius: 12px;
  width: 95%;
  max-width: 800px;
  max-height: 50vh;
  color: white;
  border: 1px solid ${colors.divider3};
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
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
  color: ${colors.primaryGreen};
  font-size: 25px;
  font-weight: 600;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  border-radius: 50%;
  color: ${colors.white};

  &:hover {
    color: ${colors.gray100};
  }

  img {
    width: 20px;
    height: 20px;
  }
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
  background: ${({ active }) => (active ? colors.primaryGreen : 'transparent')};
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

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px;
  border-top: 1px solid ${colors.divider3};
  background-color: ${colors.BG1};
  border-radius: 0 0 12px 12px;
`

const FooterButton = styled.button`
  background: rgba(97, 138, 255, 0.1);
  border: none;
  color: ${colors.primaryGreen};
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(97, 138, 255, 0.2);
  }
`

interface TweetData {
  ref_id: string
  username: string
  image_url: string
  followers: string
  content: string
  date: string
  engagement: number
}

const EngagementReportOverlay = ({ onClose, id }: { onClose: () => void; id: string }) => {
  const [sortBy, setSortBy] = useState<'engagement' | 'followers'>('engagement')
  const [tweets, setTweets] = useState<TweetData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await getPathway(id)

        const transformedData = response.nodes.map((node) => ({
          ref_id: node.ref_id,
          username: node.properties?.username || '@unknown',
          image_url: node.properties?.image_url || '/avatars/default.jpg',
          followers: node.properties?.followers
            ? `${Math.round(Number(node.properties.followers) / 1000)}K followers`
            : '0 followers',
          content: node.properties?.text || 'No content available',
          date: node.properties?.date ? new Date(node.properties.date).toLocaleString() : 'Unknown date',
          engagement: node.properties?.engagement ? Math.round(Number(node.properties.engagement) * 10) / 10 : 0,
        }))

        setTweets(transformedData)
      } catch (err) {
        console.error('Error fetching tweets:', err)
        setError('Failed to load engagement data')
      } finally {
        setLoading(false)
      }
    }

    fetchTweets()
  }, [id])

  const sortedTweets = [...tweets].sort((a, b) => {
    if (sortBy === 'engagement') {
      return b.engagement - a.engagement
    }

    const aFollowers = parseFloat(a.followers.replace(/[^0-9.]/g, ''))
    const bFollowers = parseFloat(b.followers.replace(/[^0-9.]/g, ''))

    return bFollowers - aFollowers
  })

  return (
    <Container>
      <Header>
        <Title>Engagement Report</Title>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>

      <Controls>
        <Text>
          Showing top {sortedTweets.length} tweets by {sortBy === 'engagement' ? 'engagement' : 'followers'}
        </Text>
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

        return (
          <>
            <Table>
              <HeaderRow>
                <div>Rank</div>
                <div>User Profile</div>
                <div>Tweet</div>
                <div>{sortBy === 'engagement' ? '% of Total Engagement' : 'Follower Count'}</div>
              </HeaderRow>
              {sortedTweets.map((tweet, index) => (
                <Row key={tweet.ref_id}>
                  <div style={{ color: '#10b981', fontWeight: 500 }}>{index + 1}</div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Avatar $imageUrl={tweet.image_url} />
                    <UserInfo>
                      <Username>{tweet.username}</Username>
                      <Followers>{tweet.followers}</Followers>
                    </UserInfo>
                  </div>
                  <Tweet>
                    {tweet.content}
                    <TweetTime>{tweet.date}</TweetTime>
                  </Tweet>
                  <Engagement>
                    {sortBy === 'engagement' ? `${tweet.engagement}%` : tweet.followers}
                    <EngagementBar
                      percentage={
                        sortBy === 'engagement'
                          ? tweet.engagement * 10
                          : (parseFloat(tweet.followers.replace(/[^0-9.]/g, '')) / 500000) * 100
                      }
                    />
                  </Engagement>
                </Row>
              ))}
            </Table>

            <Footer>
              <FooterButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Scroll to Top</FooterButton>
            </Footer>
          </>
        )
      })()}
    </Container>
  )
}

export default EngagementReportOverlay
