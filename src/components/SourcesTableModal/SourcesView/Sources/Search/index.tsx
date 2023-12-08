import { Divider } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchIcon from '~/components/Icons/SearchIcon'

type Props = {
  onSearch: (v: string) => void
}

export const Search = ({ onSearch }: Props) => {
  const [inputValue, setInputValue] = useState('')

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onSearch(inputValue)
  }

  const resetSearch = () => {
    setInputValue('')
    onSearch('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    !e.target.value && resetSearch()
    setInputValue(e.target.value)
  }

  return (
    <Wrapper onSubmit={handleSearch}>
      <InputBase
        autoComplete="off"
        autoCorrect="off"
        inputProps={{ 'aria-label': 'search sources' }}
        onChange={handleChange}
        placeholder="Search"
        size="small"
        spellCheck="false"
        sx={{ ml: 1, flex: 1, fontSize: 14, alignSelf: 'center' }}
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
    </Wrapper>
  )
}

const StyledButton = styled(IconButton)`
  font-size: 24px;
`

const Wrapper = styled(Paper)`
  && {
    padding: 2px 4px;
    display: flex;
    align-items: center;
    width: 300px;
    margin: 0 36px 16px 36px;
  }
`
