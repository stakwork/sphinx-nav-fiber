import { Table as MaterialTable, TableRow } from '@mui/material'
import React from 'react'
import { StyledTableCell, StyledTableHead } from '~/components/SourcesTableModal/SourcesView/common'
import { Schema } from '~/network/fetchSourcesData'
import { TopicRow } from './TableRow'

interface TableProps {
  schemas: Schema[]
}

export const Table: React.FC<TableProps> = ({ schemas }) => (
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
          <TopicRow key={schema?.type} schema={schema} />
        ))}
      </tbody>
    </MaterialTable>
  </>
)
