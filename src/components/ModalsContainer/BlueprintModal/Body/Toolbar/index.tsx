import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import CreateEdgeIcon from '~/components/Icons/CreateEdgeIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import { colors } from '~/utils/colors'

type Props = {
  onCreateNew: () => void
  onAddEdgeNode: () => void
}

export const Toolbar = ({ onCreateNew, onAddEdgeNode }: Props) => (
  <Wrapper>
    <ActionButton data-testid="add-schema-type" onClick={onCreateNew}>
      <IconWrapper>
        <PlusIcon />
      </IconWrapper>
    </ActionButton>
    <ActionButton data-testid="add-edge" onClick={onAddEdgeNode}>
      <IconWrapper>
        <CreateEdgeIcon />
      </IconWrapper>
    </ActionButton>
  </Wrapper>
)

const Wrapper = styled(Flex).attrs({
  align: 'flex-start',
  direction: 'column',
  justify: 'flex-start',
})`
  flex: 1;
  gap: 17px;
  padding: 16px 0 0 16px;
`

const ActionButton = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  p: 0,
})<{
  disabled?: boolean
}>`
  position: relative;
  width: 40px;
  height: 40px;
  flex-direction: row;
  color: ${colors.GRAY6};
  background: ${({ disabled }) => (disabled ? colors.disableBtn : colors.BG1)};
  cursor: pointer;
  border-radius: 6px;
  transition: ${({ theme }) => theme.transitions.create(['opacity', 'box-shadow', 'background-color'])};

  &:hover {
    color: ${({ disabled }) => (disabled ? colors.GRAY6 : colors.white)};
  }

  &:active {
    color: ${colors.white};
    background: ${({ disabled }) => (disabled ? colors.BG1 : colors.BG1_NORMAL)};
  }

  &.root {
    border-radius: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: none;
  }
`

const IconWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  font-size: 24px;
`
