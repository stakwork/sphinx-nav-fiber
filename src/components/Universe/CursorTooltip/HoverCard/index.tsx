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

export const HoverCard = ({ node }: Props) => {
  const { getNodeKeysByType } = useSchemaStore((s) => s)
  const properties = node.properties || {}

  const { image_url: imageUrl } = properties as { image_url?: string }
  const keyProperty = getNodeKeysByType(node.node_type) || ''

  let description = ''

  if (node.node_type === 'Question') {
    description = node.name ?? ''
  } else if (node.text) {
    description = node.text || ''
  } else if (node?.properties) {
    description = node.properties[keyProperty] || ''
  }

  const truncatedDescription = description?.slice(0, 200) || ''
  const descriptionLength = truncatedDescription.length

  const title =
    node.node_type === 'Question'
      ? node.label ??
        node.show_title ??
        node.episode_title ??
        node?.properties?.alias ??
        node?.properties?.twitter_handle ??
        node?.properties?.username ??
        ''
      : node.label ??
        node.name ??
        node.show_title ??
        node.episode_title ??
        node?.properties?.alias ??
        node?.properties?.twitter_handle ??
        node?.properties?.username ??
        ''

  return (
    <TooltipContainer descriptionLength={descriptionLength} titleLength={title.length}>
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

const getTooltipSize = (titleLength: number, descriptionLength: number) => {
  let minWidth = '250px'
  let maxWidth = '450px'

  if (titleLength < 20 && descriptionLength < 20) {
    minWidth = '150px'
    maxWidth = '300px'
  } else if (titleLength > 100) {
    minWidth = '300px'
    maxWidth = '600px'
  } else if (titleLength > 10) {
    minWidth = '300px'
    maxWidth = '450px'
  }

  let minHeight = '120px'
  let maxHeight = '200px'

  if (titleLength < 20 && descriptionLength < 20) {
    minHeight = '80px'
    maxHeight = '120px'
  } else if (descriptionLength > 300) {
    minHeight = '180px'
    maxHeight = '280px'
  } else if (descriptionLength > 150) {
    minHeight = '140px'
    maxHeight = '250px'
  }

  return { minWidth, maxWidth, minHeight, maxHeight }
}

const TooltipContainer = styled(Flex)<{ titleLength: number; descriptionLength: number }>`
  ${({ titleLength, descriptionLength }) => {
    const { minWidth, maxWidth, minHeight, maxHeight } = getTooltipSize(titleLength, descriptionLength)

    return `
      min-width: ${minWidth};
      max-width: ${maxWidth};
      min-height: ${minHeight};
      max-height: ${maxHeight};
    `
  }}

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
  display: flex;
  align-items: start;
  justify-content: ${(props) => (props.hasImage ? 'flex-end' : 'flex-start')};
`

const Description = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
  color: ${colors.white};
  opacity: 0.8;
  max-width: 100%;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
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
