import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { TypeBadge } from '~/components/common/TypeBadge'
import { useHoveredNode } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils'

export const CursorTooltip = () => {
  const tooltipRef = useRef<HTMLDivElement | null>(null)

  const node = useHoveredNode()

  const getIndexByType = useSchemaStore((s) => s.getIndexByType)

  const indexKey = node ? getIndexByType(node.node_type) : ''

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (tooltipRef.current) {
        const tooltip = tooltipRef.current
        const tooltipWidth = tooltip.offsetWidth
        const tooltipHeight = tooltip.offsetHeight

        let top = e.clientY - 20 // 20px above the cursor
        let left = e.clientX - 20 // 20px to the left of the cursor

        // Prevent clipping at the bottom of the screen
        if (top + tooltipHeight > window.innerHeight) {
          top = window.innerHeight - tooltipHeight - 10 // 10px padding
        }

        // Prevent clipping on the right of the screen
        if (left + tooltipWidth > window.innerWidth) {
          left = window.innerWidth - tooltipWidth - 10 // 10px padding
        }

        // Prevent clipping on the left of the screen
        if (left < 0) {
          left = 10 // Minimum padding
        }

        // Prevent clipping at the top of the screen
        if (top < 0) {
          top = 10 // Minimum padding
        }

        tooltip.style.top = `${top}px`
        tooltip.style.left = `${left}px`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Ensure node exists before rendering tooltip
  if (!node) {
    return null
  }

  const content = node.properties && indexKey && node.properties[indexKey] ? node.properties[indexKey] : ''

  return (
    <TooltipContainer ref={tooltipRef}>
      <Flex>
        <TypeBadge type={node.node_type || ''} />
      </Flex>
      <Flex>{content}</Flex>
    </TooltipContainer>
  )
}

const TooltipContainer = styled(Flex)`
  position: fixed;
  background: ${colors.BG1};
  color: white;
  padding: 5px;
  border-radius: 3px;
  pointer-events: none; /* Prevent interference with mouse events */
  z-index: 1000; /* Ensure it's on top */
  max-width: 200px; /* Optional: prevent overly large tooltips */
  white-space: nowrap; /* Optional: prevent text wrapping */
  overflow: hidden; /* Optional: prevent text overflow */
  text-overflow: ellipsis; /* Optional: add ellipsis for overflowing text */
`
