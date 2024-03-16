import React, { memo } from 'react'
import { StyledTableCell, StyledTableRow } from '../../common'
import { Node } from '~/network/fetchSourcesData'
import styled from 'styled-components'
import { colors } from '~/utils'

interface TableRowProps {
  node: Node
}

const TableRowComponent: React.FC<TableRowProps> = ({ node }) => {
  function formatDate(dateString: never) {
    const date = new Date(Number(dateString) * 1000)

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const formattedDate = `${day}/${month}/${year}`

    return formattedDate
  }

  const twitterLink = 'https://www.twitter.com/anyuser/status/'

  return (
    <StyledTableRow>
      <StyledTableCell className="empty" />
      <StyledTableCell>
        {node?.properties?.date_added_to_graph
          ? formatDate(node?.properties?.date_added_to_graph)
          : formatDate(node?.properties?.date)}
      </StyledTableCell>
      <StyledTableCell>{node?.node_type}</StyledTableCell>
      <StyledTableCell>
        {node?.node_type === 'Tweet' ? (
          <StyledLink href={`${twitterLink}${node?.properties?.tweet_id}`} target="_blank">
            {node?.properties?.tweet_id}
          </StyledLink>
        ) : (
          <StyledLink href={node?.properties?.source_link} target="_blank">
            {node?.properties?.source_link}
          </StyledLink>
        )}
      </StyledTableCell>
      <StyledTableCell>{node?.properties?.status ? node?.properties?.status : 'processing'}</StyledTableCell>
    </StyledTableRow>
  )
}

const StyledLink = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  &:visited {
    color: ${colors.white};
  }
`

export const TopicRow = memo(TableRowComponent)
