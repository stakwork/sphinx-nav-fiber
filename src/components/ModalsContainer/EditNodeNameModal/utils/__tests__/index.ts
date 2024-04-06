import { validateImageInputType } from '../index'

describe('validateImageInputType function', () => {
  it('should return true for valid image URLs', () => {
    expect(validateImageInputType('https://example.com/image.png')).toBe(true)
    expect(validateImageInputType('https://example.com/image.jpg')).toBe(true)
    expect(validateImageInputType('https://example.com/image.svg')).toBe(true)
  })

  it('should return false for invalid image URLs', () => {
    expect(validateImageInputType('https://example.com/image.txt')).toBe(false)
    expect(validateImageInputType('https://example.com/image')).toBe(false)
    expect(validateImageInputType('https://example.com/notimage')).toBe(false)
  })
})
