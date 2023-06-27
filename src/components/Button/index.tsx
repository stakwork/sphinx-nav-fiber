import React from 'react'
import { Text } from '~/components/common/Text'
import { Props } from './ButtonInterface'
import { Wrapper } from './ButtonStyledComponents'
import { getTextKind } from './ButtonUtils'

export const Button = ({
  background = 'primaryButton',
  children,
  className = 'button',
  startIcon,
  endIcon,
  disabled,
  id,
  kind = 'regular',
  onClick,
  onPointerDown,
  shape = 'squared',
  textColor = 'white',
  type,
}: Props) => (
  <Wrapper
    as="button"
    background={background}
    className={className}
    disabled={disabled}
    id={id}
    kind={kind}
    onClick={onClick}
    onPointerDown={onPointerDown}
    shape={shape}
    type={type}
  >
    {startIcon && startIcon}
    <Text color={textColor} kind={getTextKind({ kind })}>
      {children}
    </Text>
    {endIcon && endIcon}
  </Wrapper>
)
