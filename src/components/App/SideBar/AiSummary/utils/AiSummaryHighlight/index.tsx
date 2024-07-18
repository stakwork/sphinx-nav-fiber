import styled from 'styled-components'
import { Tooltip } from '~/components/common/ToolTip'
import { ExtractedEntity } from '~/types'
import { colors } from '~/utils'

export function highlightAiSummary(
  sDescription: string,
  handleSubmit: (search: string) => void,
  entities?: ExtractedEntity[],
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
  const highlighted = new Set()

  return (
    <>
      {parts.map((part) => {
        const entity = entities.find((e) => e.entity.toLowerCase() === part.toLowerCase())

        if (entity && !highlighted.has(part.toLowerCase())) {
          highlighted.add(part.toLowerCase())

          return (
            <StyledTooltip key={part} content={entity.description}>
              <Highlight
                onClick={() => {
                  handleSubmit(part)
                }}
              >
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

const Highlight = styled.span`
  padding: 0;
  margin: 0;
  color: ${colors.SECONDARY_BLUE};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    backgroundColor={colors.BG2}
    borderRadius="6px"
    className={className}
    color="white"
    fontSize="12px"
    fontWeight="500"
    minWidth="160px"
    padding="10px"
    position="top"
    textAlign="start"
    whiteSpace="normal"
  />
))`
  & .tooltip-content {
    color: white;
  }
`
