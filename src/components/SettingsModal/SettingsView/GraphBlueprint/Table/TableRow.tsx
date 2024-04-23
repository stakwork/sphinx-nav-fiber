import { IconButton, Popover } from '@mui/material'
import React, { memo, useState } from 'react'
import styled from 'styled-components'
import AddCircleIcon from '~/components/Icons/AddCircleIcon'
import EditTopicIcon from '~/components/Icons/EditTopicIcon'
import ThreeDotsIcons from '~/components/Icons/ThreeDotsIcons'
import { StyledTableCell, StyledTableRow } from '~/components/SourcesTableModal/SourcesView/common'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

interface Schema {
  name?: string
  ref_id?: string
  type?: string
  age?: number
  parent?: string
  link?: string
  title?: string
  app_version?: string
  description?: string
  mission_statement?: string
  namespace?: string
  search_term?: string
}
interface TableRowProps {
  schema: Schema
  onOpenActions: (s: Schema) => void
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TableRowComponent: React.FC<TableRowProps> = ({ schema, onOpenActions }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handlePopoverOptionClick = () => {
    handleClose()
  }

  const open = Boolean(anchorEl)
  const id = open ? 'popover' : undefined

  return (
    <StyledTableRow>
      <StyledTableCell className="empty" />
      <StyledTableCell>{capitalizeFirstLetter(schema.type ?? '')}</StyledTableCell>
      <StyledTableCell>
        <IconButton disabled={schema?.type === 'thing'} onClick={handleClick}>
          <ThreeDotsIcons data-testid="EditIcon" />
        </IconButton>
        <PopoverWrapper
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          id={id}
          onClose={handleClose}
          open={open}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <PopoverOption
            onClick={() => {
              onOpenActions(schema)
              handlePopoverOptionClick()
            }}
          >
            <EditTopicIcon />
            Edit
          </PopoverOption>
          <PopoverOption onClick={handlePopoverOptionClick}>
            <AddCircleIcon />
            Add Edge
          </PopoverOption>
        </PopoverWrapper>
      </StyledTableCell>
    </StyledTableRow>
  )
}

const PopoverWrapper = styled(Popover)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${colors.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`

const PopoverOption = styled(Flex).attrs({
  direction: 'row',
  px: 12,
  py: 8,
})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${colors.BUTTON1};
  color: ${colors.white};

  &:hover {
    background: ${colors.BUTTON1_HOVER};
    color: ${colors.GRAY3};
  }
`

export const TopicRow = memo(TableRowComponent)
