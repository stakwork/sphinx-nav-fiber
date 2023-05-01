export const convertToChatMessage = (inputString: string) => {
  const urlRegex = /((http|https):\/\/[^\s]+)/g
  const usernameRegex = /@(\w+)/g
  let convertedString = inputString.replace(/\\/g, '')

  convertedString = convertedString.replace(/'/g, '’')
  convertedString = convertedString.replace(/\n/g, '<br>')

  convertedString = convertedString.replace(urlRegex, '<a target="_blank" href="$1">$1</a>')

  convertedString = convertedString.replace(usernameRegex, '<span class="username">@$1</span>')

  return convertedString
}
