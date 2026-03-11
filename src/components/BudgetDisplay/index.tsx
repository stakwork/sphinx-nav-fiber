import styled from 'styled-components'
import BudgetIcon from '~/components/Icons/BudgetIcon'
import { Tooltip } from '~/components/common/ToolTip'
import { useUserStore } from '~/stores/useUserStore'
import { formatBudget } from '~/utils'
import { colors } from '~/utils/colors'
import { Flex } from '../common/Flex'

export const BudgetDisplay = () => {
  const budget = useUserStore((s) => s.budget)

  return (
    <Budget>
      <Tooltip content="Budget" margin="18px">
        <div className="icon">
          <BudgetIcon />
        </div>
        <div className="text">
          <p>
            {`${formatBudget(budget)} `} <span className="budgetUnit">SAT</span>
          </p>
        </div>
      </Tooltip>
    </Budget>
  )
}

const Budget = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
})`
  display: flex;
  height: 32px;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${colors.white};
  background: ${colors.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${colors.BUTTON1_PRESS};
  }

  &:active {
    background: ${colors.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  .budgetUnit {
    color: ${colors.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
