import styled from 'styled-components'
import { colors } from '~/utils/colors'
import { BaseTextInputProps } from '../types'

type Props = Required<Pick<BaseTextInputProps, 'colorName' | 'disabled' | 'placeholderTextColor' | 'textAlign'>>

export const WebTextInput = styled.input<Props>`
  -webkit-appearance: none;
  -webkit-text-fill-color: ${({ colorName }) => colors[colorName]};
  background: transparent;
  border: none;
  color: ${({ colorName }) => colors[colorName]};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'text')};
  margin: 0;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  outline: 0;
  padding: 0;
  text-align: ${({ textAlign }) => textAlign};

  &:focus {
    border: none;
    box-shadow: none;
    outline: none;
  }

  &[type='number'] {
    appearance: textfield;
    -webkit-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
      -webkit-appearance: none;
    }
  }

  &::placeholder {
    -webkit-text-fill-color: ${({ placeholderTextColor }) => colors[placeholderTextColor]};
    color: ${({ placeholderTextColor }) => colors[placeholderTextColor]};
  }
`

WebTextInput.displayName = 'WebTextInput'
