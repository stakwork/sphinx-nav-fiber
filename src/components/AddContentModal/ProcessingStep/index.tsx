import { Divider } from '@mui/material'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import LinkIcon from '~/components/Icons/LinkIcon'
import { Animation } from '~/components/Stats/Animation'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import { colors } from '~/utils'
import animationData from './animation.json'

interface Props {
  type: string
  source: string
}

const ProcessingStep = ({ type, source }: Props) => (
  <Flex direction="column">
    <Flex align="center" direction="row">
      <StyledText>Processing</StyledText>
      <Flex ml={8}>
        <ClipLoader color={colors.white} size="16" />
      </Flex>
    </Flex>
    <StyledDivider />
    <Flex align="center" direction="row">
      <TypeBadge type={type} />
      <Flex align="center" direction="row" justify="flex-start" ml={8}>
        <StyledType>{source}</StyledType>
        <StyledLink href={`${source}?open=system`} onClick={(e) => e.stopPropagation()}>
          <LinkIcon />
        </StyledLink>
      </Flex>
    </Flex>
    <StyledAnimation animationData={animationData} />
  </Flex>
)

export default ProcessingStep

const StyledText = styled(Text)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const StyledType = styled(Text)`
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  max-width: 200px;
  color: ${colors.GRAY6};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 4px;
`

const StyledLink = styled.a`
  color: ${colors.GRAY6};
  font-size: 16px;
  height: 16px;
`

const StyledAnimation = styled(Animation)`
  width: 8.75rem;
  height: 8.75rem;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 135px;
  left: 0;
  right: 0;
`

const StyledDivider = styled(Divider)`
  && {
    margin: 0.85rem 0;
    opacity: 75%;
  }
`
