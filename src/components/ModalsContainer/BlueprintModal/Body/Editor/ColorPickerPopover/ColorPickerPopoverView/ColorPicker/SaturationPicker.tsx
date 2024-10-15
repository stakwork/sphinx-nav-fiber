import React, { useRef, useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { hslToHex } from './ColorUtils'

interface SaturationPickerProps {
  hue: number
  onChange: (color: string) => void
}

const Container = styled.div`
  position: relative;
`

const Pointer = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: ${(props) => props.y - 7}px;
  left: ${(props) => props.x - 7}px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: transparent;
  box-shadow: inset 0 0 0 3px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  transition: top 0.1s ease, left 0.1s ease;
`

const SaturationPicker: React.FC<SaturationPickerProps> = ({ hue, onChange }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [pointerPos, setPointerPos] = useState<{ x: number; y: number }>({ x: 80, y: 50 })
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas) {
      const ctx = canvas.getContext('2d')

      if (ctx) {
        const { width, height } = canvas

        // eslint-disable-next-line no-plusplus
        for (let x = 0; x < width; x++) {
          // eslint-disable-next-line no-plusplus
          for (let y = 0; y < height; y++) {
            const saturation = x / width
            const brightness = 1 - y / height
            const color = `hsl(${hue}, ${saturation * 100}%, ${brightness * 100}%)`

            ctx.fillStyle = color
            ctx.fillRect(x, y, 1, 1)
          }
        }
      }
    }
  }, [hue])

  const handleCanvasInteraction = useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      const canvas = canvasRef.current

      if (canvas) {
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const saturation = x / canvas.width
        const brightness = 1 - y / canvas.height

        const hexColor = hslToHex(hue, saturation * 100, brightness * 100)

        setPointerPos({ x, y })
        onChange(hexColor)
      }
    },
    [hue, onChange],
  )

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true)
    handleCanvasInteraction(e)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleCanvasInteraction(e)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, handleMouseMove])

  return (
    <Container>
      <canvas ref={canvasRef} height={162} onMouseDown={handleMouseDown} width={260} />
      <Pointer x={pointerPos.x} y={pointerPos.y} />
    </Container>
  )
}

export default SaturationPicker
