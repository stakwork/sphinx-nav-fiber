import { memo } from 'react'
import { NodeExtended } from '~/types'
import { Marker } from './Marker'

type Props = {
  markers: NodeExtended[]
  duration: number
}

export const Markers = memo(({ markers, duration }: Props) => (
  <>
    {markers.map((node) => {
      const position = ((node?.start || 0) / duration) * 100
      const type = node?.node_type || ''
      const img = node?.properties?.image_url || ''

      return <Marker key={node.ref_id} img={img} left={position} type={type} />
    })}
  </>
))

Markers.displayName = 'Markers'
