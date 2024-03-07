import { Table as MaterialTable, Popover, TableRow } from '@mui/material'
// import moment from 'moment'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import FilterOffIcon from '~/components/Icons/FilterOffIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useAppStore } from '~/stores/useAppStore'
import { useModal } from '~/stores/useModalStore'
// import { useTopicsStore } from '~/stores/useTopicsStore'
import { colors } from '~/utils/colors'
import { StyledTableCell, StyledTableHead } from '../../common'
import { IS_ALIAS } from '../../constants'
import { TopicTableProps } from '../../types'
import { TopicRow } from './TableRow'
import { Topic } from '~/types'
import { MdSort } from 'react-icons/md'

export const Table: React.FC<TopicTableProps> = ({ showMuted, onTopicEdit, onChangeFilter }) => {
  const { close } = useModal('sourcesTable')

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [selectedRefId, setSelectedRefId] = React.useState<string>('')

  const [setSearchFormValue, setCurrentSearch] = useAppStore((s) => [s.setSearchFormValue, s.setCurrentSearch])
  // const [data, ids] = useTopicsStore((s) => [s.data, s.ids])

  const data: Topic[] = [
    {
      topic: 'Privacy Confirmation',
      edgeCount: 4830,
      edgeList: ['RELATED_TO', 'IS_ALIAS', 'MENTIONS', 'IS_SUMMARIZED'],
      date_added_to_graph: '1644115200',
      muted_topic: 'false',
      ref_id: '0',
    },
    {
      topic: 'Absence of Documents',
      edgeCount: 630,
      edgeList: ['RELATED_TO', 'IS_ALIAS', 'MENTIONS', 'IS_SUMMARIZED'],
      date_added_to_graph: '1644115200',
      muted_topic: 'true',
      ref_id: '1',
    },
    {
      topic: 'Year 2009',
      edgeCount: 130,
      edgeList: ['RELATED_TO', 'IS_ALIAS', 'MENTIONS', 'IS_SUMMARIZED'],
      date_added_to_graph: '1644115200',
      muted_topic: 'true',
      ref_id: '2',
    },
  ]

  const ids: string[] = data.map((topic, index) => String(index))

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

  const handleChange = (option: string) => {
    onChangeFilter(option)
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
                <StyledTableCell>
                  <SortedIcon onClick={() => handleChange('Alphabetically')}>
                    Name <MdSort color={colors.GRAY7} fontSize={15} />
                  </SortedIcon>
                </StyledTableCell>
                <StyledTableCell>
                  <SortedIcon onClick={() => handleChange('Edge Count')}>
                    Count <MdSort color={colors.GRAY7} fontSize={15} />
                  </SortedIcon>
                </StyledTableCell>
                <StyledTableCell>Edge list</StyledTableCell>
                <StyledTableCell>
                  <SortedIcon onClick={() => handleChange('Date')}>
                    Date <MdSort color={colors.GRAY7} fontSize={15} />
                  </SortedIcon>
                </StyledTableCell>
                <StyledTableCell>{showMuted ? 'Unmute' : 'Mute'}</StyledTableCell>
                <StyledTableCell />
              </TableRow>
            </StyledTableHead>
            {data && (
              <tbody>
                {ids?.map((i: string) => (
                  <TopicRow key={i} onClick={handleClick} onSearch={handleSearch} topic={data[parseInt(i, 10)]} />
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
              <PopoverOption onClick={() => handlePopoverAction('editTopic')}>Rename</PopoverOption>
              {!data[parseInt(selectedRefId, 10)].edgeList.includes(IS_ALIAS) ? (
                <PopoverOption onClick={() => handlePopoverAction('mergeTopic')}>Merge</PopoverOption>
              ) : null}
              <PopoverOption onClick={() => handlePopoverAction('addEdge')}>Add edge</PopoverOption>
            </PopoverWrapper>
          ) : null}
        </>
      )}
    </>
  )
}

const SortedIcon = styled.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`

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
