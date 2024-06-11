export const imageUrlRegex = /^https:\/\/\S+\.(png|jpe?g|svg)$/

export function validateImageInputType(url: string): boolean {
  if (imageUrlRegex.test(url)) {
    return true
  }

  return false
}
