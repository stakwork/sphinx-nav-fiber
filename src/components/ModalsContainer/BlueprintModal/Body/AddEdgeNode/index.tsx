import { Body } from './Body'
import { Flex } from '~/components/common/Flex'
import ClearIcon from '~/components/Icons/ClearIcon'
import styled from 'styled-components'
import { colors } from '~/utils'

export type Props = {
  setIsAddEdgeNode: (b: boolean) => void
}

export const AddEdgeNode = ({ setIsAddEdgeNode }: Props) => {
  const onCancel = () => {
    setIsAddEdgeNode(false)
  }

  return (
    <Flex>
      <Flex direction="row" justify="flex-end">
        <CloseButton data-testid="close-sidebar-sub-view" onClick={onCancel}>
          <ClearIcon />
        </CloseButton>
      </Flex>
      <AddEdgeWrapper>
        <Body onCancel={onCancel} />
      </AddEdgeWrapper>
    </Flex>
  )
}

const CloseButton = styled(Flex)`
  font-size: 32px;
  color: ${colors.white};
  cursor: pointer;
`

const AddEdgeWrapper = styled(Flex)``
