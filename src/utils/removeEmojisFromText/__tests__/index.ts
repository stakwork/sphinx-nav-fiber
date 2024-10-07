import { removeEmojis } from '../index'

describe('removeEmojis', () => {
  test('handles empty string', () => {
    expect(removeEmojis('')).toBe('')
  })

  test('returns the same string if no emojis are present', () => {
    expect(removeEmojis('Hello, World!')).toBe('Hello, World!')
  })

  test('handles string with only emojis', () => {
    expect(removeEmojis('😀😃😄😁😆')).toBe('')
  })

  test('removes spaced out emojis', () => {
    expect(removeEmojis('Hello 😊 World 🌍')).toBe('Hello  World ')
  })

  test('removes multiple emojis in a row', () => {
    expect(removeEmojis('Wow! 🎉🎊🎈')).toBe('Wow! ')
  })

  test.each([
    ['🚀Start', 'Start'],
    ['End🚀', 'End'],
    ['🚀Middle🚀', 'Middle'],
    ['🚀', ''],
  ])('removes emojis at different positions: %s', (input, expected) => {
    expect(removeEmojis(input)).toBe(expected)
  })
})
