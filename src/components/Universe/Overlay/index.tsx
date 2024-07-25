import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ActionsToolbar } from '~/components/App/ActionsToolbar'
import { useGraphStore } from '~/stores/useGraphStore'
import { Tooltip } from '../Graph/Cubes/Cube/components/Tooltip'

export const Overlay = () => {
  const [hoveredNode, isHovering] = useGraphStore((s) => [s.hoveredNode, s.isHovering])
  const [isVisible, setIsVisible] = useState(false)
  const [isTooltipHovered, setIsTooltipHovered] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (isHovering || isTooltipHovered) {
      setIsVisible(true)
    } else {
      timer = setTimeout(() => setIsVisible(false), 300)
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [isHovering, isTooltipHovered])

  const handleTooltipMouseEnter = useCallback(() => {
    setIsTooltipHovered(true)
  }, [])

  const handleTooltipMouseLeave = useCallback(() => {
    setIsTooltipHovered(false)
  }, [])

  return (
    <OverlayWrap>
      {hoveredNode && isVisible && (
        <TooltipWrapper onMouseEnter={handleTooltipMouseEnter} onMouseLeave={handleTooltipMouseLeave}>
          <Tooltip node={hoveredNode} />
        </TooltipWrapper>
      )}
      <ActionsToolbar />
    </OverlayWrap>
  )
}

const OverlayWrap = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  userSelect: 'none',
  pointerEvents: 'none',
  display: 'flex',

  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  height: '100%',
  width: '100%',
  padding: '16px',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    top: 50,
  },
}))

const TooltipWrapper = styled.div`
  position: absolute;
  top: 65px;
  right: 55px;
  z-index: 100;
`
