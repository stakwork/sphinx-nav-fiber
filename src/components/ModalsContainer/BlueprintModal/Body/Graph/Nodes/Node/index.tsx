import { Circle, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useDrag } from '@use-gesture/react'
import { memo, useRef } from 'react'
import { BoxGeometry, Mesh, Vector3 } from 'three'
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

export const boxGeometry = new BoxGeometry(2, 2, 2)

export const Node = memo(({ node, setSelectedNode, onSimulationUpdate, isSelected }: Props) => {
  const meshRef = useRef<Mesh | null>(null)

  console.log(isSelected)

  const { size, camera } = useThree()

  const bind = useDrag((args) => {
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
    setSelectedNode()
  }

  return (
    // @ts-ignore Ignores type error on next line)
    <mesh ref={meshRef} onClick={handleClick} {...bind()} position={new Vector3(node.x, node.y, 0)}>
      <Circle args={[NODE_RADIUS, 30, 20]}>
        <meshStandardMaterial attach="material" color={color} />
      </Circle>

      <Text {...fontProps} color="#000" fontSize={2}>
        {node.type}
      </Text>
    </mesh>
  )
})

Node.displayName = 'Node'
