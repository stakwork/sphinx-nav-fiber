import { cssWithMediaQuery } from '..'

describe('cssWithMediaQuery', () => {
  it('returns the specified styles inside the specified media query', () => {
    const withMediaQuery = cssWithMediaQuery('(min-width: 1000px)')

    expect(
      withMediaQuery`
        padding: 16px;
      `.join(''),
    ).toMatchInlineSnapshot(`
      "
            @media (min-width: 1000px) {
              
              padding: 16px;
            
            }
          "
    `)
  })

  it('returns an empty style when given empty styles', () => {
    const withMediaQuery = cssWithMediaQuery('(min-width: 1000px)')

    expect(
      withMediaQuery`

      `.join(''),
    ).toMatchInlineSnapshot(`""`)
  })
})
