import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import ClearIcon from '~/components/Icons/ClearIcon'
import { colors } from '~/utils'
import { Body } from './Body'

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
      <HeaderFlex align="center" direction="row" justify="space-between">
        <StyledText data-testid="edge-modal-title">{edgeData?.refId ? 'Edit Edge' : 'Add Edge'}</StyledText>
        <CloseButton data-testid="close-sidebar-sub-view" onClick={onCancel}>
          <ClearIcon />
        </CloseButton>
      </HeaderFlex>
      <LineBar />
      <Body edgeLinkData={edgeData} onCancel={onCancel} setGraphLoading={setGraphLoading} />
    </Flex>
  )
}

const CloseButton = styled(Flex)`
  font-size: 32px;
  color: ${colors.white};
  cursor: pointer;

  svg {
    color: ${colors.GRAY6};
  }

  &:hover {
    svg {
      color: ${colors.white};
    }
  }
`

const HeaderFlex = styled(Flex)`
  margin-bottom: 16px;
`

const LineBar = styled.div`
  border-bottom: 1px solid ${colors.black};
  width: calc(100% + 32px);
  margin: 0 -16px 16px;
  opacity: 0.3;
`

const StyledText = styled(Text)`
  font-family: Barlow;
  font-size: 22px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-left: 2px;
  color: ${colors.white};
`
