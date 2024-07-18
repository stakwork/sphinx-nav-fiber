import React from 'react'
import styled from 'styled-components'
import { colors } from '~/utils'
import { ExtractedEntity } from '~/types/index'

type HighlightProps = {
  part: string
  matchedEntity: ExtractedEntity | undefined
  handleSubmit: (search: string) => void
}

export function highlightAiSummary(
  sDescription: string,
  handleSubmit: (search: string) => void,
  entities?: ExtractedEntity[],
) {
  if (!entities || entities.length === 0) {
    return <>{sDescription}</>
  }

  const sortedEntities = entities
    .map((entity) => entity.entity)
    .filter((entity) => typeof entity === 'string')
    .sort((a, b) => b.length - a.length)

  const escapedTerms = sortedEntities.map((entity) => escapeRegExp(entity))
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi')

  const parts = sDescription.split(regex)

  let keyIndex = 0

  return (
    <>
      {parts.map((part) => {
        const matchedEntity = entities.find((entity) => entity.entity.toLowerCase() === part.toLowerCase())

        if (regex.test(part) && matchedEntity) {
          const highlightKey = `${matchedEntity.entity}-highlight-${keyIndex}`

          keyIndex += 1

          return <Highlight key={highlightKey} handleSubmit={handleSubmit} matchedEntity={matchedEntity} part={part} />
        }

        keyIndex += 1

        return <React.Fragment key={`fragment-${keyIndex}`}>{part}</React.Fragment>
      })}
    </>
  )
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const Highlight = ({ handleSubmit, matchedEntity, part }: HighlightProps) => {
  const [showTooltip, setShowTooltip] = React.useState(false)

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  return (
    <HighlightWrapper
      onClick={() => handleSubmit(part)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {part}
      {showTooltip && matchedEntity && <Tooltip>{matchedEntity.description}</Tooltip>}
    </HighlightWrapper>
  )
}

const HighlightWrapper = styled.span`
  padding: 0;
  margin: 0;
  color: ${colors.SECONDARY_BLUE};
  cursor: pointer;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`

const Tooltip = styled.span`
  position: absolute;
  background-color: white;
  color: black;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 12px;
  white-space: normal;
  z-index: 10000;
  visibility: 'visible';
`
