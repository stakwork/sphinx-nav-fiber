import { getSignedMessageFromRelay } from '..'

describe('assertNever', () => {
  /**
   * @jest-environment jsdom
   * @jest-environment-options  {"url": "https://jestjs.io/"}
   * */
  it('should return empty message and empty signature', async () => {
    expect(await getSignedMessageFromRelay()).toEqual({ message: '', signature: '' })
  })
})
