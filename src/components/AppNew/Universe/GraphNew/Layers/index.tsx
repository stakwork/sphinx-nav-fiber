import { Box, Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { Flex } from '~/components/common/Flex'

const positions = [-1, 0, 1, 2, 3, 4]

export const Layer = () => {
  const boxRef = useRef()
  const { camera } = useThree()

  const handleClick = (e) => {
    console.log(123)
    e.stopPropagation()

    // const position = new Vector3(300, 300, 300)

    // Focus camera on the box
    // camera.position.copy(position.clone().add(new Vector3(0, 0, 500)))
    camera.lookAt(0, 0, 0)
  }

  return (
    <>
      {positions.map((i) => (
        // eslint-disable-next-line react/no-array-index-key
        <group key={i} position={[0, -1 * i * 300, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <Box ref={boxRef} args={[1000, 1000, 0]}>
            <meshBasicMaterial color="black" opacity={0.9} transparent />
          </Box>
          <Html
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onPointerOut={(e) => e.stopPropagation()}
            onPointerOver={(e) => e.stopPropagation()}
            onPointerUp={(e) => e.stopPropagation()}
            position={[0, 0, -10]}
            sprite
            zIndexRange={[26777272, 26777273]}
          >
            <Flex
              onClick={handleClick}
              style={{ color: 'white', fontSize: '20px', whiteSpace: 'nowrap', cursor: 'pointer' }}
            >
              Text on edge
            </Flex>
          </Html>
        </group>
      ))}
    </>
  )
}
