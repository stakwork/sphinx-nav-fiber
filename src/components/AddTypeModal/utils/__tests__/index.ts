import { convertAttributes, parseJson, parsedObjProps } from '..' // Update with your file path

describe('convertAttributes function', () => {
  it('should convert attributes properly when all attributes are required', () => {
    const input: parsedObjProps[] = [
      { required: true, type: 'string', key: 'name' },
      { required: true, type: 'number', key: 'age' },
    ]

    const output = convertAttributes(input)

    expect(output).toEqual({
      name: 'string',
      age: 'number',
    })
  })

  it('should convert attributes properly when some attributes are optional', () => {
    const input: parsedObjProps[] = [
      { required: true, type: 'string', key: 'name' },
      { required: false, type: 'number', key: 'age' },
    ]

    const output = convertAttributes(input)

    expect(output).toEqual({
      name: 'string',
      age: '?number',
    })
  })

  it('should return an empty object when no attributes are provided', () => {
    const input: parsedObjProps[] = []

    const output = convertAttributes(input)

    expect(output).toEqual({})
  })
})

describe('parseJson function', () => {
  it('should parse JSON object properly when all attributes are required', () => {
    const input = {
      name: 'string',
      age: 'number',
    }

    const output = parseJson(input)

    expect(output).toEqual([
      { required: true, type: 'string', key: 'name' },
      { required: true, type: 'number', key: 'age' },
    ])
  })

  it('should parse JSON object properly when some attributes are optional', () => {
    const input = {
      name: 'string',
      '?age': 'number',
    }

    const output = parseJson(input)

    expect(output).toEqual([
      { required: true, type: 'string', key: 'name' },
      { required: false, type: 'number', key: 'age' },
    ])
  })

  it('should exclude certain keys from parsing', () => {
    const input = {
      name: 'string',
      ref_id: 'number',
      parent: 'string',
    }

    const output = parseJson(input)

    expect(output).toEqual([{ required: true, type: 'string', key: 'name' }])
  })

  it('should handle empty input object', () => {
    const input = {}

    const output = parseJson(input)

    expect(output).toEqual([])
  })
})
