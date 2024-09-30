import { Popover } from '@mui/material'
import { MouseEvent, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Tooltip } from '~/components/common/ToolTip'
import InfoIcon from '~/components/Icons/InfoIcon'
import { useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils'

export const Alerts = () => {
  console.log(12)

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [listOfItems] = useState<string[]>([])
  const { runningProjectMessages } = useDataStore((s) => s)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <AlertWrapper ml={8}>
      <Info onClick={handleClick}>
        <Tooltip content="Messages" margin="18px">
          <div className="icon">
            <InfoIcon />
          </div>
          <div className="text">
            <p>{runningProjectMessages.length}</p>
          </div>
        </Tooltip>
      </Info>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        id={id}
        onClose={handleClose}
        open={open}
      >
        <Flex p={16}>
          {[...listOfItems, ...runningProjectMessages].map((i) => (
            <p key={i}>{i}</p>
          ))}
        </Flex>
      </Popover>
    </AlertWrapper>
  )
}

const AlertWrapper = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 0,
  justify: 'flex-start',
})``

const Info = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
})`
  display: flex;
  height: 2.5rem;
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
    font-size: 16px;
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
