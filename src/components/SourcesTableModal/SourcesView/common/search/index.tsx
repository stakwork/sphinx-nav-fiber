import IconButton from '@mui/material/IconButton'
import InputBase, { InputBaseProps } from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import { debounce } from 'lodash'
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

interface SearchProps extends Omit<InputBaseProps, 'onChange'> {
  onSearch: (query: string) => void
  placeholder?: string
  activeIcon?: React.ReactNode
  defaultIcon?: React.ReactNode
  loadingIcon?: React.ReactNode
  loading: boolean
}

const Search: React.FC<SearchProps> = ({
  onSearch,
  placeholder,
  activeIcon,
  defaultIcon,
  loadingIcon,
  loading,
  ...props
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const resetSearch = () => {
    setSearchTerm('')
    onSearch('')
  }

  const handleSearch = useCallback(
    (value: string) => {
      onSearch(value)
    },
    [onSearch],
  )

  const debouncedSearch = useMemo(() => debounce(handleSearch, 300), [handleSearch])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim()

    const { value } = e.target

    setSearchTerm(value)

    if (!trimmedValue) {
      resetSearch()
    } else {
      debouncedSearch(trimmedValue)
    }
  }

  const getSearchIcon = () => {
    if (loading) {
      return (
        <IconWrapper>
          <StyledButton type="button">{loadingIcon}</StyledButton>
        </IconWrapper>
      )
    }

    return (
      <IconWrapper>
        {searchTerm ? (
          <StyledButton onClick={resetSearch} type="button">
            {activeIcon}
          </StyledButton>
        ) : (
          <StyledButton type="button">{defaultIcon}</StyledButton>
        )}
      </IconWrapper>
    )
  }

  return (
    <Wrapper>
      <StyledInput
        autoComplete="off"
        autoCorrect="off"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        placeholder={placeholder}
        value={searchTerm}
        {...props}
      />
      {getSearchIcon()}
    </Wrapper>
  )
}

const IconWrapper = styled(Flex)`
  top: -50%;
  right: -3%;
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
    box-sizing: border-box;
    padding-top: 0px;
  }
`

const StyledInput = styled(InputBase)`
  -webkit-autofill,
  -webkit-autocomplete,
  -webkit-contacts-auto-fill,
  -webkit-credentials-auto-fill {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0 !important;
  }

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
    padding: 0px 34px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${colors.white};
      background-color: ${colors.BG2_ACTIVE_INPUT};
      outline: 1px solid ${colors.primaryBlue};
    }

    &:hover {
      background-color: ${colors.BG2_ACTIVE_INPUT};
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
  width: 100%;
`

export default Search
