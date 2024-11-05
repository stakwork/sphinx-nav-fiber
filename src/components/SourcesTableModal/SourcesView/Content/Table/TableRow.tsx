import React, { memo } from 'react'
import styled from 'styled-components'
import { Animation } from '~/components/Stats/Animation'
import { Node } from '~/network/fetchSourcesData'
import { colors, formatDate } from '~/utils'
import { StyledTableCell, StyledTableRow } from '../../common'
import { TWITTER_CONTENT_LINK } from '../../constants'

interface TableRowProps {
  node: Node
}

function toUpperCase(string: string) {
  return string.toUpperCase()
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
    <StyledTableCell>
      {(() => {
        const status = node?.properties?.status

        if (!status) {
          return (
            <>
              PROCESSING{' '}
              <AnimationContainer>
                <Animation id={`animation-${node.ref_id}`} />
              </AnimationContainer>
            </>
          )
        }

        const statusLower = (status as string).toLowerCase()

        if (statusLower === 'complete') {
          return <CompletedStatus>{toUpperCase(status)}</CompletedStatus>
        }

        return toUpperCase(status)
      })()}
    </StyledTableCell>
  </StyledTableRow>
)

const StyledLink = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  &:visited {
    color: ${colors.white};
  }
`

const CompletedStatus = styled.div`
  background-color: ${colors.COMPLETED_STATUS};
  color: ${colors.SUCESS};
  padding: 4px 10px;
  border-radius: 5px;
  font-size: 10px;
  font-family: 'Barlow';
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-align: right;
  display: inline-block;
`

const AnimationContainer = styled.div`
  display: inline-block;
  width: 2em;
  height: 2em;
  vertical-align: middle;
  margin-left: 0.5em;
`

export const TopicRow = memo(TableRowComponent)
