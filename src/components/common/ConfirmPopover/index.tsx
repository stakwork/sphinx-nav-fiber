import Popover, { PopoverOrigin } from '@mui/material/Popover'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Text } from '~/components/common/Text'
import { colors } from '~/utils/colors'
import { Flex } from '../Flex'

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
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
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
      <StyledPopover
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        onClose={handleClose}
        open={open}
        transformOrigin={transformOrigin}
      >
        <Wrapper>
          <Text className="message">{message}</Text>
          <ButtonWrapper>
            <Button background="primaryBlue" kind="small" onClick={handleConfirm}>
              Yes
            </Button>
            <Button background="white" kind="small" onClick={handleCancel} textColor="black">
              No
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </StyledPopover>
    </>
  )
}

const Wrapper = styled(Flex)`
  align-items: center;
  background: ${colors.BUTTON1};
  color: ${colors.white};
  min-width: 124px;
  padding: 18px 8px;
  z-index: 100000;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 9px;

  .message {
    font-family: Barlow;
    font-size: 16px;
    font-weight: 500;
  }
`

const StyledPopover = styled(Popover)`
  && {
    z-index: 9999;
  }
`

const ButtonWrapper = styled(Flex)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: 16px;
`

export default ConfirmPopover
