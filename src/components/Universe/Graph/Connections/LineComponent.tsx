import { Line } from '@react-three/drei'
import gsap from 'gsap'
import { forwardRef, memo, useEffect } from 'react'
import { Vector3 } from 'three'
import { Line2 } from 'three-stdlib'
import { LinkPosition } from '..'
import { LINE_WIDTH } from '../../constants'

type LineComponentProps = {
  isSelected: boolean
  position: LinkPosition
}

// eslint-disable-next-line no-underscore-dangle
const _LineComponent = forwardRef<Line2, LineComponentProps>(({ isSelected, position }, ref) => {
  useEffect(() => {
    if (ref && (ref as React.MutableRefObject<Line2 | null>).current) {
      const line = (ref as React.MutableRefObject<Line2>).current

      gsap.fromTo(
        line.material,
        { linewidth: LINE_WIDTH * 5 },
        {
          linewidth: LINE_WIDTH,
          duration: 1,
        },
      )
    }
  }, [isSelected, ref])

  return (
    <Line
      ref={ref}
      isLine2
      opacity={0.5}
      points={[new Vector3(position.sx, position.sy, position.sz), new Vector3(position.tx, position.ty, position.tz)]}
    />
  )
})

_LineComponent.displayName = 'LineComponent'

export const LineComponent = memo(_LineComponent)
