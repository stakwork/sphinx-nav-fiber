import { Body } from './Body'
import { Flex } from '~/components/common/Flex'
import ClearIcon from '~/components/Icons/ClearIcon'
import styled from 'styled-components'
import { colors } from '~/utils'

export type Props = {
  setIsAddEdgeNode: (b: boolean) => void
  edgeData?: { refId: string; edgeType: string; source: string; target: string }
  setGraphLoading: (b: boolean) => void
}

export const AddEdgeNode = ({ setIsAddEdgeNode, edgeData, setGraphLoading }: Props) => {
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
      <Body edgeLinkData={edgeData} onCancel={onCancel} setGraphLoading={setGraphLoading} />
    </Flex>
  )
}

const CloseButton = styled(Flex)`
  font-size: 32px;
  color: ${colors.white};
  cursor: pointer;
`
