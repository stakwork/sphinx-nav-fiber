import { Button, Table as MaterialTable, Popover, TableRow } from '@mui/material'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import EditTopicIcon from '~/components/Icons/EditTopicIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
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

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleAddContent = async () => {
    openContentAddModal()
  }

  const handleOpenPopover = useCallback(
    (s: Schema) => {
      openContentAddModal()
      setSelectedSchema(s)
    },
    [openContentAddModal, setSelectedSchema],
  )

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleEdit = () => {
    setAnchorEl(null)
    handleAddContent()
  }

  const open = Boolean(anchorEl)

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
            <TopicRow key={schema?.type} onOpenActions={handleOpenPopover} schema={schema} />
          ))}
        </tbody>
      </MaterialTable>
      <PopoverWrapper
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        id="schema-editor"
        onClose={handleClose}
        open={open}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <PopoverOption onClick={handleEdit}>
          <EditTopicIcon data-testid="EditTopicIcon" /> Edit
        </PopoverOption>
      </PopoverWrapper>

      <AddContentSection>
        <Button
          color="secondary"
          endIcon={<PlusIcon />}
          onClick={handleAddContent}
          size="medium"
          type="submit"
          variant="contained"
        >
          Create New Type
        </Button>
      </AddContentSection>
    </>
  )
}

const AddContentSection = styled(Flex)`
  display: flex;
  margin: 20px 0px 0px 30px;
  width: 28%;
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
