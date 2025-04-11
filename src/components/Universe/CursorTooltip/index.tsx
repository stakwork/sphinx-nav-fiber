import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useHoveredNode } from '~/stores/useGraphStore'
import { colors } from '~/utils'
import { HoverCard } from './HoverCard/index'

const CURSOR_SIZE = 70

export const CursorTooltip = () => {
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const node = useHoveredNode()

  useEffect(() => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = node ? 'block' : 'none'
    }
  }, [node])

  useEffect(() => {
    const canvasElement = document.getElementById('universe-canvas')
    let animationFrameId: number
    const tooltip = tooltipRef.current
    const cursor = cursorRef.current

    const handleMouseMove = (e: MouseEvent) => {
      if (!tooltip || !cursor) {
        return
      }

      const target = e.target as Element

      if (target.tagName !== 'CANVAS') {
        tooltip.style.display = 'none'
        cursor.style.display = 'none'
      } else {
        if (canvasElement) {
          canvasElement.style.cursor = 'none'
        }

        cursor.style.display = 'flex'
      }

      tooltip.style.display = 'block' // Ensure tooltip is visible if hovering canvas

      const tooltipWidth = tooltip.offsetWidth
      const tooltipHeight = tooltip.offsetHeight
      const maxX = window.innerWidth - tooltipWidth - 10
      const maxY = window.innerHeight - tooltipHeight - 10

      const x = Math.min(e.clientX + 10, maxX)
      const y = Math.min(e.clientY + 10, maxY)

      animationFrameId = requestAnimationFrame(() => {
        tooltip.style.transform = `translate(${x}px, ${y}px)`
        cursor.style.transform = `translate(${e.clientX - CURSOR_SIZE / 2}px, ${e.clientY - CURSOR_SIZE / 2}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <CustomCursorWrapper ref={cursorRef}>
        <Flex className="inner-circle">
          <span className="inner-circle__center">+</span>
        </Flex>
      </CustomCursorWrapper>
      <TooltipContainer ref={tooltipRef}>{node && <HoverCard node={node} />}</TooltipContainer>
    </>
  )
}

const TooltipContainer = styled(Flex)`
  position: fixed; /* Fixed position for the tooltip */
  left: 0;
  top: 0;
  transform: translate(0, 0); /* Initial transform */
  will-change: transform; /* Optimize for transform changes */
  color: white;
  padding: 0;
  pointer-events: none; /* Tooltip won't block mouse events */
  z-index: 1000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: none; /* Initially hidden */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Optional shadow for better visibility */
`

const CustomCursorWrapper = styled(Flex)`
  pointer-events: none;
  left: 0;
  top: 0;
  border: 1px solid ${colors.white};
  border-radius: 50%;
  border-color: rgba(255, 255, 255, 0.2);
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  width: ${CURSOR_SIZE}px;
  height: ${CURSOR_SIZE}px;
  align-items: center;
  justify-content: center;

  .inner-circle {
    border-radius: 50%;
    border: 1px solid ${colors.white};
    border-color: rgba(255, 255, 255, 0.2);
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 1);
    font-size: 6px;
    text-transform: uppercase;
    font-weight: 300;
    background: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));

    &__text {
      animation: fadeOpacity 8s infinite;
      padding: 12px;

      /* Define keyframes */
      @keyframes fadeOpacity {
        0%,
        100% {
          opacity: 0.2;
        }
        50% {
          opacity: 0.8;
        }
      }
    }

    &__center {
      font-size: 20px;
      font-weight: 200;
      opacity: 0.5;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      margin-top: -2px;
    }
  }
`
