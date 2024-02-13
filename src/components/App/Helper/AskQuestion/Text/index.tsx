import styled from 'styled-components'
import GlobeIcon from '~/components/Icons/GlobeIcon'
import LinkIcon from '~/components/Icons/LinkIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils'

export const TextType = () => {
  const selectedNode = useSelectedNode()
  const hasSourceLink = !!selectedNode?.source_link

  return (
    <Flex align="center" justify="center" p={12}>
      {hasSourceLink && (
        <StyledHeader>
          <GlobeIcon color={colors.GRAY6} />
          <SyledLinkText>{selectedNode?.source_link}</SyledLinkText>
          <StyledLink href={selectedNode?.source_link} onClick={(e) => e.stopPropagation()} target="_blank">
            <LinkIcon />
          </StyledLink>
        </StyledHeader>
      )}
      <StyledContent hasSourceLink={hasSourceLink}>
        <Text color="primaryText1" kind="regular">
          {selectedNode?.text}
        </Text>
      </StyledContent>
    </Flex>
  )
}

const StyledHeader = styled(Flex)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.BG2};
  gap: 5px;
  color: ${colors.GRAY6};

  span {
    font-family: Barlow;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    color: ${colors.GRAY6};
  }
`

const StyledLink = styled.a`
  color: ${colors.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`

const StyledContent = styled(Flex)<{ hasSourceLink: boolean }>`
  margin-top: ${(props) => (props.hasSourceLink ? '48px' : '')};
`

const SyledLinkText = styled(Text)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
