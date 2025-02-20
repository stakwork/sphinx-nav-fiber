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

  if (node.text) {
    description = node.text || ''
  } else if (node?.properties) {
    description = node.properties[keyProperty] || ''
  }

  const truncatedDescription = description?.slice(0, 200) || ''
  const descriptionLength = truncatedDescription.length

  const title =
    node.label ??
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

const TooltipContainer = styled(Flex)<{ titleLength: number; descriptionLength: number }>`
  min-width: ${(props) => (props.titleLength > 10 ? '300px' : '250px')};
  max-width: ${(props) => (props.titleLength > 100 ? '600px' : '450px')};

  min-height: ${(props) => (props.descriptionLength > 150 ? '140px' : '120px')};
  max-height: ${(props) => (props.descriptionLength > 300 ? '250px' : '200px')};

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
