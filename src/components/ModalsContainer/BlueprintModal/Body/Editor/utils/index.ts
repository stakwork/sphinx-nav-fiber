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
