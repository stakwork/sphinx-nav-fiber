/**
 * Converts a Date timestamp to a date string in "DD/MM/YYYY" format.
 * @param timestamp - Date timestamp (in milliseconds) to be formatted.
 * @returns Formatted date string in "DD/MM/YYYY" format.
 */

export function formatDate(timestamp: number | string): string {
  const date = new Date(Number(timestamp) * 1000)

  const year = date.getFullYear()
  const month = (1 + date.getMonth()).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${day}/${month}/${year}`
}
