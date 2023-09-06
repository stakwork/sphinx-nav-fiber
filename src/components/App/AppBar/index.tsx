import styled from 'styled-components'
import AudioIcon from '~/components/Icons/AudioIcon'
import NodesIcon from '~/components/Icons/NodesIcon'
import TwitterIcon from '~/components/Icons/TwitterIcon'
import VideoIcon from '~/components/Icons/VideoIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { colors } from '~/utils/colors'
import { media } from '~/utils/media'

export const AppBar = () => (
  <Header>
    <TitleWrapper>
      <Text className="title" color="white">
        Bitcoin
      </Text>
      <Text className="subtitle"> Second Brain</Text>
    </TitleWrapper>

    <StatisticsWrapper>
      <Stat>
        <div className="icon">
          <NodesIcon />
        </div>
        <div className="text">199,328</div>
      </Stat>
      {/* <Stat>
        <div className="icon">
          <EpisodeIcon />
        </div>
        <div className="text">199,328</div>
      </Stat> */}
      <Stat>
        <div className="icon">
          <AudioIcon />
        </div>
        <div className="text">199,328</div>
      </Stat>
      <Stat>
        <div className="icon">
          <VideoIcon />
        </div>
        <div className="text">199,328</div>
      </Stat>
      <Stat>
        <div className="icon">
          <TwitterIcon />
        </div>
        <div className="text">199,328</div>
      </Stat>
    </StatisticsWrapper>
  </Header>
)

const Header = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
})`
  height: 64px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 64px;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`

const StatisticsWrapper = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
})``

const Stat = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  justify: 'flex-start',
})`
  color: ${colors.white};
  background: ${colors.BG1};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  margin: 0 8px;
  border-radius: 200px;

  &:hover {
    background: ${colors.BUTTON1_PRESS};
  }

  &:active {
    background: ${colors.BUTTON1};
  }

  .icon {
    margin-right: 8px;
    font-size: 16px;
  }

  .text {
  }
`

const TitleWrapper = styled.div`
  ${media.smallOnly`
    display: none;
  `}

  width: 367px;

  .title {
    color: var(--Primary-Text, #fff);
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 72.727% */
    letter-spacing: 0.22px;
  }

  .subtitle {
    color: ${colors.GRAY6};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
  }
`
