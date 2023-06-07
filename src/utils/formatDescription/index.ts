export function formatDescription(description: string | undefined) {
  if (!description) {
    return ''
  }

  return description.replace(/[[]{2}/g, '').replace(/[\]]{2}/g, '')
}
