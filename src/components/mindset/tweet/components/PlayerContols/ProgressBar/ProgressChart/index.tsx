import { memo, useMemo } from 'react'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'

type Props = {
  markers: NodeExtended[]
  height?: number
  showChart?: boolean
  backgroundColor?: string
}

const segments = 50

export const ProgressChart = memo(
  ({ markers, height = 56, showChart = true, backgroundColor = colors.primaryBlue }: Props) => {
    const timestamps = markers.map((node) => (node.start ? new Date(node.start).getTime() : 0))
    const minTime = Math.min(...timestamps)
    const maxTime = Math.max(...timestamps)
    const timeRange = maxTime - minTime

    // Prepare chart data
    const chartData = useMemo(() => {
      if (markers.length === 0 || timeRange === 0) {
        return []
      }

      const segmentSize = timeRange / segments
      const buckets = Array(segments).fill(0)

      markers.forEach((node) => {
        if (!node.start) {
          return
        }

        const nodeTime = new Date(node.start).getTime()
        const segmentIndex = Math.min(segments - 1, Math.floor((nodeTime - minTime) / segmentSize)) // Find correct segment

        buckets[segmentIndex] += 1 // Count nodes in segment
      })

      // Convert bucket counts into data for the chart
      return buckets.map((count, index) => ({
        timestamp: minTime + segmentSize * index, // Representative time for the segment
        value: count, // Number of nodes in this segment
      }))
    }, [markers, minTime, timeRange])

    if (markers.length === 0) {
      return null
    }

    return (
      <>
        {showChart && chartData.length > 0 && (
          <div>
            <ResponsiveContainer height={height} width="100%">
              <AreaChart data={chartData}>
                <Area
                  dataKey="value"
                  fill={backgroundColor} // Fill area with the chart color
                  fillOpacity={0.5}
                  stroke="transparent" // Slightly transparent fill
                  type="basis"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </>
    )
  },
)

ProgressChart.displayName = 'ProgressChart'
