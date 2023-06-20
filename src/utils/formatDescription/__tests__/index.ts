import { formatDescription } from '..'

describe('formatDescription', () => {
  it('should return empty sting if no description', () => {
    expect(formatDescription()).toEqual('')
  })

  it("should replace the double ['s and double ]'s in the string with empty char", () => {
    expect(formatDescription('[ [ This is a description  [[ doing ] ] things ] with ]] [ brakets [   ')).toEqual(
      '[ [ This is a description   doing ] ] things ] with  [ brakets [   ',
    )
  })
})
