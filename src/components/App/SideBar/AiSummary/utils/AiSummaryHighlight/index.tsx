import styled, { keyframes } from 'styled-components'
import { colors } from '~/utils'
import { ExtractedEntity } from '~/types'
import { Tooltip } from '~/components/common/ToolTip'

// Define a keyframe animation for highlighting from top-left to bottom-right
const highlightAnimation = keyframes`
  0% {
    background-color: ${colors.SECONDARY_BLUE};
    color: white;
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
  100% {
    background-color: transparent;
    color: ${colors.SECONDARY_BLUE};
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`

const Highlight = styled.span<{ animate: boolean }>`
  padding: 0;
  margin: 0;
  color: ${colors.SECONDARY_BLUE};
  background-color: transparent;
  animation: ${({ animate }) => (animate ? highlightAnimation : 'none')} 0.5s ease-in-out forwards;
  animation-play-state: ${({ animate }) => (animate ? 'running' : 'paused')};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    animation: none;
  }
`

export function highlightAiSummary(
  sDescription: string,
  handleSubmit: (search: string) => void,
  mousePosition: number,
  entities?: ExtractedEntity[],
  isDescriptionComplete?: boolean,
) {
  if (!entities || entities.length === 0) {
    return sDescription
  }

  const sortedEntities = entities
    .map((entity) => entity.entity)
    .filter((entity) => typeof entity === 'string')
    .sort((a, b) => b.length - a.length)

  const escapedTerms = sortedEntities.map((entity) => escapeRegExp(entity))
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi')

  const parts = sDescription.split(regex)

  let positionLeft: string

  if (mousePosition <= 180) {
    positionLeft = '145%'
  } else if (mousePosition >= 250) {
    positionLeft = '10%'
  } else {
    positionLeft = '50%'
  }

  return (
    <>
      {parts.map((part, index) => {
        const entity = entities.find((e) => e.entity.toLowerCase() === part.toLowerCase())

        if (entity) {
          const uniqueKey = `${entity.entity}-${index}`

          return (
            <StyledTooltip key={uniqueKey} content={entity.description} positionLeft={positionLeft}>
              <Highlight animate={!!isDescriptionComplete} onClick={() => handleSubmit(part)}>
                {part}
              </Highlight>
            </StyledTooltip>
          )
        }

        return part
      })}
    </>
  )
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const StyledTooltip = styled(({ className, positionLeft, ...props }) => (
  <Tooltip
    {...props}
    backgroundColor={colors.BG2}
    borderRadius="6px"
    className={className}
    color="white"
    fontSize="12px"
    fontWeight="500"
    minWidth="160px"
    mrLeft={positionLeft}
    padding="10px"
    textAlign="start"
    whiteSpace="normal"
  />
))`
  & .tooltip-content {
    color: white;
  }
`
