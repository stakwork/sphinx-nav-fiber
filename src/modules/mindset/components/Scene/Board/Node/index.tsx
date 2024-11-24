import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { OrthographicCamera } from 'three'
import { Flex } from '~/components/common/Flex'
import { RoundedRectangle } from '../RoundedRectangle'
import { Content } from './Content'

type Props = {
  width: number
  height: number
  position: [number, number, number]
  url: string
  onButtonClick: () => void
  name: string
  type: string
  color: string
}

export const Node = ({ width, height, position, url, onButtonClick, name, type, color }: Props) => {
  const { camera, size } = useThree()

  console.log(url, type)

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
      <RoundedRectangle color={color} height={height} radius={1.5} width={width} />

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
          <Content name={name} url="logo.png" />
        </Flex>
      </Html>
    </group>
  )
}
