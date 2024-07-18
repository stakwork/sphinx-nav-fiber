import styled from 'styled-components'

interface TooltipProps {
  content: string
  children: React.ReactNode
  margin?: string
  backgroundColor?: string
  color?: string
  padding?: string
  fontSize?: string
  fontWeight?: string
  borderRadius?: string
  position?: string
  minWidth?: string
  whiteSpace?: string
  textAlign?: string
}

const TooltipContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`

const TooltipText = styled.div<{
  margin?: string
  backgroundColor?: string
  color?: string
  padding?: string
  fontSize?: string
  fontWeight?: string
  borderRadius?: string
  position?: string
  minWidth?: string
  whiteSpace?: string
  textAlign?: string
}>`
  visibility: hidden;
  width: auto;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  color: ${({ color }) => color || 'black'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
  padding: ${({ padding }) => padding || '5px 8px'};
  position: absolute;
  z-index: 1;
  ${({ position }) => (position === 'top' ? 'bottom: 100%;' : 'top: 100%;')}
  left: 50%;
  transform: translateX(-50%);
  margin-top: ${({ margin }) => margin || '0px'};
  opacity: 0;
  transition: opacity 0.3s;
  white-space: ${({ whiteSpace }) => whiteSpace || 'nowrap'};
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ fontSize }) => fontSize || '12px'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};

  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`

export const Tooltip = ({
  content,
  children,
  margin,
  backgroundColor,
  color,
  padding,
  fontSize,
  fontWeight,
  borderRadius,
  minWidth,
  whiteSpace,
  position,
  textAlign,
}: TooltipProps) => (
  <TooltipContainer>
    {children}
    <TooltipText
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}
      minWidth={minWidth}
      padding={padding}
      position={position}
      textAlign={textAlign}
      whiteSpace={whiteSpace}
    >
      {content}
    </TooltipText>
  </TooltipContainer>
)
