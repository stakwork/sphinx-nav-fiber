import { extractUuidAndHost } from '..'

describe('test extracting uuid and tribe host', () => {
  /**
   * @jest-environment jsdom
   * @jest-environment-options  {"url": "https://jestjs.io/"}
   * */
  it('should assert a message with the correct message', async () => {
    expect(await extractUuidAndHost('test')).toEqual({ host: '', uuid: '' })
  })

  // The test checks if the function `extractUuidAndHost` returns the expected result when called with an empty string as input.

  /**
   * @jest-environment jsdom
   * @jest-environment-options  {"url": "https://jestjs.io/"}
   * */
  it('should return empty state with empty string input', async () => {
    expect(await extractUuidAndHost('')).toEqual({ host: '', uuid: '' })
  })

  // The test checks if the function `extractUuidAndHost` returns the expected result when called with a search string that starts with a question mark '?'.

  /**
   * @jest-environment jsdom
   * @jest-environment-options  {"url": "https://jestjs.io/"}
   * */
  it('should return empty state with search string starting with question mark', async () => {
    expect(await extractUuidAndHost('?test')).toEqual({ host: '', uuid: '' })
  })

  // The test checks if the function `extractUuidAndHost` returns the expected result when called with a search string that contains multiple key-value pairs separated by ampersand '&'.

  /**
   * @jest-environment jsdom
   * @jest-environment-options  {"url": "https://jestjs.io/"}
   * */
  it('should return state with multiple key-value pairs in search string', async () => {
    expect(await extractUuidAndHost('?uuid=123&host=localhost')).toEqual({ host: 'localhost', uuid: '123' })
  })

  // The test checks if the function `extractUuidAndHost` correctly extracts the 'uuid' value from the search string and assigns it to the 'uuid' property of the returned object.

  /**
   * @jest-environment jsdom
   * @jest-environment-options  {"url": "https://jestjs.io/"}
   * */
  it('should extract uuid from search string', async () => {
    expect(await extractUuidAndHost('?uuid=123')).toEqual({ host: '', uuid: '123' })
  })
})
