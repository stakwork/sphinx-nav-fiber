export const formatTimestamp = (ts: string) => {
  const [start, end] = ts.split('-') || ['', '']

  if (parseInt(end, 10) !== 0) {
    return `${start} - ${end}`
  }

  return start
}
