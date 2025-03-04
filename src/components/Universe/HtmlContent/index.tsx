import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

type HtmlContentProps = {
  content: string
}

const HtmlContentWrapper = styled(Flex)`
  flex: 1;
  background: ${colors.black};
  overflow-y: auto;
  padding: 40px;
  padding-top: 60px;
`

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  color: ${colors.white};
  font-family: inherit;

  header {
    margin-bottom: 2rem;
  }

  nav {
    margin-bottom: 1.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;

    th,
    td {
      border: 1px solid ${colors.white};
      padding: 1rem;
      text-align: left;
    }

    th {
      background-color: ${colors.white};
      color: ${colors.black};
    }
  }

  a {
    color: ${colors.BLUE_PRESS_STATE};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .back-button {
    margin-bottom: 1.5rem;
  }

  h1,
  h2 {
    color: ${colors.white};
    margin-bottom: 1rem;
  }
`

const cleanHtmlContent = (html: string) =>
  html
    .replace(/<!DOCTYPE[^>]*>/i, '')
    .replace(/<html[^>]*>/i, '')
    .replace(/<\/html>/i, '')
    .replace(/<head>[\s\S]*?<\/head>/i, '')
    .replace(/<body[^>]*>/i, '')
    .replace(/<\/body>/i, '')
    .replace(/<style>[\s\S]*?<\/style>/i, '')
    .replace(/<a(.*?)>/gi, '<a$1 target="_blank" rel="noopener noreferrer">')

export const HtmlContent = ({ content }: HtmlContentProps) => (
  <HtmlContentWrapper>
    <ContentContainer dangerouslySetInnerHTML={{ __html: cleanHtmlContent(content) }} />
  </HtmlContentWrapper>
)

export default HtmlContent
