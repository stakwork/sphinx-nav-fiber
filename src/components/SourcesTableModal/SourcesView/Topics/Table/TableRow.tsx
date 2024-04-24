import { IconButton, Popover, Typography } from '@mui/material'
import React, { FC, memo, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import CheckIcon from '~/components/Icons/CheckIcon'
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
  checkedStates: { [refId: string]: boolean }
  setCheckedStates: React.Dispatch<React.SetStateAction<{ [refId: string]: boolean }>>
  isMuteDisabled?: boolean
}

interface CheckboxIconProps {
  checked?: boolean
}

const TableRowComponent: FC<TTableRaw> = ({
  topic,
  onClick,
  onSearch,
  checkedStates,
  setCheckedStates,
  isMuteDisabled,
}) => {
  const [ids, total] = useTopicsStore((s) => [s.ids, s.total])
  const [loading, setLoading] = useState(false)

  const date = formatDate(topic.date_added_to_graph)

  const handleMute = async (refId: string, shouldMute: boolean) => {
    setLoading(true)

    try {
      await putNodeData(refId, { is_muted: shouldMute })

      useTopicsStore.setState({
        ids: ids.filter((i) => i !== refId),
        total: total - 1,
      })
    } catch (error) {
      console.warn(error)
    }
  }

  const handleSelect = (refId: string) => {
    setCheckedStates((prev) => ({
      ...prev,
      [refId]: !prev[refId],
    }))
  }

  const handleClickTopic = (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>, topicItem: Topic) => {
    if (window.getSelection()?.toString()) {
      event.preventDefault()
    } else {
      onSearch(topicItem.name)
    }
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

  const checkboxVisibleClass = checkedStates[topic.ref_id] ? 'visible' : ''

  return (
    <StyledTableRow key={topic.name} className={checkedStates[topic.ref_id] ? 'checked' : ''}>
      <StyledTableCell>
        <CheckboxSection
          className={`checkbox-section ${checkboxVisibleClass}`}
          onClick={() => handleSelect(topic.ref_id)}
        >
          <CheckboxIcon checked={checkedStates[topic.ref_id]}>
            <Checkmark>{checkedStates[topic.ref_id] && <CheckIcon />}</Checkmark>
          </CheckboxIcon>
        </CheckboxSection>
      </StyledTableCell>
      <StyledTableCell onClick={(event) => handleClickTopic(event, topic)}>
        <ClickableText>{topic.name}</ClickableText>
      </StyledTableCell>
      <StyledTableCell>{topic.node_type}</StyledTableCell>
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
              <ClipLoaderWrapper>
                <ClipLoader color={colors.white} size={16} />
              </ClipLoaderWrapper>
            ) : (
              <Flex direction="row">
                {topic.is_muted ? (
                  <IconButton
                    className="centered"
                    disabled={isMuteDisabled}
                    onClick={() => handleMute(topic.ref_id, false)}
                  >
                    <ProfileShow />
                  </IconButton>
                ) : (
                  <IconButton
                    className="centered"
                    disabled={isMuteDisabled}
                    onClick={() => handleMute(topic.ref_id, true)}
                  >
                    <ProfileHide />
                  </IconButton>
                )}
                <IconButton disabled={isMuteDisabled} onClick={(e) => onClick(e, topic.ref_id)}>
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

const ClipLoaderWrapper = styled.span`
  margin-left: 12px;
`

const ClickableText = styled.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`

const CheckboxSection = styled.td`
  visibility: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.visible {
    visibility: visible;
  }
`

const CheckboxIcon = styled.div<CheckboxIconProps>`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({ checked }) => (checked ? '#618AFF' : '2px solid #CCCCCC')};
  background-color: ${({ checked }) => (checked ? '#618AFF' : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`

const Checkmark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`

export const TopicRow = memo(TableRowComponent)
