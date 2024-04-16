import { initialMessageData } from '~/components/App/Splash/constants'
import { StatsConfig } from '~/components/Stats'
import { TStatParams } from '~/network/fetchSourcesData'
import { TStats } from '~/types'
import { formatNumberWithCommas } from '../formatStats'

/**
 * Formats the statistics response object.
 * @param statsRespons {TStatParams} The statistics response object from /stats to format.
 * @returns {TStats} The formatted statistics object.
 */

export const formatStatsResponse = (statsResponse: TStatParams): TStats =>
  StatsConfig.reduce((updatedStats: TStats, { key, dataKey }) => {
    const formattedValue = formatNumberWithCommas(statsResponse[dataKey] ?? 0)

    return { ...updatedStats, [key]: formattedValue }
  }, {})

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
