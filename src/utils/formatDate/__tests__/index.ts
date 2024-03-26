import { formatDate } from '..'

const testCases: [number, string][] = [
  [1710115200, '11/03/2024'],
  [946684800, '01/01/2000'],
  [1083297600, '30/04/2004'],
  [1136073600, '01/01/2006'],
  [1420070400, '01/01/2015'],
]

describe('formatDate function', () => {
  it.each(testCases)('formats date timestamp "%s" to "%s" correctly', (date, expected) => {
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe(expected)
  })
})
