import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { colors } from '~/utils/colors'

type Props = {
  loading?: boolean
  onSubmit?: () => void
  placeholder?: string
}

const Input = styled.input.attrs(() => ({
  autoCorrect: 'off',
  autoComplete: 'off',
}))<{ loading?: boolean }>`
  pointer-events: auto;
  height: 48px;
  padding: 0 40px 0 18px;
  z-index: 2;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  color: #fff;
  box-shadow: none;
  border: none;
  border-radius: 200px;
  background: ${colors.BG2};

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

export const SearchBar = ({ loading, placeholder = 'Search', onSubmit }: Props) => {
  const { register, watch } = useFormContext()

  const typing = watch('search')
  const navigate = useNavigate()

  return (
    <Input
      {...register('search')}
      disabled={loading}
      id="main-search"
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          if (typing.trim() === '') {
            return
          }

          if (onSubmit) {
            onSubmit()

            return
          }

          const encodedQuery = typing.replace(/\s+/g, '+')

          navigate(`/search?q=${encodedQuery}`)
        }
      }}
      placeholder={placeholder}
      type="text"
    />
  )
}
