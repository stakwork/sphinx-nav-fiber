import { getLSat } from '..'

describe('assertNever', () => {
  /**
   * @jest-environment jsdom
   * @jest-environment-options  {"url": "https://jestjs.io/"}
   * */
  it('should assert a message with the correct message', async () => {
    expect(await getLSat()).toBe('')
  })
})
