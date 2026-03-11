import styled from 'styled-components'
import BudgetIcon from '~/components/Icons/BudgetIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { formatBudget } from '~/utils/formatBudget'

export const BalanceChip = () => {
  const budget = useUserStore((s) => s.budget)

  if (budget === null) {
    return null
  }

  return (
    <Wrapper data-testid="balance-chip" direction="column">
      <IconWrapper>
        <BudgetIcon />
      </IconWrapper>
      <Label>{formatBudget(budget)} SAT</Label>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-left: 5px;
  padding: 4px 8px;
  border-radius: 20px;
  border: 1px solid ${colors.addAttributeBtn};
  color: ${colors.GRAY6};
  cursor: default;
  white-space: nowrap;
`

const IconWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  font-size: 16px;
`

const Label = styled(Text)`
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;
  color: ${colors.GRAY6};
`
