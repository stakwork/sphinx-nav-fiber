import { css } from 'styled-components'
import { Props } from './ButtonInterface'
import { TextKind } from '~/components/common/Text'

export const getButtonKindDimensions = ({ kind, shape }: Pick<Props, 'kind' | 'shape'>) => {
  switch (kind) {
    case 'small':
      return css`
        padding: 4px 8px;
        border-radius: ${shape === 'rounded' ? '16px' : '8px'};
        height: 32px;
      `
    case 'big':
      return css`
        padding: 16px 24px;
        border-radius: ${shape === 'rounded' ? '24px' : '8px'};
        height: 48px;
      `
    default:
      return css`
        padding: 8px 16px;
        border-radius: ${shape === 'rounded' ? '32px' : '8px'};
        height: 64px;
      `
  }
}

export const getTextKind = ({ kind }: Pick<Props, 'kind'>): TextKind => {
  switch (kind) {
    case 'small':
      return 'regularBold'
    case 'big':
      return 'mediumBold'
    default:
      return 'regularBold'
  }
}
