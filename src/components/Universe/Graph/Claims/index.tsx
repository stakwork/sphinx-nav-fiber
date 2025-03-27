import { Billboard, Text } from '@react-three/drei'
import { useEffect, useMemo, useState } from 'react'
import { getPathway } from '~/network/fetchSourcesData'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { distributeNodesOnSphere } from '~/stores/useSimulationStore/utils/distributeNodesOnSphere'
import { FetchDataResponse } from '~/types'
import { fontProps } from '../Cubes/Text/constants'

const getClaims = async (id: string) => {
  const claimsData = await getPathway(id, ['Claim'], ['HAS_CLAIM'], '', true, 0, 3, 500)
  const supportClaimsData = await getPathway(id, ['Claim'], [], '', true, 1, 3, 500)

  return {
    nodes: [...claimsData.nodes, ...supportClaimsData.nodes],
    edges: [...claimsData.edges, ...supportClaimsData.edges],
  }
}

export const Claims = () => {
  const { selectedEpisode } = useMindsetStore((s) => s)
  const [claims, setClaims] = useState<FetchDataResponse | null>()

  useEffect(() => {
    const fetchClaims = async (id: string) => {
      const response = await getClaims(id)

      setClaims(response)
    }

    if (selectedEpisode?.ref_id) {
      fetchClaims(selectedEpisode.ref_id)
    }
  }, [selectedEpisode])

  const claimsWithPositions = useMemo(
    () => Object.values(distributeNodesOnSphere(claims?.nodes || [], 100)),
    [claims?.nodes],
  )

  return (
    <Billboard>
      {claimsWithPositions.map((n, index) => (
        <mesh key={n.x} position={[n.x, n.y, n.z]}>
          <boxGeometry args={[400, 400, 400]} />
          <meshBasicMaterial color="orange" opacity={0} transparent />
          <Text {...fontProps} fontSize={10}>
            {claims?.nodes[index]?.properties?.name}| 2
          </Text>
        </mesh>
      ))}
    </Billboard>
  )
}
