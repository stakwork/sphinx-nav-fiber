import { useTexture } from '@react-three/drei'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Mesh } from 'three'
import { defaultBoostAmount, notify } from '~/components/Booster'
import { BOOST_ERROR_BUDGET, BOOST_SUCCESS } from '~/constants'
import { useSelectedNode } from '~/stores/useDataStore'
import { boost } from '~/utils/boost'
import { colors } from '~/utils/colors'
import { noBoostNodeTypes, panelWidth } from '../constants'
import { boostColor, boostedColor } from './constant'

type Props = {
  setHovered: (hovered: boolean) => void
}

export const Boost = (props: Props) => {
  const selectedNode = useSelectedNode()
  const [boosting, setBoosting] = useState(false)
  const [boosted, setBoosted] = useState(false)
  const boostIconRef = useRef<Mesh>(null)

  const boostEnabled = useMemo(() => !noBoostNodeTypes.includes(selectedNode?.node_type || ''), [selectedNode])
  const boltTexture = useTexture('icons/bolt_white.svg')
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    props.setHovered(hovered)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered])

  const doBoost = async () => {
    if (boosting || !selectedNode?.ref_id) {
      return
    }

    setBoosting(true)

    try {
      await boost(selectedNode?.ref_id, defaultBoostAmount)
      setBoosted(true)
      notify(BOOST_SUCCESS)
    } catch (e) {
      notify(BOOST_ERROR_BUDGET)
    }

    setBoosting(true)
  }

  const boostIconColor = useMemo(() => {
    if (boosted) {
      return boostedColor
    }

    if (hovered) {
      return colors.white
    }

    return boostColor
  }, [hovered, boosted])

  if (!boostEnabled) {
    return null
  }

  return (
    <group position-x={-(panelWidth / 2) + 4} scale={2}>
      <mesh
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => {
          e.stopPropagation()
          doBoost()
        }}
        onPointerEnter={() => {
          setHovered(true)
        }}
        onPointerLeave={() => {
          setHovered(false)
        }}
        onPointerUp={(e) => e.stopPropagation()}
        visible={!boosted && hovered}
      >
        <circleGeometry args={[1.8, 30]} />
        <meshBasicMaterial color={boostColor} />
      </mesh>

      <mesh ref={boostIconRef}>
        <circleGeometry args={[1.5, 40]} />
        <meshBasicMaterial alphaMap={boltTexture} color={boostIconColor} map={boltTexture} transparent />
      </mesh>
    </group>
  )
}
