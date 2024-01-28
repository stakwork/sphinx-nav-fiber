import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text, TextKind } from '~/components/common/Text'
import { ColorName } from '~/utils/colors'

type Props = {
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

const getButtonKindDimensions = ({ kind, shape }: Pick<Props, 'kind' | 'shape'>) => {
  switch (kind) {
    case 'small':
      return css`
        padding: 4px 8px;
        border-radius: ${shape === 'rounded' ? '16px' : '8px'};
        height: 32px;
      `
    case 'big':
      return css`
        padding: 16px 24px;
        border-radius: ${shape === 'rounded' ? '24px' : '8px'};
        height: 48px;
      `
    default:
      return css`
        padding: 8px 16px;
        border-radius: ${shape === 'rounded' ? '32px' : '8px'};
        height: 64px;
      `
  }
}

const getTextKind = ({ kind }: Pick<Props, 'kind'>): TextKind => {
  switch (kind) {
    case 'small':
      return 'regularBold'
    case 'big':
      return 'mediumBold'
    default:
      return 'regularBold'
  }
}

const Wrapper = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  justify: 'center',
})<Pick<Props, 'kind' | 'disabled' | 'shape'>>`
  border: none;
  cursor: pointer;
  pointer-events: auto;

  ${getButtonKindDimensions}

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.9)};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`

type ButtonKind = 'small' | 'regular' | 'big'

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
