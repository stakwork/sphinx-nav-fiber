import styled from 'styled-components'
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
  width: 100%;
  transition: opacity 1s;
  z-index: 99;
  padding: 20px 23px;
`

const TitleWrapper = styled.div`
  ${media.smallOnly`
    display: none;
  `}

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
