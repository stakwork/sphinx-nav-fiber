export const secondsToMediaTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = Math.floor(seconds % 60)

  const formattedHours = hours > 0 ? `${hours}:` : ''
  const formattedMinutes = hours > 0 ? minutes.toString().padStart(2, '0') : minutes.toString()
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0')

  return `${formattedHours}${formattedMinutes}:${formattedSeconds}`
}
