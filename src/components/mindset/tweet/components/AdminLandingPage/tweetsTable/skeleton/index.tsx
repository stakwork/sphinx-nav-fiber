import { Skeleton, Table, TableBody, TableHead } from '@mui/material'
import { COLUMNS, StyledTableCell, StyledTableRow } from '../index'

interface TableSkeletonProps {
  rowCount?: number
}

const renderSkeletonForColumn = (columnId: string) => {
  switch (columnId) {
    case 'avatar':
      return <Skeleton height={46} variant="circular" width={46} />
    case 'post':
      return (
        <div>
          <Skeleton height={20} variant="text" width={120} />
          <Skeleton height={16} variant="text" width={80} />
          <Skeleton height={40} variant="text" width={220} />
        </div>
      )
    case 'status':
      return <Skeleton height={24} sx={{ marginLeft: 'auto' }} variant="rounded" width={80} />
    default:
      return <Skeleton height={24} variant="text" width={40} />
  }
}

export const TableSkeleton = ({ rowCount = 5 }: TableSkeletonProps) => (
  <Table aria-label="loading tweets table" stickyHeader>
    <TableHead>
      <StyledTableRow>
        {COLUMNS.map((column) => (
          <StyledTableCell key={column.id} align={column.align} className={column.id === 'avatar' ? 'avatar-cell' : ''}>
            {column.label}
          </StyledTableCell>
        ))}
      </StyledTableRow>
    </TableHead>
    <TableBody>
      {Array.from(new Array(rowCount)).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <StyledTableRow key={index} $even={index % 2 === 0}>
          {COLUMNS.map((column) => (
            <StyledTableCell key={column.id} align={column.align} style={column.style}>
              {renderSkeletonForColumn(column.id)}
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </TableBody>
  </Table>
)
