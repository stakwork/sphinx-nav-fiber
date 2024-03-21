import React, { memo } from 'react'

import { StyledTableRow, StyledTableCell } from '~/components/SourcesTableModal/SourcesView/common'

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
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const TableRowComponent: React.FC<TableRowProps> = ({ schema }) => (
  <StyledTableRow>
    <StyledTableCell className="empty" />
    <StyledTableCell>{capitalizeFirstLetter(schema.type ?? '')}</StyledTableCell>
  </StyledTableRow>
)

export const TopicRow = memo(TableRowComponent)
