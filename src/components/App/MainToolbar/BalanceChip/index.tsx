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
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  align-items: center;
  justify-content: center;
  color: ${colors.GRAY6};
  cursor: default;
`

const IconWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

const Label = styled(Text)`
  font-size: 8px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  margin-top: 2px;
  color: ${colors.GRAY6};
`
