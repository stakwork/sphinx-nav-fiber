// This regex is specifically for youtube videos, twitter spaces and mp3 links
export const sourceUrlRegex =
  /^(https:\/\/)(((?:[a-zA-Z\d](?:[a-zA-Z\d-]*[a-zA-Z\d])*)\.)+(com|org)|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?(@[a-zA-Z\d-]+)?$/i

export function validateSourceURL(input: string) {
  if (sourceUrlRegex.test(input)) {
    return true
  }

  return false
}
