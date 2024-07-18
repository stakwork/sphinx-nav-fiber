import styled from 'styled-components'
import { Tooltip } from '~/components/common/ToolTip'
import { colors } from '~/utils'
import { ExtractedEntity } from '~/types/index'

export function highlightAiSummary(
  sDescription: string,
  handleSubmit: (search: string) => void,
  entities?: ExtractedEntity[],
) {
  if (!entities || entities.length === 0) {
    return sDescription
  }

  const sortedEntities = entities
    .map((entity) => entity)
    .filter((entity) => typeof entity.entity === 'string')
    .sort((a, b) => b.entity.length - a.entity.length)

  const escapedTerms = sortedEntities.map((entity) => escapeRegExp(entity.entity))
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi')

  const parts = sDescription.split(regex)
  const highlighted = new Set()

  return (
    <>
      {parts.map((part) => {
        const matchedEntity = sortedEntities.find((entity) => entity.entity.toLowerCase() === part.toLowerCase())

        if (matchedEntity && !highlighted.has(part.toLowerCase())) {
          highlighted.add(part.toLowerCase())

          return (
            <Tooltip key={part} content={matchedEntity.description} margin="13px" minWidth="8rem" whiteSpace="normal">
              <Highlight
                onClick={() => {
                  handleSubmit(part)
                }}
              >
                {part}
              </Highlight>
            </Tooltip>
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
