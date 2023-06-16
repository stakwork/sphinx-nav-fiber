import { conditionalCss } from '..'

describe('conditionalCss', () => {
  it('returns the speficied styles when the predicate is true', () => {
    const predicate = (windowWidth: number) => windowWidth >= 1000

    const conditionalPadding = conditionalCss(predicate)`padding: 16px;`

    expect(JSON.stringify(conditionalPadding({ windowWidth: 1000 }))).toEqual(JSON.stringify(['padding: 16px;']))

    expect(conditionalPadding({ windowWidth: 999 })).toBe(false)
  })
})
