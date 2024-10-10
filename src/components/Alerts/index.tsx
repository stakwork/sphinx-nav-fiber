import { Popover } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Tooltip } from '~/components/common/ToolTip'
import ClearIcon from '~/components/Icons/ClearIcon'
import InfoIcon from '~/components/Icons/InfoIcon'
import { useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils'

export const Alerts = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const { runningProjectMessages } = useDataStore((s) => s)

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return runningProjectMessages.length ? (
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

      <StyledPopover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        id={id}
        onClose={handleClose}
        open={open}
      >
        <CloseButton onClick={handleClose}>
          <ClearIcon />
        </CloseButton>
        <ContentWrapper p={16}>
          {runningProjectMessages.map((i) => (
            <p key={i} className="item">
              {i}
            </p>
          ))}
        </ContentWrapper>
      </StyledPopover>
    </AlertWrapper>
  ) : null
}

const AlertWrapper = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 0,
  justify: 'flex-start',
})``

const ContentWrapper = styled(Flex)`
  max-height: 50vh;
  max-width: 30vw;
  background: transparent;
  padding-top: 1px !important;
  padding-bottom: 0 !important;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 9px;
    margin: 4px;
    overflow-y: hidden;
  }

  .item {
    padding: 8px 0;
    word-break: break-word;
    font-family: 'Barlow';
    font-size: 12px;
    font-weight: 400;
    text-align: right;
    color: ${colors.GRAY6};
  }

  &:hover {
    background: ${colors.MESSAGE_BG_HOVER};
  }
`

const Info = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
})`
  display: flex;
  cursor: pointer;
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

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  display: none;
  z-index: 1;
  width: 2em;
  height: 2em;
  background-color: ${colors.BUTTON1};
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${colors.white} !important;
    width: 1.5em;
    height: 1.5em;
  }
`

const StyledPopover = styled(Popover)`
  .MuiPopover-paper {
    margin-top: 4px;
    background-color: transparent !important;
    box-shadow: none;
    background: ${colors.MESSAGE_BG};
    border-radius: 6px;
    overflow: visible;

    &:hover {
      ${CloseButton} {
        display: flex;
      }
    }
  }
`
