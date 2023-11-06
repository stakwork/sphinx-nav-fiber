import { Divider } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { useTopicsStore } from '~/stores/useTopicsStore'

export const Search = () => {
  const [filters, setFilters] = useTopicsStore((s) => [s.filters, s.setFilters])
  const [inputValue, setInputValue] = useState('')

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setFilters({ search: inputValue })
  }

  const resetSearch = () => {
    setInputValue('')

    if (filters.search) {
      setFilters({ search: '' })
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSearch}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
    >
      <InputBase
        inputProps={{ 'aria-label': 'search topic' }}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search"
        size="small"
        sx={{ ml: 1, flex: 1 }}
        value={inputValue}
      />
      {inputValue && (
        <>
          <StyledButton aria-label="search" onClick={resetSearch} type="button">
            <ClearIcon />
          </StyledButton>
          <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
        </>
      )}
      <StyledButton aria-label="search" onClick={handleSearch} type="button">
        <SearchIcon />
      </StyledButton>
    </Paper>
  )
}

const StyledButton = styled(IconButton)`
  font-size: 24px;
`
