import { Props } from './ButtonInterface'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { getButtonKindDimensions } from './ButtonUtils'

export const Wrapper = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  justify: 'center',
})<Pick<Props, 'kind' | 'disabled' | 'shape'>>`
  border: none;
  cursor: pointer;
  pointer-events: auto;

  ${getButtonKindDimensions}

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.9)};
  }

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.5;
      pointer-events: none;
    `}
`
