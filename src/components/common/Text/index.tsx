import styled, { css } from 'styled-components'
import { ColorName, colors } from '~/utils/colors'
import { media } from '~/utils/media'

const fontSizes: Record<TextKind, number> = {
  bigHeading: 30,
  bigHeadingBold: 30,
  heading: 24,
  headingBold: 24,
  hugeHeading: 40,
  hugeHeadingBold: 40,
  medium: 16,
  mediumBold: 16,
  regular: 14,
  regularBold: 14,
  tiny: 12,
  tinyBold: 12,
}

const fontSizesMobile: Record<TextKind, number> = {
  bigHeading: 24,
  bigHeadingBold: 24,
  heading: 18,
  headingBold: 18,
  hugeHeading: 32,
  hugeHeadingBold: 32,
  medium: 16,
  mediumBold: 16,
  regular: 14,
  regularBold: 14,
  tiny: 12,
  tinyBold: 12,
}

const fontWeights: Record<TextKind, number> = {
  bigHeading: 400,
  bigHeadingBold: 700,
  heading: 400,
  headingBold: 700,
  hugeHeading: 400,
  hugeHeadingBold: 700,
  medium: 500,
  mediumBold: 600,
  regular: 500,
  regularBold: 600,
  tiny: 300,
  tinyBold: 500,
}

type TextKindRegular = 'hugeHeading' | 'bigHeading' | 'heading' | 'regular' | 'medium' | 'tiny'

type TextKindBold = `${TextKindRegular}Bold`

export type TextKind = TextKindRegular | TextKindBold

type Props = {
  color?: ColorName
  kind?: TextKind
}

const style = css<Props>`
  word-wrap: wrap;
  ${({ kind = 'regular' }) => css`
    font-size: ${fontSizes[kind]}px;
    font-weight: ${fontWeights[kind]};
    ${media.smallOnly`
      font-size: ${fontSizesMobile[kind]}px;
    `}
  `}
`

export const Text = styled.span.withConfig({
  shouldForwardProp: (prop, defaultShouldForwardProp) => !['kind'].includes(prop) && defaultShouldForwardProp(prop),
})<Props>`
  ${style}

  ${({ color = 'primaryText1' }) => `color: ${colors[color]};`}
`
