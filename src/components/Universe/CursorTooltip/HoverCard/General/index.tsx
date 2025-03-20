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

  let title = ''
  let description = node?.properties?.description || node.properties?.text || ''

  if (node.node_type === 'Question') {
    title = node.name || ''
  } else if (node.node_type === 'Claim') {
    title = ''
    description = node?.properties?.name || ''
  } else if (node?.properties) {
    title = node.properties[keyProperty] || ''
  }

  return (
    <TooltipContainer>
      <ContentWrapper>
        <Heading>
          {node?.properties?.image_url && <Avatar src={node.properties.image_url} />}
          <TitleWrapper>
            <TypeBadge type={node.node_type} />

            {title && <Title>{truncateText(title, 70)}</Title>}
          </TitleWrapper>
        </Heading>
        {description && <Description>{description}</Description>}
      </ContentWrapper>
    </TooltipContainer>
  )
}

const TooltipContainer = styled(Flex)`
  width: fit-content;
  background: ${colors.HOVER_CARD_BG};
  flex-direction: column;
  pointer-events: auto;
  align-items: flex-start;
  border-radius: 8px;
  overflow: hidden;
  max-width: 390px;
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
`

const Heading = styled(Flex)`
  flex-direction: row;
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
