import { Float, Html, useTexture } from '@react-three/drei'

import { useEffect, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Vector3 } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { useIsMatchBreakpoint } from '~/utils/useIsMatchBreakpoint'
import { panelIsHidden, setPointerHoverStyle, white } from '../../constants'
import {
  defaultDimensions,
  defaultDimensionsMobile,
  withTranscriptDimensions,
  withTranscriptDimensionsMobile,
} from './constants'

type Props = {
  children: React.ReactNode
  speed?: number
  intensity?: number
  withTranscript?: boolean
  position: Vector3
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stopPropagationHandler = (e: any) => e.stopPropagation()
const floatingRange = [1, 2] as [(number | undefined)?, (number | undefined)?] | undefined

export const HtmlPanel = ({ speed = 2, intensity = 4, children, withTranscript, position }: Props) => {
  const isMobile = useIsMatchBreakpoint('sm', 'down')

  const htmlRef = useRef<HTMLDivElement>(null)

  const setHideNodeDetails = useDataStore((s) => s.setHideNodeDetails)
  const hideNodeDetails = useDataStore((s) => s.hideNodeDetails)

  const selectedNode = useSelectedNode()
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)

  const dimensions = useMemo(() => {
    if (isMobile) {
      return withTranscript ? withTranscriptDimensionsMobile : defaultDimensionsMobile
    }

    return withTranscript ? withTranscriptDimensions : defaultDimensions
  }, [isMobile, withTranscript])

  const closeTexture = useTexture('icons/close_white.svg')

  const panelIsVisible = useMemo(
    () => selectedNode && !hideNodeDetails && !panelIsHidden(selectedNode?.node_type),
    [selectedNode, showSelectionGraph, hideNodeDetails],
  )

  useEffect(() => {
    if (htmlRef.current) {
      htmlRef.current.scrollTo(0, 0)
    }
  }, [selectedNode])

  if (!panelIsVisible) {
    return null
  }

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
        // sprite
      >
        <HtmlWrap
          className="html-panel"
          dimensions={dimensions}
          id="html-panel"
          ref={htmlRef}
          onPointerDown={stopPropagationHandler}
          onPointerOut={stopPropagationHandler}
          onPointerOver={stopPropagationHandler}
          onPointerUp={stopPropagationHandler}
        >
          {children}
        </HtmlWrap>
      </Html>

      <group position={position} scale={2}>
        <mesh
          onPointerEnter={() => {
            setPointerHoverStyle(true)
          }}
          onPointerLeave={() => {
            setPointerHoverStyle(false)
          }}
          onPointerDown={() => {
            setHideNodeDetails(!hideNodeDetails)
          }}
          onPointerUp={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <circleGeometry args={[1.5, 40]} />
          <meshBasicMaterial alphaMap={closeTexture} color={white} map={closeTexture} transparent />
        </mesh>
      </group>
    </Float>
  )
}

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
  border: solid 3px #5078f2;
  background: #00000099;
  transition: opacity 0.2s;
  overflow-y: auto;
`
