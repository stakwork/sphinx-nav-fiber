import { Table as MaterialTable, Popover, TableRow } from '@mui/material'
// import moment from 'moment'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import AddCircleIcon from '~/components/Icons/AddCircleIcon'
import EditTopicIcon from '~/components/Icons/EditTopicIcon'
import FilterOffIcon from '~/components/Icons/FilterOffIcon'
import MergeIcon from '~/components/Icons/MergeIcon'
import VisibilityOff from '~/components/Icons/VisibilityOff'
import VisibilityOn from '~/components/Icons/VisibilityOn'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useAppStore } from '~/stores/useAppStore'
import { useModal } from '~/stores/useModalStore'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { colors } from '~/utils/colors'
import { StyledTableCell, StyledTableHead } from '../../common'
import { IS_ALIAS } from '../../constants'
import { TopicTableProps } from '../../types'
import { TopicRow } from './TableRow'

export const Table: React.FC<TopicTableProps> = ({ showMuted, onTopicEdit }) => {
  const { close } = useModal('sourcesTable')

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [selectedRefId, setSelectedRefId] = React.useState<string>('')

  const [setSearchFormValue, setCurrentSearch] = useAppStore((s) => [s.setSearchFormValue, s.setCurrentSearch])
  const [data, ids] = useTopicsStore((s) => [s.data, s.ids])

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>, refId: string) => {
    setAnchorEl(event.currentTarget)
    setSelectedRefId(refId)
  }, [])

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSearch = (search: string) => {
    setSearchFormValue(search)
    setCurrentSearch(search)
    close()
  }

  const handlePopoverAction = (action: string) => {
    onTopicEdit(selectedRefId, action)
    handleClose()
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return !data ? (
    <Flex>
      <Text>There is not any results for selected filters</Text>
      <FilterOffIcon />
    </Flex>
  ) : (
    <>
      {!Object.keys(data).length ? (
        <Flex>
          <Text>There is not any results for selected filters</Text>
          <FilterOffIcon />
        </Flex>
      ) : (
        <>
          <MaterialTable component="table">
            <StyledTableHead>
              <TableRow component="tr">
                <StyledTableCell className="empty" />
                <StyledTableCell>Type</StyledTableCell>
                <StyledTableCell>Edge Count</StyledTableCell>
                <StyledTableCell>Edge list</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>{showMuted ? 'Unmute' : 'Mute'}</StyledTableCell>
                <StyledTableCell />
              </TableRow>
            </StyledTableHead>
            {data && (
              <tbody>
                {ids?.map((i: string) => (
                  <TopicRow key={i} onClick={handleClick} onSearch={handleSearch} topic={data[i]} />
                ))}
              </tbody>
            )}
          </MaterialTable>
          {selectedRefId ? (
            <PopoverWrapper
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              id={id}
              onClose={handleClose}
              open={open}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {showMuted ? (
                <PopoverOption onClick={() => handlePopoverAction('unMute')}>
                  {' '}
                  <VisibilityOn data-testid="" /> Unmute
                </PopoverOption>
              ) : (
                <PopoverOption onClick={() => handlePopoverAction('mute')}>
                  {' '}
                  <VisibilityOff data-testid="VisibilityOff" /> Mute
                </PopoverOption>
              )}
              <PopoverOption onClick={() => handlePopoverAction('editTopic')}>
                <EditTopicIcon data-testid="EditTopicIcon" /> Rename
              </PopoverOption>
              {!data[selectedRefId].edgeList.includes(IS_ALIAS) ? (
                <PopoverOption onClick={() => handlePopoverAction('mergeTopic')}>
                  <MergeIcon data-testid="MergeIcon" /> Merge
                </PopoverOption>
              ) : null}
              <PopoverOption onClick={() => handlePopoverAction('addEdge')}>
                <AddCircleIcon data-testid="AddCircleIcon" /> Add edge
              </PopoverOption>
            </PopoverWrapper>
          ) : null}
        </>
      )}
    </>
  )
}

const PopoverOption = styled(Flex).attrs({
  direction: 'row',
  px: 12,
  py: 8,
})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${colors.BUTTON1};
  color: ${colors.white};

  &:hover {
    background: ${colors.BUTTON1_HOVER};
    color: ${colors.GRAY3};
  }
`

const PopoverWrapper = styled(Popover)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${colors.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`
