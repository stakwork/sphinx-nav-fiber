import styled from 'styled-components'

interface TooltipProps {
  content: string
  children: React.ReactNode
  margin?: string
}

const TooltipContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`

const TooltipText = styled.div<{ margin?: string }>`
  visibility: hidden;
  width: auto;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 4px;
  padding: 5px 8px;
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: ${({ margin }) => margin || '0px'};
  opacity: 0;
  transition: opacity 0.3s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 600;

  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`

export const Tooltip = ({ content, children, margin }: TooltipProps) => (
  <TooltipContainer>
    {children}
    <TooltipText margin={margin}>{content}</TooltipText>
  </TooltipContainer>
)
