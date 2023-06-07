export function timeToMilliseconds(time: string) {
  const [hours, minutes, seconds] = time.split(':').map(Number)

  return Number((hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000).toFixed(6))
}
