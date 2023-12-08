import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Button } from '@mui/material'
import CopyIcon from '~/components/Icons/CopyIcon'

interface RowData {
  name: string
  identifier: string
}

interface SimpleTableProps {
  data: RowData[]
  onRemove: (identifier: string) => void
}



const SimpleTable: React.FC<SimpleTableProps> = ({ data, onRemove }) => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.identifier}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell>
              {row.identifier} <CopyIcon />
            </TableCell>
            <TableCell>
              <Button onClick={() => onRemove(row.identifier)} variant="contained">
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default SimpleTable
