import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { memo, useState } from 'react'
import { Flex } from '~/components/common/Flex'
import { HoverCard } from '../../../../../Universe/CursorTooltip/HoverCard'
import { RoundedRectangle } from '../RoundedRectangle'
import { Content } from './Content'
import { Image } from './Image'

type Props = {
  width: number
  height: number
  position: [number, number, number]
  url: string
  onButtonClick: () => void
  name: string
  type: string
  color: string
  description?: string
}

export const Node = memo(({ width, height, position, url, onButtonClick, name, type, color, description }: Props) => {
  const { camera } = useThree()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <group position={position}>
      {/* Background Rectangle */}
      <RoundedRectangle color={color} height={height} radius={1.5} width={width} />
      {false && <Image height={height} url={url} width={width} />}

      {/* Html */}
      <Html position={[-width / 2, height / 2, 0]}>
        <Flex
          onClick={() => onButtonClick()}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            fontSize: '12px',
            color: 'white',
            fontWeight: 600,
            width: `${width * camera.zoom}px`,
            height: `${height * camera.zoom}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            pointerEvents: 'auto',
          }}
        >
          <Content name={`${name}`} type={type || ''} url={url} />
          {isHovered && <HoverCard description={description} title={name} />}
        </Flex>
      </Html>
    </group>
  )
})

Node.displayName = 'Node'
