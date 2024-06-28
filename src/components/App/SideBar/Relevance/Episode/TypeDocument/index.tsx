import styled from 'styled-components'
import GlobeIcon from '~/components/Icons/GlobeIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import { colors } from '~/utils/colors'
import { Description, StyledLink } from '..'
import LinkIcon from '~/components/Icons/LinkIcon'

interface Props {
  text: string
  type: string
  sourceLink: string
}

export const TypeDocument = ({ text, type, sourceLink }: Props) => (
  <Flex direction="column">
    <Flex align="center" direction="row" justify="space-between">
      <Flex align="center" direction="row">
        <TypeBadge type={type} />
      </Flex>
      {sourceLink && (
        <StyledLink
          href={`${sourceLink}${sourceLink?.includes('?') ? '&' : '?'}open=system`}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
        >
          <LinkIcon />
        </StyledLink>
      )}
    </Flex>
    <Description data-testid="episode-description">{text}</Description>
    <Flex align="center" direction="row" justify="flex-start">
      {sourceLink && (
        <StyledLink href={sourceLink} onClick={(e) => e.stopPropagation()} target="_blank">
          <GlobeIcon />
          <SyledLinkText>{sourceLink}</SyledLinkText>
        </StyledLink>
      )}
    </Flex>
  </Flex>
)

const SyledLinkText = styled(Text)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${colors.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`
