/**
 * Formats a number with commas as thousands separators using the Intl.NumberFormat constructor.
 *
 * @param {number} number - The number to be formatted.
 * @param {string} [locale='en-US'] - The locale to use for formatting. Defaults to 'en-US'.
 * @returns {string} A string representation of the formatted number.
 */

export const formatNumberWithCommas = (number: number, locale = 'en-US') => {
  try {
    const formatter = new Intl.NumberFormat(locale)

    return formatter.format(number)
  } catch (error) {
    console.error('Error formatting number:', error)

    return number.toString()
  }
}
