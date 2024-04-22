import { validateImageInputType } from '../index'

describe('validateImageInputType function', () => {
  it('should return true for valid image URLs', () => {
    expect(validateImageInputType('https://pbs.twimg.com/profile_images/1729542498006294529/AjwhArl6_normal.png')).toBe(
      true,
    )

    expect(validateImageInputType('https://pbs.twimg.com/profile_images/1729542498006294529/AjwhArl6_normal.jpg')).toBe(
      true,
    )

    expect(
      validateImageInputType('https://pbs.twimg.com/profile_images/1729542498006294529/AjwhArl6_normal.jpeg'),
    ).toBe(true)

    expect(validateImageInputType('https://pbs.twimg.com/profile_images/1729542498006294529/AjwhArl6_normal.svg')).toBe(
      true,
    )
  })

  it('should return false for invalid image URLs', () => {
    expect(validateImageInputType('https://pbs.twimg.com/profile_images/1729542498006294529/AjwhArl6_normal.txt')).toBe(
      false,
    )

    expect(validateImageInputType('https://pbs.twimg.com/profile_images/1729542498006294529/AjwhArl6_normal')).toBe(
      false,
    )

    expect(validateImageInputType('pbs.twimg.com/profile_images/1729542498006294529/AjwhArl6_normal.svg')).toBe(false)
  })
})
