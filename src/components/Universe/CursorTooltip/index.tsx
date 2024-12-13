import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useHoveredNode } from '~/stores/useGraphStore'
import { colors } from '~/utils'
import { HoverCard } from './HoverCard/index'

export const CursorTooltip = () => {
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const node = useHoveredNode()

  useEffect(() => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = node ? 'block' : 'none'
    }
  }, [node, tooltipRef])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const tooltip = tooltipRef.current

      if (!tooltip) {
        return
      }

      tooltip.style.top = `${e.clientY + 10}px`
      tooltip.style.left = `${e.clientX + 10}px`

      // Prevent clipping at screen edges
      const tooltipWidth = tooltip.offsetWidth
      const tooltipHeight = tooltip.offsetHeight
      const maxX = window.innerWidth - tooltipWidth - 10
      const maxY = window.innerHeight - tooltipHeight - 10

      if (e.clientX + 10 + tooltipWidth > window.innerWidth) {
        tooltip.style.left = `${maxX}px`
      }

      if (e.clientY + 10 + tooltipHeight > window.innerHeight) {
        tooltip.style.top = `${maxY}px`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, []) // Empty array ensures the listener is added only once

  return <TooltipContainer ref={tooltipRef}>{node && <HoverCard node={node} />}</TooltipContainer>
}

const TooltipContainer = styled(Flex)`
  position: fixed;
  background: ${colors.BG1};
  color: white;
  padding: 5px;
  border-radius: 3px;
  pointer-events: none; /* Tooltip won't block mouse events */
  z-index: 1000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: none; /* Start hidden */
`
