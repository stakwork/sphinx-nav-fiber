import styled from 'styled-components'
import { MENU_WIDTH } from '~/components/App/SideBar'
import { Flex } from '~/components/common/Flex'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { Stats } from './Stats'
import { Tweet } from './Tweet'

export const SideBar = () => {
  const selectedTweet = useMindsetStore((s) => s.selectedTweet)

  return selectedTweet ? (
    <Wrapper align="stretch" basis="100%" grow={1} shrink={1}>
      <TweetWrapper>{selectedTweet && <Tweet node={selectedTweet} />}</TweetWrapper>
      <Stats node={selectedTweet} />
    </Wrapper>
  ) : null
}

const Wrapper = styled(Flex)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  padding: '0 20px 0 20px',
  background: 'transparent',
  width: '100%',
  height: 'calc(100vh - 180px)',
  overflow: 'auto',

  [theme.breakpoints.up('sm')]: {
    width: MENU_WIDTH,
    gap: '10px',
  },
}))

const TweetWrapper = styled(Flex)(({ theme }) => ({
  width: '100%',
  marginBottom: '20px',
  [theme.breakpoints.up('sm')]: {
    width: '390px',
    margin: '0 auto',
  },
}))
