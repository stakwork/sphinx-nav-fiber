import Popover, { PopoverOrigin } from '@mui/material/Popover'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../Flex'
import { Text } from '~/components/common/Text'
import { colors } from '~/utils/colors'
import { Button } from '~/components/Button'

type ConfirmPopoverProps = {
  message: string
  onConfirm: () => void
  children: React.ReactElement
  anchorOrigin?: PopoverOrigin
  transformOrigin?: PopoverOrigin
}

const ConfirmPopover: React.FC<ConfirmPopoverProps> = ({
  message = 'Are you sure you want to delete this item?',
  onConfirm,
  children,
  anchorOrigin = { vertical: 'bottom', horizontal: 'center' },
  transformOrigin = { vertical: 'top', horizontal: 'center' },
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleConfirm = () => {
    onConfirm()
    handleClose()
  }

  const handleCancel = () => {
    handleClose()
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <div>{React.cloneElement(children, { onClick: handleOpen })}</div>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        onClose={handleClose}
        open={open}
        transformOrigin={transformOrigin}
      >
        <Wrapper justify="space-around">
          <Text>{message}</Text>
          <Flex align="center" direction="row" justify="center" pt={8}>
            <Button kind="small" onClick={handleConfirm}>
              Yes
            </Button>
            <Button className="secondary" kind="small" onClick={handleCancel}>
              No
            </Button>
          </Flex>
        </Wrapper>
      </Popover>
    </>
  )
}

const Wrapper = styled(Flex)`
  background: ${colors.headerBackground};
  color: ${colors.white};
  padding: 16px 8px;

  .secondary {
    margin-left: 8px;
    background: transparent;
    border: 1px solid ${colors.primaryButton};
  }
`

export default ConfirmPopover
