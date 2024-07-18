import { truncateText } from '..'

describe('truncateText function', () => {
  it('should truncate text that exceeds the maximum length', () => {
    const text = 'This is a long text'
    const maxLength = 10

    const output = truncateText(text, maxLength)

    expect(output).toBe('This is a ...')
  })

  it('should not truncate text that is within the maximum length', () => {
    const text = 'Short text'
    const maxLength = 10

    const output = truncateText(text, maxLength)

    expect(output).toBe('Short text')
  })
})
