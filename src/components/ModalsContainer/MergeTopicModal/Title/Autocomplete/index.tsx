import { Divider, IconButton, InputBase, Paper, Popper } from '@mui/material'
import clsx from 'clsx'
import { debounce } from 'lodash'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { ALPHABETICALLY } from '~/components/SourcesTableModal/SourcesView/constants'
import { Flex } from '~/components/common/Flex'
import { getTopicsData } from '~/network/fetchSourcesData'
import { FetchTopicResponse, Topic } from '~/types'
import { colors } from '~/utils/colors'

type Props = {
  onSelect: (topic: Topic | null) => void
  selectedTopic: Topic | null
}

export const DropdownSearch: React.FC<Props> = ({ onSelect, selectedTopic }) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [options, setOptions] = useState<Topic[]>([])
  const [optionsIsLoading, setOptionsIsLoading] = useState(false)
  const inputRef = useRef<HTMLFormElement>(null)

  useEffect(() => () => setOptions([]), [setOptions])

  const handleSearch = async (val: string) => {
    const filters = {
      is_muted: 'False',
      sort_by: ALPHABETICALLY,
      search: val,
      skip: '0',
      limit: '1000',
    }

    setOptionsIsLoading(true)

    try {
      const responseData: FetchTopicResponse = await getTopicsData(filters)

      setOptions(responseData.data)
    } catch (error) {
      setOptions([])
    } finally {
      setOptionsIsLoading(false)
    }
  }

  const debouncedSearch = useMemo(() => debounce(handleSearch, 300), [])

  const handleSelectChange = (val: Topic) => {
    onSelect(val)
  }

  const handleChange = (e: string) => {
    setSearch(e)

    if (!e) {
      setOptions([])

      return
    }

    if (e.length > 2) {
      debouncedSearch(e)
    }
  }

  return selectedTopic ? (
    <SelectedValue>
      <div className="value">{selectedTopic.name}</div>
      <Flex className="icon" onClick={() => onSelect(null)}>
        <ClearIcon />
      </Flex>
    </SelectedValue>
  ) : (
    <>
      <Paper
        ref={inputRef}
        component="form"
        onSubmit={(e) => e.preventDefault()}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 }}
      >
        <InputBase
          inputProps={{ 'aria-label': 'search topic' }}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsPopperOpen(true)}
          placeholder="Search"
          size="small"
          sx={{ ml: 1, flex: 1 }}
          value={search}
        />
        {search && (
          <>
            <StyledButton aria-label="search" onClick={() => handleChange('')} type="button">
              <ClearIcon />
            </StyledButton>
            <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
          </>
        )}
        <StyledButton aria-label="search" type="button">
          {optionsIsLoading ? <ClipLoader color={colors.white} size={24} /> : <SearchIcon />}
        </StyledButton>
      </Paper>
      {inputRef.current && options.length ? (
        <StyledPopover anchorEl={inputRef.current} open={isPopperOpen} placement="bottom">
          <>
            {options.map((option) => (
              <MenuItem
                key="option"
                className={clsx({ active: selectedTopic === option.ref_id })}
                onClick={() => handleSelectChange(option)}
              >
                {option.name}
              </MenuItem>
            ))}
          </>
        </StyledPopover>
      ) : null}
    </>
  )
}

const MenuItem = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  overflow: hidden;
  width: 200px;
  color: ${colors.GRAY3};
  margin-bottom: 4px;
  cursor: pointer;
  &.active {
    color: ${colors.white};
  }
  &:hover {
    color: ${colors.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`

const StyledPopover = styled(Popper)`
  && {
    z-index: 99999;
    background: ${colors.BUTTON1};
    min-width: 200px;
    padding: 16px;
    color: ${colors.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
  }
`

const SelectedValue = styled(Flex).attrs({
  direction: 'row',
  justify: 'flex-start',
  align: 'center',
})`
  .value {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    color: ${colors.white};
    background: ${colors.primaryBlue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`

const StyledButton = styled(IconButton)`
  font-size: 24px;
`
