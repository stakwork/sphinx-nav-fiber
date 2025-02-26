import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { Node } from '~/types'
import { colors } from '~/utils/colors'

type Props = {
  node: Node
}

export const GeneralHoverCard = ({ node }: Props) => {
  const { getNodeKeysByType } = useSchemaStore((s) => s)
  const properties = node.properties || {}

  const { image_url: imageUrl } = properties as { image_url?: string }
  const keyProperty = getNodeKeysByType(node.node_type) || ''

  let description = ''
  let title = ''

  if (node.node_type === 'Tweet') {
    title = ''
  } else {
    title =
      node.node_type === 'Question'
        ? node.label ??
          node.show_title ??
          node.episode_title ??
          properties.alias ??
          properties.twitter_handle ??
          properties.username ??
          ''
        : properties[keyProperty] ??
          node.label ??
          node.name ??
          node.show_title ??
          node.episode_title ??
          properties.alias ??
          properties.twitter_handle ??
          properties.username ??
          ''
  }

  if (node.node_type === 'Question') {
    description = node.name ?? ''
  } else if (properties.description) {
    description = properties.description || node.properties?.text
  } else if (node.text) {
    description = node.text
  } else if (properties) {
    description = properties[keyProperty] || ''
  }

  const truncatedDescription = description?.slice(0, 200) || ''

  return (
    <TooltipContainer>
      {imageUrl && (
        <ImageWrapper>
          <TooltipImage alt={node.node_type} loading="lazy" src={imageUrl} />
        </ImageWrapper>
      )}
      <ContentWrapper hasImage={!!imageUrl}>
        <TypeBadge type={node?.node_type} />
        <Title hasImage={!!imageUrl}>{title}</Title>
      </ContentWrapper>
      {truncatedDescription && <Description>{truncatedDescription}</Description>}
    </TooltipContainer>
  )
}

const TooltipContainer = styled(Flex)`
  width: fit-content;
  max-width: 600px;
  min-height: auto;
  max-height: 280px;
  background: ${colors.HOVER_CARD_BG};
  border-radius: 8px;
  padding: 15px;
  flex-direction: column;
  gap: 8px;
  pointer-events: auto;
  align-items: flex-start;
  position: relative;
  transition: opacity 0.3s ease-in-out;
`

const ContentWrapper = styled(Flex)<{ hasImage: boolean }>`
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  margin-left: ${(props) => (props.hasImage ? '50px' : '0')};
`

const Title = styled(Text)<{ hasImage: boolean }>`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.white};
  word-wrap: break-word;
  display: flex;
  white-space: normal;
  align-items: start;
  justify-content: ${(props) => (props.hasImage ? 'flex-end' : 'flex-start')};
`

const Description = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  margin-top: 4px;
  color: ${colors.white};
  opacity: 0.8;
  word-wrap: break-word;
  max-width: 100%;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ImageWrapper = styled(Flex)`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 40px;
  height: 40px;
`

const TooltipImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`
