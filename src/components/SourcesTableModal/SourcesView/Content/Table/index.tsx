import { Button, styled, Table as MaterialTable, TableRow } from '@mui/material'
import React from 'react'
import { StyledTableCell, StyledTableHead } from '../../common'
import { TopicRow } from './TableRow'
import { Flex } from '~/components/common/Flex'
import { useModal } from '~/stores/useModalStore'
import AddContentIcon from '~/components/Icons/AddContentIcon'
import { Node } from '~/network/fetchSourcesData'

interface TableProps {
  nodes: Node[]
}

export const Table: React.FC<TableProps> = ({ nodes }) => {
  const { open: openContentAddModal } = useModal('addContent')

  const handleAddContent = async () => {
    openContentAddModal()
  }

  return !nodes || nodes?.length === 0 ? (
    <>
      <AddContentButton>
        <Flex>
          <Button
            color="secondary"
            onClick={handleAddContent}
            size="medium"
            startIcon={<AddContentIcon />}
            type="submit"
            variant="contained"
          >
            Add Content
          </Button>
        </Flex>
      </AddContentButton>
    </>
  ) : (
    <MaterialTable component="table">
      <StyledTableHead>
        <TableRow component="tr">
          <StyledTableCell className="empty" />
          <StyledTableCell>Date</StyledTableCell>
          <StyledTableCell>Type</StyledTableCell>
          <StyledTableCell>Source</StyledTableCell>
          <StyledTableCell>Status</StyledTableCell>
        </TableRow>
      </StyledTableHead>
      <tbody>
        {nodes?.map((node) => (
          <TopicRow key={node?.ref_id} node={node} />
        ))}
      </tbody>
    </MaterialTable>
  )
}

const AddContentButton = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px auto;
  width: 100px;
`
