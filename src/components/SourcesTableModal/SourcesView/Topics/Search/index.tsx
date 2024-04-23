import IconButton from '@mui/material/IconButton'
import InputBase, { InputBaseProps } from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import { debounce } from 'lodash'
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { colors } from '~/utils/colors'

interface SearchProps extends Omit<InputBaseProps, 'onChange'> {
  placeholder?: string
  activeIcon?: React.ReactNode
  defaultIcon?: React.ReactNode
  loadingIcon?: React.ReactNode
  loading: boolean
}

const Search: React.FC<SearchProps> = ({ placeholder, activeIcon, loadingIcon, defaultIcon, loading, ...props }) => {
  const [filters, setFilters] = useTopicsStore((s) => [s.filters, s.setFilters])
  const [searchValue, setSearchValue] = useState('')

  const resetSearch = () => {
    setFilters({ search: '' })
  }

  const handleSearch = useCallback(
    (value: string) => {
      setFilters({ search: value })
    },
    [setFilters],
  )

  const debouncedSearch = useMemo(() => debounce(handleSearch, 300), [handleSearch])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setSearchValue(value)

    if (!e.target.value) {
      setFilters({ search: '' })
    }

    if (e.target.value.length > 2) {
      debouncedSearch(e.target.value)
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
        {filters.search ? (
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
        inputProps={{ 'aria-label': 'search sources' }}
        onChange={handleChange}
        placeholder={placeholder}
        value={searchValue}
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
