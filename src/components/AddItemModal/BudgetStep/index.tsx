import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { MdError } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import CheckIcon from '~/components/Icons/CheckIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getPriceData } from '~/network/fetchSourcesData'
import { useUserStore } from '~/stores/useUserStore'
import { colors, formatBudget } from '~/utils'

type Props = {
  onClick: () => void
  loading: boolean
  error?: string
}

export const BudgetStep: FC<Props> = ({ onClick, loading, error }) => {
  const budget = useUserStore((s) => s.budget)
  const [price, setPrice] = useState<number>(10)
  const endPoint = 'node'

  useEffect(() => {
    const run = async () => {
      try {
        const res = await getPriceData(endPoint)

        setPrice(res.data.price)
      } catch (err) {
        console.error('cannot fetch', err)
      }
    }

    run()
  }, [endPoint])

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
          <div className="value" data-testid="check-price">
            {price} sats
          </div>
        </Cost>
        <Budget>
          <div className="title">BUDGET</div>
          <div className="value">{formatBudget(budget)} sats</div>
        </Budget>
      </Flex>
      <Flex>
        <Button
          color="secondary"
          data-testid="check-icon"
          disabled={loading || !!error}
          onClick={onClick}
          size="large"
          startIcon={
            loading ? (
              <IconWrapper>
                <ClipLoader color={colors.lightGray} size={12} />
              </IconWrapper>
            ) : (
              <IconWrapper>
                {' '}
                <CheckIcon />
              </IconWrapper>
            )
          }
          type="submit"
          variant="contained"
        >
          Approve
        </Button>
      </Flex>
      {error ? (
        <StyledError>
          <StyledErrorText>
            <MdError className="errorIcon" />
            <span>{error}</span>
          </StyledErrorText>
        </StyledError>
      ) : null}
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

const StyledErrorText = styled(Flex)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;

  .errorIcon {
    display: block;
    font-size: 13px;
    min-height: 13px;
    min-width: 13px;
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    letter-spacing: 0.2px;
    cursor: pointer;
    padding-left: 4px;
    font-size: 13px;
    font-family: Barlow;
    line-height: 18px;
  }
`

const StyledError = styled(Flex)`
  display: flex;
  align-items: center;
  color: ${colors.primaryRed};
  position: relative;
  margin-top: 20px;
`

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
  }
`
