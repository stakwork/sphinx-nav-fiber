import styled from 'styled-components'

export function highlightSearchTerm(sDescription: string, sTerm: string | null) {
  if (!sTerm?.trim()) {
    return sDescription
  }

  const regex = new RegExp(`(${sTerm})`, 'gi')
  const parts = sDescription.split(regex)

  // eslint-disable-next-line react/no-array-index-key
  return <>{parts.map((part, index) => (regex.test(part) ? <Highlight key={index}>{part}</Highlight> : part))}</>
}

const Highlight = styled.span`
  background-color: rgba(0, 123, 255, 0.4);
  padding: 2;
  margin: 0;
  border-radius: 3px;
  color: inherit;
`
