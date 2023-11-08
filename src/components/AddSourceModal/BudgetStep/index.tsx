import { Button } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import CheckIcon from '~/components/Icons/CheckIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useUserStore } from '~/stores/useUserStore'
import { formatBudget, colors } from '~/utils'

type Props = {
  onClick: () => void
}

export const BudgetStep: FC<Props> = ({ onClick }) => {
  const [budget] = useUserStore((s) => [s.budget])

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={20}>
        <Flex align="center" direction="row">
          <StyledText>Approve Cost</StyledText>
        </Flex>
      </Flex>

      <Flex align="center" direction="row" justify="space-between" mb={20}>
        <Cost>
          <div className="title">COST</div>
          <div className="value">10 sats</div>
        </Cost>
        <Budget>
          <div className="title">BUDGET</div>
          <div className="value">{formatBudget(budget)} sats</div>
        </Budget>
      </Flex>
      <Flex>
        <Button
          color="secondary"
          onClick={onClick}
          size="large"
          startIcon={<CheckIcon />}
          type="submit"
          variant="contained"
        >
          Approve
        </Button>
      </Flex>
    </Flex>
  )
}

const Cost = styled(Flex).attrs({
  direction: 'column',
  align: 'space-between',
  justify: 'flex-start',
})`
  width: 141px;
  height: 61px;
  border: 1px solid ${colors.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${colors.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${colors.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`

const Budget = styled(Flex).attrs({
  direction: 'column',
  align: 'space-between',
  justify: 'flex-start',
})`
  color: ${colors.secondaryText4};
  .title {
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`
