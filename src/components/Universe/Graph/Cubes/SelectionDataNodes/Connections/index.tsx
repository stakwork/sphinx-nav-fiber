import { memo, useEffect, useRef } from 'react'
import { Box3, Color, Group, Sphere, Vector3 } from 'three'
import { Line2 } from 'three-stdlib'
import { useShallow } from 'zustand/react/shallow'
import { useGraphStore } from '~/stores/useGraphStore'
import { Link, NodeExtended } from '~/types'
import { colors } from '~/utils'
import { PathNode } from '..'
import { LinkPosition } from '../../..'
import { Connection } from './Connection'

type Props = {
  links: Link[]
  nodes: PathNode[]
}

const PATH_COLOR = '#68BE3E'

export const Connections = memo(({ links, nodes }: Props) => {
  const groupRef = useRef<Group>(null)
  const linksPositionRef = useRef(new Map<string, LinkPosition>())
  const { setSelectionGraphRadius } = useGraphStore(useShallow((s) => s))

  useEffect(() => {
    if (!groupRef.current) {
      return
    }

    const grConnections = groupRef.current

    grConnections.children.forEach((g, i) => {
      const r = g.children[0]
      const text = g.children[1]

      if (r instanceof Line2) {
        const Line = r as Line2
        const link = links[i]

        if (link) {
          const sourceNode = nodes.find((n: NodeExtended) => n.ref_id === link.source)
          const targetNode = nodes.find((n: NodeExtended) => n.ref_id === link.target)

          if (!sourceNode || !targetNode) {
            return
          }

          const { x: sx, y: sy } = sourceNode
          const { x: tx, y: ty } = targetNode

          linksPositionRef.current.set(link.ref_id, {
            sx,
            sy,
            tx,
            ty,
            sz: 0,
            tz: 0,
          })

          const midPoint = new Vector3((sx + tx) / 2, (sy + ty) / 2, 0)

          text.position.set(midPoint.x, midPoint.y, 1)

          let angle = Math.atan2(ty - sy, tx - sx)

          if (tx < sx || (Math.abs(tx - sx) < 0.01 && ty < sy)) {
            angle += Math.PI
          }

          text.rotation.set(0, 0, angle)

          Line.geometry.setPositions([sx, sy, 0, tx, ty, 0])

          const { material } = Line

          material.color = new Color(colors.white)
          text.visible = true
          material.opacity = 1
          material.linewidth = 2

          if (targetNode.isPathNode && sourceNode.isPathNode) {
            material.color = new Color(PATH_COLOR)
            text.visible = false
            material.linewidth = 4
            material.transparent = true
            material.opacity = 0.3
          }
        }
      }
    })

    const nodesVector = nodes.map((i: NodeExtended) => new Vector3(i.x, i.y, i.z))

    const boundingBox = new Box3().setFromPoints(nodesVector)

    const boundingSphere = new Sphere()

    boundingBox.getBoundingSphere(boundingSphere)

    setSelectionGraphRadius(boundingSphere.radius)
  }, [links, setSelectionGraphRadius, nodes])

  return (
    <group ref={groupRef} name="simulation-3d-group__connections">
      {links?.map((l: Link) => {
        const position = linksPositionRef.current?.get(l.ref_id) || {
          sx: 0,
          sy: 0,
          sz: 0,
          tx: 0,
          ty: 0,
          tz: 0,
        }

        return (
          <Connection
            key={l.ref_id}
            label={l.edge_type}
            sourceX={position.sx}
            sourceY={position.sy}
            sourceZ={position.sz}
            targetX={position.tx}
            targetY={position.ty}
            targetZ={position.tz}
          />
        )
      })}
    </group>
  )
})

Connections.displayName = 'Connections'
