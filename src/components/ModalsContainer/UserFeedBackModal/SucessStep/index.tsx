import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import SucessFeedBackIcon from '~/components/Icons/SucessFeedBackIcon'
import { colors } from '~/utils'

type Props = Record<string, never>

export const SuccessStep: FC<Props> = () => (
  <Flex align="center" direction="column" justify="center" p={40}>
    <IconWrapper>
      <SucessFeedBackIcon />
    </IconWrapper>
    <StyledText>We&apos;ve Got Your Feedback</StyledText>
    <SubText>Thank you for sharing your thoughts with us! We value your input.</SubText>
  </Flex>
)

const IconWrapper = styled.div`
  margin-bottom: 20px;
  width: 50px;
  height: 50px;

  svg {
    width: 100%;
    height: 100%;
    color: ${colors.white};
    fill: none;
  }

  circle {
    color: ${colors.SUCESS};
  }
`

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 10px;
`

const SubText = styled(Text)`
  font-size: 16px;
  font-family: 'Barlow';
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${colors.GRAY6};
  padding-top: 10px;
`
