import clsx from 'clsx'
import { forwardRef, memo } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils'

type ParagraphProps = {
  active: boolean
  start: string
  text: string
}

const ParagraphComponent = forwardRef<HTMLDivElement, ParagraphProps>(({ active, start, text }, ref) => (
  <StyledParagraph ref={ref} className={clsx({ active })}>
    <Start>{start}</Start>
    <Words>
      <span>{text}</span>
    </Words>
  </StyledParagraph>
))

ParagraphComponent.displayName = 'ParagraphComponent'

export const Paragraph = memo(ParagraphComponent, (prevProps, nextProps) => prevProps.active === nextProps.active)

const StyledParagraph = styled(Flex)`
  flex-direction: row;
  align-items: flex-start;
  font-size: 14px;
  padding: 8px 24px;
  &.active {
    background: ${colors.AI_HIGHLIGHT};
  }
`

const Start = styled.span`
  background: ${colors.lightBlue100};
  color: ${colors.lightBlue500};
  padding: 2px;
  margin-right: 8px;
  border-radius: 4px;
`

const Words = styled.div`
  margin: 0 2px;
  word-break: break-word;

  &.active {
    background: ${colors.AI_HIGHLIGHT};
  }
`
