import React, { memo } from 'react'
import { StyledTableCell, StyledTableRow } from '../../common'
import { TWITTER_CONTENT_LINK } from '../../constants'
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
          <StyledLink
            href={`${TWITTER_CONTENT_LINK}${node?.properties?.tweet_id}${
              TWITTER_CONTENT_LINK.includes('?') ? '&' : '?'
            }open=system`}
            target="_blank"
          >
            {node?.properties?.tweet_id}
          </StyledLink>
        ) : (
          <StyledLink
            href={`${node?.properties?.source_link as string}${
              (node?.properties?.source_link as string).includes('?') ? '&' : '?'
            }open=system`}
            target="_blank"
          >
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
