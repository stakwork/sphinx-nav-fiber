import { css, SimpleInterpolation } from 'styled-components'

export const conditionalCss =
  (predicate: (windowWidth: number) => boolean) =>
  (first: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) =>
  ({ windowWidth }: { windowWidth: number }) =>
    predicate(windowWidth) && css(first, ...interpolations)
