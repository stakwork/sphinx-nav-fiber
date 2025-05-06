import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import styled from 'styled-components'
import { Node } from '~/types'
import { colors } from '~/utils'
import { getSentimentIcon } from '~/utils/getSentimentIcon'
import { Avatar } from './avatar'
import { Post } from './post'
import { TableSkeleton } from './skeleton'

interface IProps {
  tweets: Node[]
  selectedIds: string[]
  isLoading: boolean
  onSelectTweet: (id: string) => void
}

const EMPTY_LINE = '-'

export const COLUMNS = [
  {
    id: 'avatar',
    label: '',
    align: 'center' as const,
    style: { verticalAlign: 'top', padding: '14px 0 0 16px' },
    render: (tweet: Node) => <Avatar name={tweet.properties?.name} url={tweet.properties?.image_url} />,
  },
  {
    id: 'post',
    label: 'Post',
    align: 'left' as const,
    style: { verticalAlign: 'top' },
    render: (tweet: Node) => (
      <Post
        name={tweet.properties?.name}
        text={tweet.properties?.text}
        twitterHandle={tweet.properties?.twitter_handle}
        verified={tweet.properties?.verified}
      />
    ),
  },
  {
    id: 'impressions',
    label: 'Impressions',
    align: 'left' as const,
    render: (tweet: Node) => tweet.properties?.impression_count || EMPTY_LINE,
  },
  {
    id: 'replies',
    label: 'Replies',
    align: 'left' as const,
    render: (tweet: Node) => tweet.properties?.reply_count || EMPTY_LINE,
  },
  {
    id: 'quotes',
    label: 'Quotes',
    align: 'left' as const,
    render: (tweet: Node) => tweet.properties?.quote_count || EMPTY_LINE,
  },
  {
    id: 'follower',
    label: 'Follower',
    align: 'left' as const,
    render: (tweet: Node) => tweet.properties?.follower_count || EMPTY_LINE,
  },
  {
    id: 'likes',
    label: 'Likes',
    align: 'left' as const,
    render: (tweet: Node) => tweet.properties?.like_count || EMPTY_LINE,
  },
  {
    id: 'retweets',
    label: 'Retweets',
    align: 'left' as const,
    render: (tweet: Node) => tweet.properties?.retweet_count || EMPTY_LINE,
  },
  {
    id: 'bookmarks',
    label: 'Bookmarks',
    align: 'left' as const,
    render: (tweet: Node) => tweet.properties?.bookmark_count || EMPTY_LINE,
  },
  {
    id: 'sentiment',
    label: 'Sentiment',
    align: 'center' as const,
    render: (tweet: Node) => getSentimentIcon(tweet.properties?.analytics_sentiment_score),
  },
  {
    id: 'v-f',
    label: 'V-F',
    align: 'center' as const,
    render: (tweet: Node) => tweet.properties?.v_f || EMPTY_LINE,
  },
  {
    id: 'status',
    label: 'Status',
    align: 'right' as const,
    style: { padding: '0 20px 0 0' },
    render: (tweet: Node) => (
      <StatusBadge status={tweet.properties?.status}>{tweet.properties?.status || 'unknown'}</StatusBadge>
    ),
  },
]

export const TweetsTable = ({ tweets, selectedIds = [], isLoading, onSelectTweet }: IProps) => {
  const handleSelectTweet = (id: string) => {
    if (onSelectTweet) {
      onSelectTweet(id)
    }
  }

  if (isLoading) {
    return <TableSkeleton rowCount={5} />
  }

  return (
    <Table aria-label="tweets table" stickyHeader>
      <TableHead>
        <StyledTableRow>
          {COLUMNS.map((column) => (
            <StyledTableCell
              key={column.id}
              align={column.align}
              className={column.id === 'avatar' ? 'avatar-cell' : ''}
            >
              {column.label}
            </StyledTableCell>
          ))}
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {tweets.map((tweet, index) => {
          const isSelected = selectedIds.includes(tweet.ref_id || '')

          return (
            <StyledTableRow
              key={tweet.ref_id}
              $even={index % 2 === 0}
              hover
              onClick={() => handleSelectTweet(tweet.ref_id || '')}
              selected={isSelected}
              sx={{ cursor: 'pointer' }}
            >
              {COLUMNS.map((column) => (
                <StyledTableCell key={column.id} align={column.align} style={column.style}>
                  {column.render(tweet)}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          )
        })}
        {tweets.length === 0 && (
          <StyledTableRow>
            <StyledTableCell align="center" colSpan={COLUMNS.length}>
              <Typography variant="body1">No Data</Typography>
            </StyledTableCell>
          </StyledTableRow>
        )}
      </TableBody>
    </Table>
  )
}

interface StyledRowProps {
  $even?: boolean
}

export const StyledTableRow = styled(TableRow)<StyledRowProps>`
  &.MuiTableRow-root {
    transition: all 0.3s ease;

    &:hover {
      background: ${colors.SEEDQUESTION_HOVER} !important;
    }

    &.Mui-selected {
      background: ${colors.SEEDQUESTION};

      &:hover {
        background: ${colors.SEEDQUESTION} !important;
      }
    }

    background-color: ${({ $even }) => ($even ? colors.TABLE_ROW_BG : colors.TABLE_HEAD_BG)};
  }
`

export const StyledTableCell = styled(TableCell)`
  &.MuiTableCell-root {
    border-bottom: 1px solid ${colors.TABLE_BORDER_TRANSPARENT};
    color: ${colors.transparentWhite};
    height: 100px;
    padding: 19px 8px;

    font-size: 14px;
    font-weight: 400;
    font-family: Barlow;
  }

  &.MuiTableCell-head {
    padding: 4px;
    background: ${colors.TABLE_HEAD_BG};
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: ${colors.GRAY6};
    white-space: nowrap;
    height: 32px;
    border-bottom: 1px solid ${colors.TABLE_BORDER};
    border-top: 1px solid ${colors.TABLE_BORDER};

    &:last-child {
      padding: 0 20px 0 0;
    }
  }
`

interface StatusProps {
  status?: string
}

const getStatusStyles = (status?: string) => {
  switch (status) {
    case 'completed':
      return { bg: colors.STATUS_BG_SUCCESS, color: colors.STATUS_TEXT_SUCCESS }
    case 'pending':
      return { bg: colors.STATUS_BG_REJECTED, color: colors.STATUS_TEXT_REJECTED }
    default:
      return { bg: colors.STATUS_BG_DEFAULT, color: colors.STATUS_TEXT_DEFAULT }
  }
}

const StatusBadge = styled.div<StatusProps>`
  padding: 6px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 10%;
  display: inline-block;
  background: ${({ status }) => getStatusStyles(status).bg};
  color: ${({ status }) => getStatusStyles(status).color};
`
