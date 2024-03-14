import { Table as MaterialTable, Popover, TableRow } from '@mui/material'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import FilterOffIcon from '~/components/Icons/FilterOffIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useAppStore } from '~/stores/useAppStore'
import { useModal } from '~/stores/useModalStore'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { colors } from '~/utils/colors'
import { StyledTableCell, StyledTableHead } from '../../common'
import { TopicTableProps } from '../../types'
import { TopicRow } from './TableRow'
import SortFilterIcon from '~/components/Icons/SortFilterIcon'
import CheckedIcon from '~/components/Icons/CheckedIcon'

interface CheckboxIconProps {
  checked?: boolean
}

export const Table: React.FC<TopicTableProps> = ({ setShowMuteUnmute, showMuted, onTopicEdit, onChangeFilter }) => {
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
                    Name <SortFilterIcon />
                  </SortedIcon>
                </StyledTableCell>
                <StyledTableCell>
                  <SortedIcon onClick={() => handleChange('Edge Count')}>
                    Count <SortFilterIcon />
                  </SortedIcon>
                </StyledTableCell>
                <StyledTableCell>Edge list</StyledTableCell>
                <StyledTableCell>
                  <SortedIcon onClick={() => handleChange('Date')}>
                    Date <SortFilterIcon />
                  </SortedIcon>
                </StyledTableCell>
                <StyledTableCell>
                  <CheckboxSection onClick={setShowMuteUnmute}>
                    <CheckboxIcon checked={showMuted}>
                      <Checkmark>{showMuted && <CheckedIcon />}</Checkmark>
                    </CheckboxIcon>
                    Muted
                  </CheckboxSection>
                </StyledTableCell>
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
              <PopoverOption onClick={() => handlePopoverAction('editTopic')}>Rename</PopoverOption>

              <PopoverOption onClick={() => handlePopoverAction('mergeTopic')}>Merge</PopoverOption>
              <PopoverOption onClick={() => handlePopoverAction('addEdge')}>Add edge</PopoverOption>
            </PopoverWrapper>
          ) : null}
        </>
      )}
    </>
  )
}

const CheckboxSection = styled.td`
  cursor: pointer;
  display: flex;
  align-items: center;
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
  margin-right: 8px;
`

const Checkmark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`

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
