import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { colors } from '~/utils/colors'
import { Logo } from '../Icon/Logo'

export const Header = () => (
  <Head>
    <LogoButton>
      <IconWrapper>
        <Logo />
      </IconWrapper>
    </LogoButton>
    <StyledText>Graph Mindset</StyledText>
  </Head>
)

const Head = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
})`
  height: 64px;
  box-sizing: border-box;
  padding: 20px 23px;
  gap: 0px;
  z-index: 50;
  position: relative;
`

const LogoButton = styled(Flex)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 27px;
    color: ${colors.white};
  }
`

const StyledText = styled(Text)`
  width: 127px;
  height: 24px;
  color: ${colors.white};
  font-family: Barlow;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.22px;
  margin-left: 16px;
  white-space: nowrap;
`
