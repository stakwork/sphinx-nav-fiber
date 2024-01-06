import { formatBudget } from '..'

describe('formatBudget', () => {
  /**
   * @jest-environment jsdom
   * @jest-environment-options  {"url": "https://jestjs.io/"}
   * */
  it('should assert we format the budeget properly', async () => {
    expect(formatBudget(null)).toBe('?')
    expect(formatBudget(25)).toBe('25')
    expect(formatBudget(7000000)).toBe('70 00 000')
    expect(formatBudget('700000')).toBe('700000')
  })
})
