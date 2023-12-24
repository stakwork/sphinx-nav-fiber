import styled from 'styled-components'
import { Button } from '~/components/Button'
import { useIsMobile } from '~/hooks/useIsMobile'

export const DeviceCompatibilityNotice = () => {
  const [isMobile, setIsMobile] = useIsMobile()

  const handleClick = () => {
    setIsMobile(false)
  }

  return isMobile ? (
    <Wrapper onClick={handleClick}>
      <img alt="screen" src="jamboard_kiosk.png" />
      <TextWrapper>
        <StyledText>Second Brain is currently</StyledText>
        <StyledText style={{ fontWeight: 600 }}>optimized for Desktop.</StyledText>
        <StyledText>Mobile support coming soon.</StyledText>
      </TextWrapper>
      <StyledButton onClick={handleClick}>Got It</StyledButton>
    </Wrapper>
  ) : null
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2147483647;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.p`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`

const StyledButton = styled(Button)`
  display: flex;
  width: 115px;
  height: 40px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--Primary-Blue, #618aff);
  margin-top: 14px;
`
