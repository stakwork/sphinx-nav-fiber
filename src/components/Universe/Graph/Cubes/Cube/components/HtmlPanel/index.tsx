import { Float, Html } from '@react-three/drei'
import styled, { css } from 'styled-components'

type Props = {
  children: React.ReactNode
  dimensions?: [number, number, number, number]
  speed?: number
  intensity?: number
}

export const HtmlPanel = ({ dimensions, speed = 2, intensity = 4, children }: Props) => (
  <Float
    attach="geometry"
    floatingRange={[1, 2]}
    /* Up/down float intensity, works like a multiplier with floatingRange,defaults to 1 */
    floatIntensity={intensity}
    /* Animation speed, defaults to 1 */
    speed={speed}
  >
    <Html
      center
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
      onPointerOut={(e) => e.stopPropagation()}
      onPointerOver={(e) => e.stopPropagation()}
      onPointerUp={(e) => e.stopPropagation()}
      scale={6}
      sprite
      transform
    >
      <HtmlWrap
        dimensions={dimensions}
        onPointerDown={(e) => e.stopPropagation()}
        onPointerOut={(e) => e.stopPropagation()}
        onPointerOver={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
      >
        {children}
      </HtmlWrap>
    </Html>
  </Float>
)

const defaultDimensions = [-200, -680, 500, 500] as const

const HtmlWrap = styled.div<Pick<Props, 'dimensions'>>`
  ${({ dimensions: [top, left, width, height] = defaultDimensions }) =>
    css`
      top: ${top}px;
      left: ${left}px;
      width: ${width}px;
      height: ${height}px;
    `}

  position: absolute;
  border-radius: 20px;

  font-size: 80px;
  color: #fff;
  padding: 20px;
  border: solid 8px #5078f2;
  background: #00000099;
  overflow-y: auto;
`
