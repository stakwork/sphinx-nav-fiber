import { LoadMore, Table, showResults } from '..'

describe('Test for Load Button', () => {
  it('Show Load More Button', async () => {
    const ids = 10

    expect(showResults(ids)).toBe(LoadMore)
  })

  it('Should return That there is no more to load without the load button', async () => {
    const ids = 0

    expect(showResults(ids)).toEqual(Table)
  })
})
