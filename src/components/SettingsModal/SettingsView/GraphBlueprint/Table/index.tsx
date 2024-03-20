import { Button, Table as MaterialTable, TableRow } from '@mui/material'
import React from 'react'
import { StyledTableHead, StyledTableCell } from '~/components/SourcesTableModal/SourcesView/common'
import { TopicRow } from './TableRow'
import { Flex } from '~/components/common/Flex'
import { useModal } from '~/stores/useModalStore'
import PlusIcon from '~/components/Icons/PlusIcon'
import styled from 'styled-components'
import { Schema } from '~/network/fetchSourcesData'

interface TableProps {
  schemas: Schema[]
}

export const Table: React.FC<TableProps> = ({ schemas }) => {
  const { open: openContentAddModal } = useModal('addItem')

  const handleAddContent = async () => {
    openContentAddModal()
  }

  return (
    <>
      <MaterialTable component="table">
        <StyledTableHead>
          <TableRow component="tr">
            <StyledTableCell className="empty" />
            <StyledTableCell>Type</StyledTableCell>
          </TableRow>
        </StyledTableHead>
        <tbody>
          {schemas?.map((schema) => (
            <TopicRow key={schema?.ref_id} schema={schema} />
          ))}
        </tbody>
      </MaterialTable>
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
