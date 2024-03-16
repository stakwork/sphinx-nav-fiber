import React, { memo } from 'react'
import { StyledTableCell, StyledTableRow } from '../../common'
import { Node } from '~/network/fetchSourcesData'
import { formatDate } from '~/utils'

interface TableRowProps {
  node: Node
}

const TableRowComponent: React.FC<TableRowProps> = ({ node }) => (
  <StyledTableRow>
    <StyledTableCell className="empty" />
    <StyledTableCell>
      {node?.properties?.date_added_to_graph
        ? formatDate(node?.properties?.date_added_to_graph)
        : formatDate(node?.properties?.date)}
    </StyledTableCell>
    <StyledTableCell>{node?.node_type}</StyledTableCell>
    <StyledTableCell>
      {node?.node_type === 'Tweet' ? node?.properties?.tweet_id : node?.properties?.source_link}
    </StyledTableCell>
    <StyledTableCell>{node?.properties?.status ? node?.properties?.status : 'processing'}</StyledTableCell>
  </StyledTableRow>
)

export const TopicRow = memo(TableRowComponent)
