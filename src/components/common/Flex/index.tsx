import { ReactNode } from 'react'
import styled from 'styled-components'
import { background, BackgroundProps } from './background'
import { border, BorderProps } from './border'
import { flexbox, Flexbox, FlexboxProps } from './flexbox'
import { padding, PaddingProps } from './padding'

type StyleProps = BackgroundProps & BorderProps & FlexboxProps & PaddingProps

const defaultProps: Flexbox = {
  align: 'stretch',
  basis: 'auto',
  direction: 'column',
  grow: 0,
  justify: 'flex-start',
  shrink: 0,
  wrap: 'nowrap',
}

export type FlexProps = StyleProps & {
  children?: ReactNode
}

export const Flex = styled.div
  .withConfig({
    shouldForwardProp: (prop, defaultShouldForwardProp) =>
      !['direction', 'wrap'].includes(prop) && defaultShouldForwardProp(prop),
  })
  .attrs((props: FlexProps) => ({
    ...defaultProps,
    ...props,
  }))`
  ${background}
  ${border}
  ${flexbox}
  ${padding}
`
