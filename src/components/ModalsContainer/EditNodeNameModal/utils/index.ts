export const imageUrlRegex = /^https:\/\/\S+\.(png|jpe?g|svg)$/

export function validateImageInputType(url: string): boolean {
  if (imageUrlRegex.test(url)) {
    return true
  }

  return false
}

export function formatLabel(label: string): string {
  return label
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
