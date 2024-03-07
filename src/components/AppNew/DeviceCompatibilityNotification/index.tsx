import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useIsMobile } from '~/hooks/useIsMobile'

export const DeviceCompatibilityNotice = () => {
  const [isVisible, setIsVisible] = useState(true)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsVisible(true)
  }, [isMobile])

  const handleClick = () => {
    setIsVisible(false)
  }

  return isMobile && isVisible ? (
    <Wrapper align="center" direction="column" justify="center" onClick={handleClick}>
      <img alt="screen" src="jamboard_kiosk.png" />
      <Flex align="center" direction="column" justify="center">
        <StyledText>Second Brain is currently</StyledText>
        <StyledText style={{ fontWeight: 600 }}>optimized for Desktop.</StyledText>
        <StyledText>Mobile support coming soon.</StyledText>
      </Flex>
      <Button color="secondary" onClick={handleClick} variant="contained">
        Got It
      </Button>
    </Wrapper>
  ) : null
}

const Wrapper = styled(Flex)`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  gap: 28px;
  z-index: 2000000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const StyledText = styled(Text)`
  color: #fff;
  text-align: center;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 1px;
`
