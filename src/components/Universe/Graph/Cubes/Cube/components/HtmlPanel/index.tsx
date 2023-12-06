import { Float, Html } from '@react-three/drei'

import { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { Vector3 } from 'three'
import { useIsMatchBreakpoint } from '~/utils/useIsMatchBreakpoint'
import {
  defaultDimensions,
  defaultDimensionsMobile,
  withTranscriptDimensions,
  withTranscriptDimensionsMobile,
} from './constants'

type Props = {
  children: React.ReactNode
  speed?: number
  position: Vector3
  intensity?: number
  withTranscript?: boolean
  visible: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stopPropagationHandler = (e: any) => e.stopPropagation()
const floatingRange = [1, 2] as [(number | undefined)?, (number | undefined)?] | undefined

export const HtmlPanel = ({ speed = 2, intensity = 4, children, withTranscript, position, visible }: Props) => {
  const isMobile = useIsMatchBreakpoint('sm', 'down')

  const dimensions = useMemo(() => {
    if (isMobile) {
      return withTranscript ? withTranscriptDimensionsMobile : defaultDimensionsMobile
    }

    return withTranscript ? withTranscriptDimensions : defaultDimensions
  }, [isMobile, withTranscript])

  return (
    <Float
      floatingRange={floatingRange}
      /* Up/down float intensity, works like a multiplier with floatingRange,defaults to 1 */
      floatIntensity={intensity}
      /* Animation speed, defaults to 1 */
      position={position}
      speed={speed}
    >
      <Html
        center
        className="html-panel"
        onClick={stopPropagationHandler}
        onKeyDown={stopPropagationHandler}
        onPointerDown={stopPropagationHandler}
        onPointerOut={stopPropagationHandler}
        onPointerOver={stopPropagationHandler}
        onPointerUp={stopPropagationHandler}
        sprite
      >
        <HtmlWrap
          className="html-panel"
          dimensions={dimensions}
          id="html-panel"
          onPointerDown={stopPropagationHandler}
          onPointerOut={stopPropagationHandler}
          onPointerOver={stopPropagationHandler}
          onPointerUp={stopPropagationHandler}
          visible={visible}
        >
          {children}
        </HtmlWrap>
      </Html>
    </Float>
  )
}

HtmlPanel.displayName = 'HtmlPanel'

const HtmlWrap = styled.div<{ dimensions: [number, number, number, number]; visible: boolean }>`
  ${({ dimensions: [top, left, width, height] = defaultDimensions }) => css`
    top: ${top}px;
    left: ${left}px;
    width: ${width}px;
    height: ${height}px;
  `}
  ${({ visible }) => css`
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'auto' : 'none'};
    user-select: ${visible ? 'auto' : 'none'};
  `}
  position: absolute;
  border-radius: 20px;
  font-size: 80px;
  color: #fff;
  border: solid 3px #5078f2;
  background: #00000099;
  transition: opacity 0.2s;
  overflow-y: auto;
`
