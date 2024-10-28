import { Line } from '@react-three/drei'
import gsap from 'gsap'
import { memo, useEffect, useRef } from 'react'
import { Color, Vector3 } from 'three'
import { Line2 } from 'three-stdlib'

type LineComponentProps = {
  isSelected: boolean
  lineWidth: number
  visible: boolean
}

const VECTOR = new Vector3(0, 0, 0)

// eslint-disable-next-line no-underscore-dangle
export const _LineComponent = (props: LineComponentProps) => {
  const { isSelected, lineWidth, visible } = props
  const ref = useRef<Line2>(null)

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
    <Line ref={ref} color={color} isLine2 lineWidth={2} opacity={0.5} points={[VECTOR, VECTOR]} visible={visible} />
  )
}

_LineComponent.displayName = 'LineComponent'

export const LineComponent = memo(_LineComponent)
