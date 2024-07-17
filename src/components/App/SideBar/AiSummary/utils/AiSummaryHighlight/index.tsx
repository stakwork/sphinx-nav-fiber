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
      {parts.map((part) => {
        if (regex.test(part) && !highlighted.has(part.toLowerCase())) {
          highlighted.add(part.toLowerCase())

          return (
            <Highlight
              key={part}
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
