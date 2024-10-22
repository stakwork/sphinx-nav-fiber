import { initialMessageData } from '~/components/App/Splash/constants'
import { TStatParams } from '~/network/fetchSourcesData'
import { TStats } from '~/types'
import { formatNumberWithCommas } from '../formatStats'

/**
 * Formats the statistics response object.
 * @param statsRespons {TStatParams} The statistics response object from /stats to format.
 * @returns {TStats} The formatted statistics object.
 */

export const formatStatsResponse = (statsResponse: TStatParams): TStats => {
  // Filter out keys that start with 'num_'
  const filteredData = Object.keys(statsResponse)
    .filter((key) => !key.startsWith('num_'))
    .map((key) => ({
      key,
      value: statsResponse[key],
    }))

  // Sort the stats by their values and take the top 5
  const top5 = filteredData.sort((a, b) => b.value - a.value).slice(0, 5)

  // Convert the array back into an object format
  const top5Object = top5.reduce((acc, { key, value }) => {
    acc[key] = value

    return acc
  }, {} as Record<string, number>)

  return top5Object
}

/**
 * Formats the splash message based on the statistics response.
 * @param statsRespons {TStatParams} The statistics response object from /stats to format.
 * @returns The formatted splash message array.
 */

export const formatSplashMessage = (statsResponse: TStatParams) =>
  // Map over initialMessageData to format each message
  initialMessageData.map(({ dataKey, ...rest }) => ({
    // Spread the rest of the properties and add the formatted value
    ...rest,
    value: formatNumberWithCommas(statsResponse[dataKey] ?? 0),
  }))
