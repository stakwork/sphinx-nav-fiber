import { IconButton, Popover, Typography } from '@mui/material'
import React, { FC, memo, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import ProfileHide from '~/components/Icons/PropertyHide'
import ProfileShow from '~/components/Icons/PropertyShow'
import ThreeDotsIcons from '~/components/Icons/ThreeDotsIcons'
import { Flex } from '~/components/common/Flex'
import { putNodeData } from '~/network/fetchSourcesData'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { Topic } from '~/types'
import { formatDate } from '~/utils'
import { colors } from '~/utils/colors'
import { StyledTableCell, StyledTableRow } from '../../common'

type TTableRaw = {
  topic: Topic
  onClick: (event: React.MouseEvent<HTMLButtonElement>, refId: string) => void
  onSearch: (search: string) => void
}

const TableRowComponent: FC<TTableRaw> = ({ topic, onClick, onSearch }) => {
  const [ids, total] = useTopicsStore((s) => [s.ids, s.total])
  const [loading, setLoading] = useState(false)

  const date = formatDate(topic.date_added_to_graph)

  const handleMute = async (refId: string, shouldMute: boolean) => {
    setLoading(true)

    try {
      await putNodeData(refId, { muted_topic: shouldMute })

      useTopicsStore.setState({
        ids: ids.filter((i) => i !== refId),
        total: total - 1,
      })
    } catch (error) {
      console.warn(error)
    }
  }

  const handleClickTopic = (topicItem: Topic) => {
    onSearch(topicItem.topic)
  }

  const lettersToShow = topic.edgeList.slice(0, 1)
  const hiddenLettersCount = topic.edgeList.length - lettersToShow.length

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <StyledTableRow key={topic.topic}>
      <StyledTableCell className="empty" />
      <StyledTableCell onClick={() => handleClickTopic(topic)}>
        <ClickableText>{topic.topic}</ClickableText>
      </StyledTableCell>
      <StyledTableCell>{topic.edgeCount}</StyledTableCell>
      <StyledTableCell>
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          disableRestoreFocus
          id="mouse-over-popover"
          onClose={handlePopoverClose}
          open={open}
          sx={{
            pointerEvents: 'none',
            '& .MuiPaper-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              borderRadius: '4px',
              width: '160px',
            },
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Typography sx={{ p: 1.5, fontSize: '13px', fontWeight: 400, lineHeight: '1.8', wordWrap: 'break-word' }}>
            {topic.edgeList.join(', ')}
          </Typography>
        </Popover>
        {lettersToShow.join(', ')}
        {hiddenLettersCount > 0 && (
          <Typography
            aria-haspopup="true"
            aria-owns={open ? 'mouse-over-popover' : undefined}
            component="span"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{ cursor: 'context-menu' }}
          >
            ,...
          </Typography>
        )}
      </StyledTableCell>
      <StyledTableCell>
        <span>{date}</span>
      </StyledTableCell>

      <StyledTableCell className="cell-center">
        <Flex direction="row" justify="space-between">
          <div className="approve-wrapper">
            {loading ? (
              <ClipLoader color={colors.white} size={16} />
            ) : (
              <Flex direction="row">
                {topic.muted_topic ? (
                  <IconButton className="centered" onClick={() => handleMute(topic.ref_id, false)}>
                    <ProfileShow />
                  </IconButton>
                ) : (
                  <IconButton className="centered" onClick={() => handleMute(topic.ref_id, true)}>
                    <ProfileHide />
                  </IconButton>
                )}
                <IconButton onClick={(e) => onClick(e, topic.ref_id)}>
                  <ThreeDotsIcons data-testid="ThreeDotsIcons" />
                </IconButton>
              </Flex>
            )}
          </div>
        </Flex>
      </StyledTableCell>
    </StyledTableRow>
  )
}

const ClickableText = styled.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`

export const TopicRow = memo(TableRowComponent)
