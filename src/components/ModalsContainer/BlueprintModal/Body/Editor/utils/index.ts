import { Vector3 } from 'three'

export function convertAttributes(attributes: parsedObjProps[]) {
  const convertedAttributes: { [key: string]: string } = {}

  attributes.forEach((attribute) => {
    const { key, type, required } = attribute

    if (required) {
      convertedAttributes[key] = type
    } else {
      convertedAttributes[key] = `?${type}`
    }
  })

  return convertedAttributes
}

export type parsedObjProps = {
  required: boolean
  type: string
  key: string
}

export function parseJson(object: { [k: string]: string }): parsedObjProps[] {
  return Object.keys(object)
    .map((key) => {
      const value = object[key]
      let type = ''

      if (typeof value === 'string') {
        if (value.includes('?')) {
          type = value.slice(1)
        } else {
          type = value
        }
      }

      return {
        required: type ? !value.includes('?') : false,
        type,
        key,
      }
    })
    .filter(({ key, type }) => !['type', 'ref_id', 'parent'].includes(key) && type)
}

export const getLoopControlPoints = (center: Vector3): [Vector3, Vector3, Vector3] => {
  const controlPoint1 = new Vector3(center.x - 10, center.y + 45, center.z)
  const controlPoint2 = new Vector3(center.x + 5, center.y + 10, center.z)
  const endPoint = new Vector3(center.x, center.y, center.z)

  return [controlPoint1, endPoint, controlPoint2]
}
