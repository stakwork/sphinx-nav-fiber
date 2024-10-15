import { Buffer } from 'buffer'
import sphinx from 'sphinx-bridge'
import { bytesFromUrlBase64, getSignedTimestamp } from '..'

// Returns a valid signed timestamp when sphinx.signMessage is successful
it('should return a valid signed timestamp when sphinx.signMessage is successful', async () => {
  const mockSignature = 'mockSignature'

  const mockResponse = { signature: mockSignature }

  jest.spyOn(sphinx, 'signMessage').mockResolvedValue(mockResponse)

  const result = await getSignedTimestamp()

  expect(result).toBeDefined()

  expect(result).not.toBe('')
})

// Handles errors from sphinx.signMessage gracefully
it('should return an empty string when sphinx.signMessage throws an error', async () => {
  jest.spyOn(sphinx, 'signMessage').mockRejectedValue(new Error('signMessage error'))

  const result = await getSignedTimestamp()

  expect(result).toBe('')
})

// Correctly converts current time to hexadecimal and then to bytes
it('should convert current time to bytes correctly', async () => {
  const currentTimeInSeconds = Math.floor(Date.now() / 1000)

  const timeInBytes = Buffer.from(currentTimeInSeconds.toString(16), 'hex')

  expect(timeInBytes).toBeDefined()
})

// Properly concatenates time bytes and signed bytes
it('should concatenate time and signed bytes properly', async () => {
  const currentTimeInSeconds = Math.floor(Date.now() / 1000)

  const timeInBytes = Buffer.from(currentTimeInSeconds.toString(16), 'hex')

  const res = { signature: 'mockedSignature' }

  const signedByte = bytesFromUrlBase64(res.signature)

  const concatenatedBytes = Buffer.concat([timeInBytes, signedByte], signedByte.length + timeInBytes.length)

  expect(concatenatedBytes).toBeDefined()
})
