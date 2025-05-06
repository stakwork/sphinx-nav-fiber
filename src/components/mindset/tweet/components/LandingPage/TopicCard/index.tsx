import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Node } from '~/types'
import { colors } from '~/utils/colors'

interface TopicCardProps {
  node: Node
  onClick: () => void
  selected: boolean
}

export const TopicCard = ({ node, onClick, selected }: TopicCardProps) => (
  <CardWrapper className={selected ? 'selected' : ''} onClick={onClick}>
    {node?.properties?.name}
  </CardWrapper>
)

const CardWrapper = styled(Flex)`
  background: ${colors.BG1};
  width: auto;
  color: ${colors.white};
  padding: 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &.selected {
    background: ${colors.SEEDQUESTION};
    &:hover {
      background: ${colors.SEEDQUESTION};
    }
  }

  &:hover {
    background: ${colors.SEEDQUESTION_HOVER};
  }
`
