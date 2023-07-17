import { ButtonBase, ButtonBaseProps, styled } from '@mui/material'
import { useEffect, useRef } from 'react'
import { createBtn } from './createBtn'

export const SiriLikeButton = ({ children, ...props }: ButtonBaseProps) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const destroy = createBtn(ref)

    return () => {
      destroy?.()
    }
  }, [])

  return (
    <ButtonContainer {...props}>
      {children && <div className="children">{children}</div>}
      <Canvas ref={ref} />
    </ButtonContainer>
  )
}

const ButtonContainer = styled(ButtonBase)(() => ({
  width: 48,
  height: 48,
  '& .children': {
    zIndex: 1,
  },
}))

const Canvas = styled('canvas')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 70,
  height: 70,
}))
