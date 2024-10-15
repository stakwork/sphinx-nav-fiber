import { Line } from '@react-three/drei'
import gsap from 'gsap'
import { forwardRef, useEffect } from 'react'
import { Vector3 } from 'three'
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

    return (
      <Line
        ref={ref}
        color="rgba(136, 136, 136, 1)"
        isLine2
        lineWidth={1}
        opacity={1}
        points={[source, target]}
        transparent
        visible={visible}
      />
    )
  },
)

LineComponent.displayName = 'LineComponent'

export default LineComponent
