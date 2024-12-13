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

  const keyProperty = getNodeKeysByType(node.node_type) || ''

  const description = node?.properties ? node?.properties[keyProperty] : ''

  return (
    <TooltipContainer>
      <ContentWrapper>
        <Title>
          <TypeBadge type={node.node_type} />
        </Title>
        {description && <Description>{description}</Description>}
      </ContentWrapper>
    </TooltipContainer>
  )
}

const TooltipContainer = styled(Flex)`
  width: 390px;
  min-height: 100px;
  background: ${colors.HOVER_CARD_BG};
  border-radius: 8px;
  padding: 15px;
  padding-bottom: 3px !important;
  flex-direction: column;
  gap: 4px;
  pointer-events: auto;
  align-items: flex-start;
`

const ContentWrapper = styled(Flex)`
  margin-top: 0;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`

const Title = styled(Text)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${colors.white};
  margin: 0;
`

const Description = styled(Text)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.white};
  margin: 0;
  opacity: 0.8;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 3;
  -webkit-line-clamp: 3;
`
