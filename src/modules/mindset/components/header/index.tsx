import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import Logo from '~/components/Icons/Logo'
import { getAboutData } from '~/network/fetchSourcesData'
import { colors } from '~/utils/colors'

export const Header = () => {
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await getAboutData()

        setTitle(response.title || 'Graph Mindset')
      } catch (error) {
        console.error('Failed to fetch title:', error)
      }
    }

    fetchTitle()
  }, [])

  return (
    <Head>
      <LogoButton>
        <IconWrapper>
          <Logo />
        </IconWrapper>
      </LogoButton>
      <StyledText>{title}</StyledText>
    </Head>
  )
}

const Head = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
})`
  height: 64px;
  padding: 20px 23px;
  gap: 0px;
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
