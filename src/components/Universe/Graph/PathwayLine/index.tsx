import { Line } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import { Vector3 } from 'three'
import { Line2 } from 'three/examples/jsm/lines/Line2'
import { usePathway } from '~/components/DataRetriever'
import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { useDataStore } from '~/stores/useDataStore'
import { getCurvedLineFromStartAndEnd } from '../CurvedLine/constants'

export const PathwayLine = () => {
  const { pathway } = usePathway()
  const ref = useRef<Line2>(null)

  const graphStyle = useDataStore((s) => s.graphStyle)

  const points = useMemo(() => {
    if (ref.current) {
      const p = pathway.map((node) => {
        const coords = new Vector3(node.x || 0, node.y || 0, node.z || 0)

        return coords
      })

      if (p.length) {
        // curve lines if earth
        if (graphStyle === 'earth') {
          let curvedPoints: Vector3[] = []
          const pointPairs: Vector3[][] = []

          p.forEach((_, i) => {
            if (p[i + 1]) {
              pointPairs.push([p[i], p[i + 1]])
            }
          })

          pointPairs.forEach((pp) => {
            const start = pp[0]
            const end = pp[1]

            const curved = getCurvedLineFromStartAndEnd(start, end)

            curvedPoints = [...curvedPoints, ...curved]
          })

          return curvedPoints
        }

        return p
      }
    }

    return [new Vector3(0, 0, 0)]
  }, [pathway, graphStyle])

  const lineOptions = useMemo(() => {
    if (graphStyle === 'earth') {
      return {
        color: 0x000000,
        dashSize: 40,
        gapSize: 40,
        lineWidth: 3,
        opacity: 0.8,
      }
    }

    return {
      color: NODE_RELATIVE_HIGHLIGHT_COLORS.pathway.nodeColor,
      dashSize: 40,
      gapSize: 40,
      lineWidth: 2,
      opacity: 0.3,
    }
  }, [graphStyle])

  return (
    <Line
      ref={ref}
      dashed
      forceSinglePass={false}
      matrixWorldAutoUpdate={false}
      points={points}
      transparent
      // eslint-disable-next-line react/jsx-sort-props
      {...lineOptions}
    />
  )
}
