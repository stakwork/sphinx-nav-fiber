/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconButton } from '@mui/material'
import React, { memo, useState } from 'react'
import ThreeDotsIcons from '~/components/Icons/ThreeDotsIcons'
import { StyledTableCell, StyledTableRow } from '~/components/SourcesTableModal/SourcesView/common'

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

const TableRowComponent: React.FC<TableRowProps> = ({ schema, onOpenActions }) => {
  const [open, setOpen] = useState(false)

  return (
    <StyledTableRow>
      <StyledTableCell className="empty" />
      <StyledTableCell>{capitalizeFirstLetter(schema.type ?? '')}</StyledTableCell>
      <StyledTableCell>
        <IconButton disabled={schema?.type === 'thing'} onClick={() => setOpen(!open)}>
          <ThreeDotsIcons data-testid="ThreeDotsIcons" />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  )
}

export const TopicRow = memo(TableRowComponent)

// disabled={schema?.type === 'thing'} onClick={() => onOpenActions(schema)}
