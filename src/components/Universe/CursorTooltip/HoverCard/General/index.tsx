import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { Node } from '~/types'
import { colors } from '~/utils/colors'
import { truncateText } from '~/utils/truncateText'

type Props = {
  node: Node
}

export const General = ({ node }: Props) => {
  const { getNodeKeysByType } = useSchemaStore((s) => s)

  const keyProperty = getNodeKeysByType(node.node_type) || ''
  const imageUrl = node?.properties?.image_url

  let title = ''
  let description = node?.properties?.description || node.properties?.text || ''

  if (node.node_type === 'Question') {
    title = node.name || ''
  } else if (node.node_type === 'Claim') {
    title = ''
    description = node?.properties?.name || ''
  } else if (node?.properties) {
    title = node.properties[keyProperty] || node.name || ''
  }

  return (
    <TooltipContainer $hasImage={!!imageUrl}>
      <ContentWrapper>
        <Heading>
          {imageUrl && <Avatar alt={title || node.node_type} loading="lazy" src={imageUrl} />}
          <TitleWrapper>
            <TypeBadge type={node.node_type} />

            {title && <Title>{truncateText(title, 70)}</Title>}
          </TitleWrapper>
        </Heading>
        {description && <Description>{truncateText(description, 200)}</Description>}
      </ContentWrapper>
    </TooltipContainer>
  )
}

const TooltipContainer = styled(Flex)<{ $hasImage: boolean }>`
  width: ${({ $hasImage }) => ($hasImage ? '390px' : 'fit-content')};
  background: ${colors.HOVER_CARD_BG};
  flex-direction: column;
  pointer-events: auto;
  align-items: flex-start;
  border-radius: 8px;
  overflow: hidden;
  max-width: 390px;
  min-width: ${({ $hasImage }) => ($hasImage ? '320px' : '220px')};
  border-bottom: 5px solid rgba(0, 0, 0, 0.3);
  padding: 16px 14px;
`

const ContentWrapper = styled(Flex)`
  margin-top: 0;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`

export const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 6px;
  object-fit: cover;
  margin-right: 12px;
  flex-shrink: 0;
  background: ${colors.BG1};
`

const Heading = styled(Flex)`
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`

const TitleWrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  min-width: 0; /* 🔥 Allows children (Title) to shrink */
  max-width: 100%;
`

const Title = styled(Text)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${colors.white};
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  min-width: 0; /* 🔥 Allows shrinking inside flex parent */
  max-width: 100%;
  line-clamp: 3;
  -webkit-line-clamp: 3;
`

const Description = styled(Text)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 16px;
  max-width: 100%;
  color: ${colors.white};
  opacity: 0.8;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 3;
  -webkit-line-clamp: 3;
`
