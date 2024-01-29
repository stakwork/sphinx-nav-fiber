import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

type Props = {
  onSearch: (v: string) => void
  placeholder?: string
}

export const Search = ({ onSearch, placeholder }: Props) => {
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
      <Input
        autoComplete="off"
        autoCorrect="off"
        inputProps={{ 'aria-label': 'search sources' }}
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSearch(event)
          }
        }}
        placeholder={placeholder}
        size="small"
        spellCheck="false"
        sx={{ ml: 1, flex: 1, fontSize: 14, alignSelf: 'center' }}
        value={inputValue}
      />
      <IconWrapper>
        {inputValue ? (
          <StyledButton onClick={resetSearch} type="button">
            <ClearIcon />
          </StyledButton>
        ) : (
          <StyledButton onClick={handleSearch} type="button">
            <SearchIcon />
          </StyledButton>
        )}
      </IconWrapper>
    </Wrapper>
  )
}

const IconWrapper = styled(Flex)`
  top: -50%;
  right: -2%;
  z-index: 3;
  position: absolute;
  transform: translate(-50%, 50%);
`

const StyledButton = styled(IconButton)`
  font-size: 24px;
`

const Wrapper = styled(Paper)`
  && {
    width: 100%;
    height: 40px;
    display: flex;
    max-width: 637px;
    position: relative;
    align-items: center;
    margin: 0 0 16px 36px;
    box-sizing: border-box;
    padding-top: 0px;
  }

  .css-f0ngwu-MuiInputBase-root {
    margin: 0px !important;
  }
`

const Input = styled(InputBase)`
  .MuiInputBase-input {
    z-index: 2;
    width: 100%;
    height: 48px;
    height: 40px;
    color: #fff;
    font-size: 15px;
    box-shadow: none;
    border-radius: 6px;
    pointer-events: auto;
    background-color: ${colors.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${colors.white};
      background-color: ${colors.BG2_ACTIVE};
      outline: 1px solid ${colors.primaryBlue};
    }

    &:hover {
      background-color: ${colors.BG2_ACTIVE};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${colors.GRAY7};
    }
  }
`
