import { Html, Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { OrthographicCamera } from 'three'
import { Flex } from '~/components/common/Flex'
import { fontProps } from '~/components/Universe/Graph/Cubes/Text/constants'
import { RoundedImage } from '../RoundedImage'
import { RoundedRectangle } from '../RoundedRectangle'

type Props = {
  width: number
  height: number
  position: [number, number, number]
  url: string
  onButtonClick: () => void
  name: string
  type: string
}

export const Node = ({ width, height, position, url, onButtonClick, name, type }: Props) => {
  const { camera, size } = useThree()

  // Function to calculate the distance between the camera and the node
  const getPixelSize = (worldSize: number, worldHeight: number) => {
    const ortographicCamera = camera as OrthographicCamera
    const visibleWidth = ortographicCamera.right - ortographicCamera.left
    const visibleHeight = ortographicCamera.top - ortographicCamera.bottom

    return {
      pixelWidth: (worldSize / visibleWidth) * size.width,
      pixelHeight: (worldHeight / visibleHeight) * size.height,
    }
  }

  // Calculate pixel dimensions for the node
  const { pixelWidth, pixelHeight } = getPixelSize(width, height)

  return (
    <group position={position}>
      {/* Background Rectangle */}
      <RoundedRectangle color="#353A46" height={height} radius={1.5} width={width} />

      {/* Rounded Image */}
      <RoundedImage position={[-width / 2 + 2, height / 4, 0.1]} scale={[1, 1, 1]} url={url} />

      {/* Text */}
      <>
        <Text
          {...fontProps}
          anchorX="center"
          anchorY="middle"
          color="white"
          fontSize={1}
          position={[0, -height / 8, 0.1]}
        >
          {name}
        </Text>
        <Text
          {...fontProps}
          anchorX="center"
          anchorY="middle"
          color="white"
          fontSize={1}
          position={[0, -height / 8 + 1, 0.1]}
        >
          {type}
        </Text>
      </>

      {/* Html */}
      <Html position={[-width / 2, height / 2, 0]}>
        <Flex
          onClick={() => onButtonClick()}
          style={{
            fontSize: '20px',
            color: 'white',
            fontWeight: 600,
            width: `${pixelWidth}px`,
            height: `${pixelHeight}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px', // Optional for rounded corners
            pointerEvents: 'auto', // Allow interaction
          }}
        >
          {type}
        </Flex>
      </Html>
    </group>
  )
}
