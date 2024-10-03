import React, { useRef, useEffect } from 'react'
import { hslToHex } from './ColorUtils'

interface SaturationPickerProps {
  hue: number
  onChange: (color: string) => void
}

const SaturationPicker: React.FC<SaturationPickerProps> = ({ hue, onChange }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

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

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current

    if (canvas) {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const saturation = x / canvas.width
      const brightness = 1 - y / canvas.height

      const hexColor = hslToHex(hue, saturation * 100, brightness * 100)

      onChange(hexColor)
    }
  }

  return (
    <div>
      <canvas ref={canvasRef} height={162} onClick={handleCanvasClick} width={260} />
    </div>
  )
}

export default SaturationPicker
