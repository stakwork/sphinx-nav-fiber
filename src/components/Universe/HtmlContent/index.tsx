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
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  color: ${colors.white};
  font-family: inherit;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

  pre {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    code {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

const HtmlContents = (html: string) => html.replace(/<a(.*?)>/gi, '<a$1 target="_blank" rel="noopener noreferrer">')

export const HtmlContent = ({ content }: HtmlContentProps) => (
  <HtmlContentWrapper>
    <ContentContainer dangerouslySetInnerHTML={{ __html: HtmlContents(content) }} />
  </HtmlContentWrapper>
)

export default HtmlContent
