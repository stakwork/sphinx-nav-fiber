// This regex is specifically for youtube videos, twitter spaces and mp3 links
export const twitterOrYoutubeRegexOrMp3 =
  /^(?:(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)[\w-]{11}(?:\S*)?|(?:https?:\/\/)?(?:www\.)?twitter\.com\/i\/spaces\/\d+.*$|.+\.mp3)$/i

export function validateSourceURL(input: string) {
  if (twitterOrYoutubeRegexOrMp3.test(input)) {
    return true
  }
  
  return false
}
