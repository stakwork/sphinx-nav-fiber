import * as sphinx from 'sphinx-bridge'
import { getLSat, lsatToken } from '..'
import { isSphinx } from '../../isSphinx'

jest.mock('sphinx-bridge', () => ({
  enable: jest.fn(),
  getLsat: jest.fn(),
}))

jest.mock('../../isSphinx', () => ({
  isSphinx: jest.fn(),
}))

const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

describe('getLSat', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.resetAllMocks()
  })

  it('should return LSAT token from local storage if available', async () => {
    const lsat = { macaroon: 'macaroon-test', preimage: 'preimage-test' }

    localStorage.setItem('lsat', JSON.stringify(lsat))

    const result = await getLSat()

    expect(result).toBe(lsatToken(lsat.macaroon, lsat.preimage))
  })

  it('should retrieve LSAT token via sphinx bridge if not in local storage', async () => {
    ;(isSphinx as jest.Mock).mockReturnValue(true)

    const lsat = { macaroon: 'macaroon-test', preimage: 'preimage-test' }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sphinx.getLsat.mockResolvedValue(lsat)

    const result = await getLSat()

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(sphinx.getLsat).toHaveBeenCalledWith(window.location.host)
    expect(result).toBe(lsatToken(lsat.macaroon, lsat.preimage))
  })

  it('should return empty string if sphinx bridge does not return LSAT', async () => {
    ;(isSphinx as jest.Mock).mockReturnValue(true)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sphinx.getLsat.mockResolvedValue({})

    const result = await getLSat()

    expect(result).toBe('')
  })

  it('should return empty string if sphinx is not active', async () => {
    ;(isSphinx as jest.Mock).mockReturnValue(false)

    const result = await getLSat()

    expect(result).toBe('')
  })

  it('should handle exceptions and return empty string', async () => {
    localStorage.setItem('lsat', 'not-json')

    const result = await getLSat()

    expect(result).toBe('')
  })
})

describe('lsatToken', () => {
  it('should return a correctly formatted LSAT token', () => {
    const macaroon = 'macaroon-test'
    const preimage = 'preimage-test'
    const result = lsatToken(macaroon, preimage)

    expect(result).toBe(`LSAT ${macaroon}:${preimage}`)
  })
})
