import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import ClearIcon from '~/components/Icons/ClearIcon'
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
    <CloseButton>
      <ClearIcon />
    </CloseButton>
  </Head>
)

const Head = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
})`
  height: 64px;
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

const CloseButton = styled.div`
  position: absolute;
  right: 16px;
  top: 40%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${colors.BUTTON1};
  transition: background 0.2s;

  &:hover {
    background: ${colors.BUTTON1_PRESS};
  }

  svg {
    fill: none;
    color: ${colors.white} !important;
    width: 16px;
    height: 16px;
  }
`
