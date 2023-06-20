import { colors } from '..'

function isEmpty(obj) {
  return Object.keys(obj).length === 0
}

describe('colors', () => {
  it('colors object should not be empty', () => {
    expect(isEmpty(colors)).toEqual(false)
  })
})
