import { Circle, Html, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useDrag } from '@use-gesture/react'
import { memo, useRef, useState } from 'react'
import styled from 'styled-components'
import { BoxGeometry, Mesh, Vector3 } from 'three'
import { truncateText } from '~/components/ModalsContainer/BlueprintModal/Body/Editor/utils'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { fontProps } from '~/components/Universe/Graph/Cubes/Text/constants'
import { NODE_RADIUS } from '../../constants'

export const NODE_TYPE_COLORS = ['#ff13c9', '#5af0ff', '#3233ff', '#c2f0c2', '#ff6666', '#99ccff', '#ffb3b3']

type Props = {
  node: SchemaExtended
  setSelectedNode: () => void
  isSelected: boolean
  onSimulationUpdate: () => void
}

const Tooltip = styled.div`
  color: white;
  background: rgba(0, 0, 0, 1);
  padding: 2px 5px;
  border-radius: 4px;
  word-wrap: break-word;
  text-align: center;
  white-space: nowrap;
  visibility: visible;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`

const TooltipWrapper = styled(Html)`
  position: absolute;
`

export const boxGeometry = new BoxGeometry(2, 2, 2)

export const Node = memo(({ node, setSelectedNode, onSimulationUpdate, isSelected }: Props) => {
  const meshRef = useRef<Mesh | null>(null)
  const [showTooltip, setShowTooltip] = useState(false)

  console.log(isSelected)

  const { size, camera } = useThree()

  const bind = useDrag((args) => {
    if (node.type === 'Thing') {
      return
    }

    const {
      xy: [x, y],
      down,
      dragging,
      first,
      elapsedTime,
    } = args

    if (!dragging || first || elapsedTime < 100) {
      return
    }

    if (down && meshRef.current) {
      onSimulationUpdate()

      const canvasX = ((x - size.left) / window.innerWidth) * size.width
      const canvasY = ((y - size.top) / window.innerHeight) * size.height

      const VectorPosition = new Vector3((canvasX / size.width) * 2 - 1, (-canvasY / size.height) * 2 + 1, 0)

      const VectorPosition1 = VectorPosition.unproject(camera)

      const VectorPosition2 = VectorPosition1.multiply(new Vector3(1, 1, 0)).clone()

      // Move the mesh to the new position
      // eslint-disable-next-line no-param-reassign
      node.fx = VectorPosition2.x
      // eslint-disable-next-line no-param-reassign
      node.fy = VectorPosition2.y
    }
  })

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.set(node.x || 0, node.y || 0, 0)
    }
  })

  const color = NODE_TYPE_COLORS[node?.children?.length] || 'red'

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()

    if (node.type !== 'Thing') {
      setSelectedNode()
    }
  }

  const truncatedText = truncateText(node.type || '', NODE_RADIUS - 1)

  const handleMouseOver = () => {
    setShowTooltip(true)
  }

  const handleMouseOut = () => {
    setShowTooltip(false)
  }

  return (
    // @ts-ignore Ignores type error on next line)
    <mesh
      ref={meshRef}
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      onClick={handleClick as any}
      {...bind()}
      onPointerOut={handleMouseOut}
      onPointerOver={handleMouseOver}
      position={new Vector3(node.x, node.y, 0)}
    >
      <Circle args={[NODE_RADIUS, 30, 20]}>
        <meshStandardMaterial attach="material" color={color} />
      </Circle>

      <Text {...fontProps} color="#000" fontSize={2} maxWidth={NODE_RADIUS * 2} textAlign="center">
        {truncatedText}
      </Text>

      {showTooltip && (
        <TooltipWrapper position={[0, 5, 0]} zIndexRange={[100, 0]}>
          <Tooltip>{node.type}</Tooltip>
        </TooltipWrapper>
      )}
    </mesh>
  )
})

Node.displayName = 'Node'
