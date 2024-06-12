/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { Vector3 } from 'three'
import { convertAttributes, parseJson, parsedObjProps, getLoopControlPoints, truncateText } from '..'

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
      age: '?number',
    }

    const output = parseJson(input)

    expect(output).toEqual([
      { required: true, type: 'string', key: 'name' },
      { required: false, type: 'number', key: 'age' },
    ])
  })

  it('should parse JSON object properly when some attributes are optional', () => {
    const input = {
      name: 'string',
      age: '?number',
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

describe('getLoopControlPoints function', () => {
  it('should return correct control points for a given center', () => {
    const center = new Vector3(0, 0, 0)
    const [controlPoint1, endPoint, controlPoint2] = getLoopControlPoints(center)

    expect(controlPoint1).toEqual(new Vector3(-10, 45, 0))
    expect(endPoint).toEqual(new Vector3(0, 0, 0))
    expect(controlPoint2).toEqual(new Vector3(5, 10, 0))
  })
})

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
