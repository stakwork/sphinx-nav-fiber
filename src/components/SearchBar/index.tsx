import { useFormContext } from 'react-hook-form'
import styled, { css } from 'styled-components'
import { colors } from '~/utils/colors'
import React from 'react';

type Props = {
  loading?: boolean
  onSubmit?: () => void
}

const Input = styled.input.attrs(() => ({
  autoCorrect: 'off',
  autoComplete: 'off',
}))<{ loading?: boolean }>`
  pointer-events: auto;
  height: 48px;
  padding: 0 20px;
  z-index: 2;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  color: #fff;
  box-shadow: none;
  border: none;
  border-radius: 200px;
  background: ${colors.BG2};

  &:focus {
    outline: 1px solid ${colors.primaryBlue};
  }

  &:hover {
    background: ${colors.black};
  }

  &::placeholder {
    color: ${colors.GRAY7};
  }

  ${({ loading }) =>
    loading &&
    css`
      background-image: url('https://i.gifer.com/ZZ5H.gif');
      background-size: 25px 25px;
      background-position: right center;
      background-position-x: 95%;
      background-repeat: no-repeat;
    `}
`

export const SearchBar = ({ loading, onSubmit }: Props) => {
  const { register } = useFormContext()

  return (
    <Input
      {...register('search')}
      disabled={loading}
      id="main-search"
      loading={loading}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          onSubmit?.()
        }
      }}
      placeholder="Search"
      type="text"
    />
  )
}
