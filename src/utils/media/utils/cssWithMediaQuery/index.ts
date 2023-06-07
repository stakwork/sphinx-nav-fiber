import { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components'

export const cssWithMediaQuery =
  (mediaQuery: string) =>
  (first: TemplateStringsArray, ...interpolations: SimpleInterpolation[]): FlattenSimpleInterpolation => {
    const styles = css(first, ...interpolations)

    if (!styles.join('').trim()) {
      return ['']
    }

    return css`
      @media ${mediaQuery} {
        ${styles}
      }
    `
  }
