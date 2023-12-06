import { Table as MaterialTable, Popover, TableRow } from '@mui/material'
// import moment from 'moment'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import FilterOffIcon from '~/components/Icons/FilterOffIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { colors } from '~/utils/colors'
import { StyledTableCell, StyledTableHead } from '../../common'
import { IS_ALIAS } from '../../constants'
import { TopicTableProps } from '../../types'
import { TopicRow } from './TableRow'

export const Table: React.FC<TopicTableProps> = ({ showMuted, onTopicEdit }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [selectedRefId, setSelectedRefId] = React.useState<string>('')

  const [data, ids, filters] = useTopicsStore((s) => [s.data, s.ids, s.filters])

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>, refId: string) => {
    setAnchorEl(event.currentTarget)
    setSelectedRefId(refId)
  }, [])

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handlePopoverAction = (action: string) => {
    onTopicEdit(selectedRefId, action)
    handleClose()
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return Object.keys(data || {}).length === 0 || !filters.search ? (
    <Flex>
      <Text>{!filters.search ? 'Search for topics' : 'No results found for the searched topic'}</Text>
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
              <TopicRow key={i} onClick={handleClick} topic={data[i]} />
            ))}
          </tbody>
        )}
      </MaterialTable>
      {selectedRefId && data && data[selectedRefId] ? (
        <PopoverWrapper
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          id={id}
          onClose={handleClose}
          open={open}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <PopoverOption onClick={() => handlePopoverAction('editTopic')}>Rename</PopoverOption>
          {!data[selectedRefId].edgeList.includes(IS_ALIAS) ? (
            <PopoverOption onClick={() => handlePopoverAction('mergeTopic')}>Merge</PopoverOption>
          ) : null}
          <PopoverOption onClick={() => handlePopoverAction('addEdge')}>Add edge</PopoverOption>
        </PopoverWrapper>
      ) : null}
    </>
  )
}

const PopoverOption = styled(Flex).attrs({
  direction: 'row',
  px: 16,
  py: 8,
})`
  cursor: pointer;
  background: ${colors.BUTTON1};
  color: ${colors.white};

  &:hover {
    background: ${colors.BUTTON1_HOVER};
    color: ${colors.GRAY3};
  }

  & + & {
    border-top: 1px solid ${colors.black};
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
