import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useHoveredNode } from '~/stores/useGraphStore'
import { HoverCard } from './HoverCard/index'

export const CursorTooltip = () => {
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const node = useHoveredNode()

  useEffect(() => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = node ? 'block' : 'none'
    }
  }, [node])

  useEffect(() => {
    let animationFrameId: number
    const tooltip = tooltipRef.current

    const handleMouseMove = (e: MouseEvent) => {
      if (!tooltip) {
        return
      }

      const target = e.target as Element

      if (target.tagName !== 'CANVAS') {
        tooltip.style.display = 'none'

        return
      }

      tooltip.style.display = 'block'

      const tooltipWidth = tooltip.offsetWidth
      const tooltipHeight = tooltip.offsetHeight
      const maxX = window.innerWidth - tooltipWidth - 10
      const maxY = window.innerHeight - tooltipHeight - 10

      const x = Math.min(e.clientX + 10, maxX)
      const y = Math.min(e.clientY + 10, maxY)

      animationFrameId = requestAnimationFrame(() => {
        tooltip.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <TooltipContainer ref={tooltipRef}>{node && <HoverCard node={node} />}</TooltipContainer>
}

const TooltipContainer = styled(Flex)`
  position: fixed;
  left: 0;
  top: 0;
  transform: translate(0, 0);
  will-change: transform;
  color: white;
  padding: 0;
  pointer-events: none;
  z-index: 1000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`
