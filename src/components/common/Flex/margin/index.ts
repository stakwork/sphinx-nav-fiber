import { css } from 'styled-components'
import { assertNever } from '~/utils/assertNever'

export type Margin = {
  m: number
  mb: number
  ml: number
  mr: number
  mt: number
  mx: number
  my: number
}

export type MarginProps = Partial<Margin>

const switchProp = (prop: keyof Margin, value: Margin[keyof Margin]) => {
  switch (prop) {
    case 'm':
      return `margin: ${value}px;`
    case 'mb':
      return `margin-bottom: ${value}px;`
    case 'ml':
      return `margin-left: ${value}px;`
    case 'mr':
      return `margin-right: ${value}px;`
    case 'mt':
      return `margin-top: ${value}px;`
    case 'mx':
      return `
        margin-left: ${value}px;
        margin-right: ${value}px;
      `
    case 'my':
      return `
        margin-bottom: ${value}px;
        margin-top: ${value}px;
      `
    default:
      return assertNever(prop)
  }
}

const getPropStyle = <P extends keyof Margin>(prop: P, value?: Margin[P]) => {
  if (value === undefined) {
    return ''
  }

  // NOTE: The reason why we call a separate function instead of directly having the switch
  // statement is that the type of `prop` is not narrowed when using `P extends Keys`.
  return switchProp(prop, value)
}

type Props = MarginProps

export const margin = css<Props>`
  ${({ m, mb, ml, mr, mt, mx, my }) => `
    ${getPropStyle('m', m)}
    ${getPropStyle('mx', mx)}
    ${getPropStyle('my', my)}
    ${getPropStyle('mb', mb)}
    ${getPropStyle('ml', ml)}
    ${getPropStyle('mr', mr)}
    ${getPropStyle('mt', mt)}
  `}
`
