import { ReactNode } from 'react'
import { ColorName } from '~/utils/colors'

type ButtonKind = 'small' | 'regular' | 'big'

export type Props = {
  background?: ColorName
  children: string | string[]
  endIcon?: ReactNode
  startIcon?: ReactNode
  disabled?: boolean
  className?: string
  id?: string
  kind?: ButtonKind
  onClick?: () => void
  onPointerDown?: () => void
  shape?: 'rounded' | 'squared'
  textColor?: ColorName
  type?: 'submit' | 'button'
}
