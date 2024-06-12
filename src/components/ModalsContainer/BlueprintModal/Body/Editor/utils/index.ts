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
    .map((key) => ({
      required: !object[key].includes('?'),
      type: !object[key].includes('?') ? object[key] : object[key].slice(1),
      key,
    }))
    .filter(({ key }) => !['type', 'ref_id', 'parent'].includes(key)) // exclude
}

export const getLoopControlPoints = (center: Vector3): [Vector3, Vector3, Vector3] => {
  const controlPoint1 = new Vector3(center.x - 10, center.y + 45, center.z)
  const controlPoint2 = new Vector3(center.x + 5, center.y + 10, center.z)
  const endPoint = new Vector3(center.x, center.y, center.z)

  return [controlPoint1, endPoint, controlPoint2]
}

export const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`
  }

  return text
}
