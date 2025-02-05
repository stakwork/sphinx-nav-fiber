import { memo } from 'react'
import { NodeExtended } from '~/types'
import { Marker } from './Marker'

type Props = {
  markers: NodeExtended[]
  duration: number
}

export const Markers = memo(({ markers, duration }: Props) => (
  <>
    {markers.map((node, index) => {
      const position = Math.floor(((node?.start || 0) / duration) * 100)
      const type = node?.node_type || ''
      const img = node?.properties?.image_url || ''

      // eslint-disable-next-line react/no-array-index-key
      return <Marker key={`${node.ref_id}_${index}`} img={img} left={position} type={type} />
    })}
  </>
))

Markers.displayName = 'Markers'
