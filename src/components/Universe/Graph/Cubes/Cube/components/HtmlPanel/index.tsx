import { Float, Html } from '@react-three/drei'
import { memo } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  children: React.ReactNode
  speed?: number
  intensity?: number
  withTransacript?: boolean
}

const defaultDimensions = [-200, -680, 500, 500] as [number, number, number, number]
const withTranscriptDimensions = [260, -40, 600, 300] as [number, number, number, number]

export const HtmlPanel = memo(({ speed = 2, intensity = 4, children, withTransacript }: Props) => (
  <Float
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
        dimensions={withTransacript ? withTranscriptDimensions : defaultDimensions}
        onPointerDown={(e) => e.stopPropagation()}
        onPointerOut={(e) => e.stopPropagation()}
        onPointerOver={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
      >
        {children}
      </HtmlWrap>
    </Html>
  </Float>
))

HtmlPanel.displayName = 'HtmlPanel'

const HtmlWrap = styled.div<{ dimensions: [number, number, number, number] }>`
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
