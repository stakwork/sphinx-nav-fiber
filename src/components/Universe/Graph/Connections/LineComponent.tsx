import { Line } from '@react-three/drei'
import gsap from 'gsap'
import { forwardRef, useEffect } from 'react'
import { Color, Vector3 } from 'three'
import { Line2 } from 'three-stdlib'

type LineComponentProps = {
  source: Vector3
  target: Vector3
  isSelected: boolean
  lineWidth: number
  visible: boolean
}

const LineComponent = forwardRef<Line2, LineComponentProps>(
  ({ source, target, isSelected, lineWidth, visible }, ref) => {
    useEffect(() => {
      const line = (ref as React.MutableRefObject<Line2 | null>).current

      if (line) {
        gsap.fromTo(
          line.material,
          { linewidth: 5 },
          {
            linewidth: isSelected ? 2 : lineWidth,
            duration: 1,
          },
        )
      }
    }, [isSelected, lineWidth, ref])

    const color = new Color(0xff0000)

    return (
      <Line ref={ref} color={color} isLine2 lineWidth={2} opacity={0.5} points={[source, target]} visible={visible} />
    )
  },
)

LineComponent.displayName = 'LineComponent'

export default LineComponent
