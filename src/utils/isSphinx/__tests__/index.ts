import { isSphinx } from '..'

// Mock sessionStorage for testing
const sessionStorageMock: Storage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0,
  // Add other properties as needed
}

// Mock sessionStorage globally before tests
global.sessionStorage = sessionStorageMock

describe('isSphinx', () => {
  it('should return true if sessionStorage value is "true"', () => {
    jest.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('true')
    expect(isSphinx()).toBe(true)
  })

  it('should return false if sessionStorage value is not "true"', () => {
    jest.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('false')
    expect(isSphinx()).toBe(false)

    // Additional case: null or undefined in sessionStorage should also return false
    jest.spyOn(sessionStorage, 'getItem').mockReturnValueOnce(null)
    expect(isSphinx()).toBe(false)
  })

  it('should return false if sessionStorage value is not a string', () => {
    jest.spyOn(sessionStorage, 'getItem').mockReturnValueOnce('123') // a non-string value
    expect(isSphinx()).toBe(false)
  })
})
