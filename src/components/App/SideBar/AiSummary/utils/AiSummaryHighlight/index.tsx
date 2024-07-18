import { Tooltip, tooltipClasses } from '@mui/material'
import styled from 'styled-components'
import { ExtractedEntity } from '~/types/index'
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
            <StyledTooltip
              key={part}
              arrow
              placement="top"
              PopperProps={{
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, -10],
                    },
                  },
                ],
              }}
              title={entity.description}
            >
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

const StyledTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)`
  & .${tooltipClasses.tooltip} {
    background-color: ${colors.BG2};
    width: 160px;
    padding: 10px;
    font-size: 12px;
    color: white;
    border-radius: 6px;
    font-family: Barlow;
    font-weight: 500;
  }

  & .${tooltipClasses.arrow} {
    color: ${colors.BG2};
  }
`
