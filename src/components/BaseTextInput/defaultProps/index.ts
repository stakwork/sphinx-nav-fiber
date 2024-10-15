import { BaseTextInputProps } from '../types'

type DefaultProps = Required<
  Pick<
    BaseTextInputProps,
    | 'autoComplete'
    | 'autoCapitalize'
    | 'colorName'
    | 'disabled'
    | 'maxLength'
    | 'placeholder'
    | 'placeholderTextColor'
    | 'returnKeyType'
    | 'textAlign'
    | 'type'
  >
>

export const defaultProps: DefaultProps = {
  autoComplete: 'off',
  colorName: 'black',
  autoCapitalize: 'none',
  disabled: false,
  maxLength: 524288,
  placeholder: '',
  placeholderTextColor: 'gray100',
  returnKeyType: 'done',
  textAlign: 'left',
  type: 'text',
}
