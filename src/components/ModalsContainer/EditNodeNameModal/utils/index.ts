export const imageUrlRegex = /^https:\/\/.*\.(png|jpg|svg)$/

export function validateImageInputType(url: string): boolean {
  if (imageUrlRegex.test(url)) {
    return true
  }

  return false
}
