import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Node } from '~/types'
import { colors } from '~/utils/colors'
import { General } from './General'
import { Tweet } from './Tweet'
import { User } from './User'

type Props = {
  node: Node
}

const ComponentsMapper: Record<string, React.FC<{ node: Node }>> = {
  Tweet,
  User,
  General,
}

export const HoverCard = ({ node }: Props) => {
  // Select component dynamically, fallback to General
  const DynamicComponent = ComponentsMapper[node.node_type] || General

  return <DynamicComponent node={node} />
}

export const TooltipContainer = styled(Flex)`
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

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
`
