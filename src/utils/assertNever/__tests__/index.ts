import { assertNever } from '..'

describe('assertNever', () => {
  it('should assert a message with the correct message', () => {
    // eslint-disable-next-line func-names
    const obj = function () {
      // eslint-disable-next-line no-empty, no-constant-condition
      while (true) {}
    }

    expect(() => assertNever(obj)).toThrowError()
  })
})
