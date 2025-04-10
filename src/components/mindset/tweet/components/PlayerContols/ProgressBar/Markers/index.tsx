import { memo } from 'react'
import { NodeExtended } from '~/types'
import { Marker } from './Marker'

type Props = {
  markers: NodeExtended[]
}

export const Markers = memo(({ markers }: Props) => {
  if (markers.length === 0) {
    return null
  }

  const timestamps = markers.map((node) => (node.start ? new Date(node.start).getTime() : 0))
  const minTime = Math.min(...timestamps)
  const maxTime = Math.max(...timestamps)
  const timeRange = maxTime - minTime

  return (
    <>
      {markers.map((node, index) => {
        const nodeTime = node.start ? new Date(node.start).getTime() : 0
        const position = ((nodeTime - minTime) / timeRange) * 100 // Normalize position between 0-100
        const type = node?.node_type || ''
        const img = node?.properties?.image_url || ''

        return (
          <Marker
            // eslint-disable-next-line react/no-array-index-key
            key={`${node.ref_id}_${index}`}
            img={img}
            left={position}
            type={type}
          />
        )
      })}
    </>
  )
})

Markers.displayName = 'Markers'
