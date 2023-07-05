import { useControls } from 'leva'
import { GRAPH_FOG_COLOR, GRAPH_GROUND_COLOR, GRAPH_LIGHT_INTENSITY } from '~/constants'
import { useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'

export const Lights = () => {
  const { fogColor } = useControls('universe', {
    fogColor: GRAPH_FOG_COLOR,
  })

  const graphStyle = useDataStore((s) => s.graphStyle)

  return (
    <>
      <hemisphereLight args={[colors.white, GRAPH_GROUND_COLOR, GRAPH_LIGHT_INTENSITY]} />
      {graphStyle !== 'earth' && <fog args={[fogColor, 5, 18000]} attach="fog" />}
    </>
  )
}
