import { css } from 'styled-components'
import { assertNever } from '~/utils/assertNever'

type Align = 'center' | 'flex-end' | 'flex-start' | 'baseline' | 'stretch'

type Basis = string

type Direction = 'column' | 'column-reverse' | 'row' | 'row-reverse'

type Grow = number

type Shrink = number

type Justify = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between'

type Wrap = 'nowrap' | 'wrap'

export type Flexbox = {
  align: Align
  basis: Basis
  direction: Direction
  grow: Grow
  justify: Justify
  shrink: Shrink
  wrap: Wrap
}

export type FlexboxProps = Partial<Flexbox>

const switchProp = (prop: keyof Flexbox, value: Flexbox[keyof Flexbox]) => {
  switch (prop) {
    case 'align':
      return `align-items: ${value};`
    case 'justify':
      return `justify-content: ${value};`
    case 'basis':
    case 'direction':
    case 'grow':
    case 'shrink':
    case 'wrap':
      return `flex-${prop}: ${value};`
    default:
      return assertNever(prop)
  }
}

const getPropStyle = <P extends keyof Flexbox>(prop: P, value?: Flexbox[P]) => {
  if (value === undefined) {
    return ''
  }

  // NOTE: The reason why we call a separate function instead of directly having the switch
  // statement is that the type of `prop` is not narrowed when using `P extends Keys`.
  return switchProp(prop, value)
}

type Props = FlexboxProps

/**
 * Enhances a styled component with flexbox-related props.
 * Note: among the supported props there are `direction` and `wrap`, which `styled-components` forwards
 * to the base element. These unwanted props can be removed starting from `styled-component@5.1.0`
 * using the `shouldForwardProp` API on the component that is using `flexbox`.
 */
export const flexbox = css<Props>`
  display: flex;
  min-height: 0;
  min-width: 0;

  ${({ align, basis, direction, grow, justify, shrink, wrap }) =>
    `
      ${getPropStyle('align', align)}
      ${getPropStyle('basis', basis)}
      ${getPropStyle('direction', direction)}
      ${getPropStyle('grow', grow)}
      ${getPropStyle('justify', justify)}
      ${getPropStyle('shrink', shrink)}
      ${getPropStyle('wrap', wrap)}
    `}
`
