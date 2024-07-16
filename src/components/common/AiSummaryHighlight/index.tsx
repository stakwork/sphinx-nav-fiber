import styled from 'styled-components'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'

export function highlightAiSummary(
  sDescription: string,
  nodesTerm: NodeExtended[] | null,
  handleSubmit: (search: string) => void,
) {
  if (!nodesTerm || nodesTerm.length === 0) {
    return sDescription
  }

  // Escape and sort node names
  const sortedTerms = nodesTerm
    .map((node) => node.name)
    .filter((name) => typeof name === 'string')
    .sort((a, b) => b.length - a.length)

  const escapedTerms = sortedTerms.map((term) => escapeRegExp(term))
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi')

  const parts = sDescription.split(regex)
  const highlighted = new Set()

  return (
    <>
      {parts.map((part, index) => {
        if (regex.test(part) && !highlighted.has(part.toLowerCase())) {
          highlighted.add(part.toLowerCase())

          // eslint-disable-next-line react/no-array-index-key
          return (
            <Highlight
              key={index}
              onClick={() => {
                handleSubmit(part)
              }}
            >
              {part}
            </Highlight>
          )
        }

        return part
      })}
    </>
  )
}

// Function to escape special characters for regex
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const Highlight = styled.span`
  padding: 2px;
  margin: 0;
  color: ${colors.SECONDARY_BLUE};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
