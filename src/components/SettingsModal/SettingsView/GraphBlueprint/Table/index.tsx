import { Table as MaterialTable, Popover, TableRow } from '@mui/material'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import AddCircleIcon from '~/components/Icons/AddCircleIcon'
import EditTopicIcon from '~/components/Icons/EditTopicIcon'
import { StyledTableCell, StyledTableHead } from '~/components/SourcesTableModal/SourcesView/common'
import { Flex } from '~/components/common/Flex'
import { Schema } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { colors } from '~/utils'
import { TopicRow } from './TableRow'

interface TableProps {
  schemas: Schema[]
  setSelectedSchema: (schema: Schema | null) => void
}

export const Table: React.FC<TableProps> = ({ schemas, setSelectedSchema }) => {
  const { open: openContentAddModal } = useModal('addType')

  const handleOpenPopover = useCallback(
    (s: Schema) => {
      openContentAddModal()
      setSelectedSchema(s)
    },
    [openContentAddModal, setSelectedSchema],
  )

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
    <>
      <MaterialTable component="table">
        <StyledTableHead>
          <TableRow component="tr">
            <StyledTableCell className="empty" />
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell className="empty" />
          </TableRow>
        </StyledTableHead>
        <tbody>
          {schemas?.map((schema) => (
            <TopicRow key={schema?.type} click={handleClick} schema={schema} />
          ))}
        </tbody>
      </MaterialTable>
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
            handleOpenPopover(schemas[0])
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
    </>
  )
}

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
