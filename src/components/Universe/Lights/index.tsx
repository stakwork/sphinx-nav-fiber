import { useControls } from 'leva'
import { GRAPH_FOG_COLOR, GRAPH_GROUND_COLOR, GRAPH_LIGHT_INTENSITY } from '~/constants'
import { colors } from '~/utils/colors'

export const Lights = () => {
  const { fogColor } = useControls('universe', {
    fogColor: GRAPH_FOG_COLOR,
  })

  return (
    <>
      <hemisphereLight args={[colors.white, GRAPH_GROUND_COLOR, GRAPH_LIGHT_INTENSITY]} />

      <fog args={[fogColor, 5, 4000]} attach="fog" />
    </>
  )
}
