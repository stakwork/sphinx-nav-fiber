import { useState } from 'react'
import styled from 'styled-components'
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
  padding: 8px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  border-radius: 50%;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.BG2};
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

const tweets = [
  {
    id: 1,
    username: '@designer',
    image_url: '/avatars/designer.jpg',
    followers: '265.0K followers',
    content: 'Redesigned our entire interface. What do you think? Before/after images:',
    time: 'Mar 6, 02:50 PM',
    engagement: 4.6,
  },
  {
    id: 2,
    username: '@product',
    image_url: '/avatars/product.jpg',
    followers: '423.0K followers',
    content: "New feature alert! We've added what you've been asking for. Update your app now.",
    time: 'Mar 6, 02:15 AM',
    engagement: 5.4,
  },
  {
    id: 3,
    username: '@researcher',
    image_url: '/avatars/researcher.jpg',
    followers: '198.0K followers',
    content: "New study findings challenge conventional wisdom. Here's what we discovered:",
    time: 'Mar 6, 02:50 PM',
    engagement: 6.2,
  },
  {
    id: 4,
    username: '@support',
    image_url: '/avatars/support.jpg',
    followers: '152.0K followers',
    content: "We're here to help! New FAQ section added based on your common questions.",
    time: 'Mar 5, 11:30 AM',
    engagement: 3.8,
  },
  {
    id: 5,
    username: '@engineering',
    image_url: '/avatars/engineering.jpg',
    followers: '387.0K followers',
    content: 'Major infrastructure upgrades completed. Expect improved performance!',
    time: 'Mar 7, 09:15 AM',
    engagement: 4.9,
  },
  {
    id: 6,
    username: '@marketing',
    image_url: '/avatars/marketing.jpg',
    followers: '512.0K followers',
    content: 'Big announcement coming next week. Stay tuned! 🚀',
    time: 'Mar 7, 03:20 PM',
    engagement: 7.1,
  },
  {
    id: 7,
    username: '@community',
    image_url: '/avatars/community.jpg',
    followers: '234.0K followers',
    content: 'Join our weekly AMA session - ask us anything!',
    time: 'Mar 6, 10:00 PM',
    engagement: 5.2,
  },
  {
    id: 8,
    username: '@security',
    image_url: '/avatars/security.jpg',
    followers: '176.0K followers',
    content: 'Important security update: Please enable 2FA for added protection',
    time: 'Mar 5, 04:45 PM',
    engagement: 6.5,
  },
  {
    id: 9,
    username: '@data',
    image_url: '/avatars/data.jpg',
    followers: '298.0K followers',
    content: 'New analytics dashboard now available in beta',
    time: 'Mar 8, 08:30 AM',
    engagement: 4.3,
  },
  {
    id: 10,
    username: '@designer',
    image_url: '/avatars/designer.jpg',
    followers: '265.0K followers',
    content: 'Exploring dark mode variations. Which palette do you prefer?',
    time: 'Mar 7, 01:15 PM',
    engagement: 5.8,
  },
  {
    id: 11,
    username: '@mobile',
    image_url: '/avatars/mobile.jpg',
    followers: '341.0K followers',
    content: 'iOS app update now available with bug fixes and improvements',
    time: 'Mar 8, 10:00 AM',
    engagement: 4.1,
  },
  {
    id: 12,
    username: '@web',
    image_url: '/avatars/web.jpg',
    followers: '287.0K followers',
    content: 'New browser compatibility features implemented',
    time: 'Mar 6, 04:30 PM',
    engagement: 3.9,
  },
  {
    id: 13,
    username: '@growth',
    image_url: '/avatars/growth.jpg',
    followers: '198.0K followers',
    content: 'User base milestone reached! 1M active users 🎉',
    time: 'Mar 7, 12:00 PM',
    engagement: 6.7,
  },
  {
    id: 14,
    username: '@devops',
    image_url: '/avatars/devops.jpg',
    followers: '154.0K followers',
    content: 'Scheduled maintenance notice: March 9th 2-4 AM UTC',
    time: 'Mar 6, 06:00 PM',
    engagement: 4.4,
  },
  {
    id: 15,
    username: '@ux',
    image_url: '/avatars/ux.jpg',
    followers: '231.0K followers',
    content: 'User testing session results are in - see what we learned',
    time: 'Mar 8, 02:15 PM',
    engagement: 5.1,
  },
  {
    id: 16,
    username: '@ai',
    image_url: '/avatars/ai.jpg',
    followers: '467.0K followers',
    content: 'New ML model deployed with 15% accuracy improvement',
    time: 'Mar 7, 11:30 AM',
    engagement: 7.3,
  },
  {
    id: 17,
    username: '@backend',
    image_url: '/avatars/backend.jpg',
    followers: '189.0K followers',
    content: 'API rate limits updated for better service stability',
    time: 'Mar 5, 03:00 PM',
    engagement: 4.7,
  },
  {
    id: 18,
    username: '@frontend',
    image_url: '/avatars/frontend.jpg',
    followers: '275.0K followers',
    content: 'Component library v2.0 released with accessibility improvements',
    time: 'Mar 8, 09:45 AM',
    engagement: 5.6,
  },
  {
    id: 19,
    username: '@qa',
    image_url: '/avatars/qa.jpg',
    followers: '163.0K followers',
    content: 'Automated testing coverage now at 85% and climbing',
    time: 'Mar 6, 10:30 AM',
    engagement: 4.0,
  },
  {
    id: 20,
    username: '@founder',
    image_url: '/avatars/founder.jpg',
    followers: '689.0K followers',
    content: 'Reflecting on our 5-year journey - thank you all!',
    time: 'Mar 9, 08:00 AM',
    engagement: 8.2,
  },
]

const EngagementReportOverlay = ({ onClose }: { onClose: () => void }) => {
  const [sortBy, setSortBy] = useState<'engagement' | 'followers'>('engagement')

  const sortedTweets = [...tweets].sort((a, b) => {
    if (sortBy === 'engagement') {
      return b.engagement - a.engagement
    }

    // Convert follower strings to numbers for comparison
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

      <Table>
        <HeaderRow>
          <div>Rank</div>
          <div>User Profile</div>
          <div>Tweet</div>
          <div>{sortBy === 'engagement' ? '% of Total Engagement' : 'Follower Count'}</div>
        </HeaderRow>
        {sortedTweets.map((tweet, index) => (
          <Row key={tweet.id}>
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
              <TweetTime>{tweet.time}</TweetTime>
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
    </Container>
  )
}

export default EngagementReportOverlay
