import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { colors } from '~/utils/colors'

export const StyledMarkdown = styled(ReactMarkdown)`
  color: ${colors.white};
  font-family: 'Barlow';
  line-height: 1.5;
  margin-top: 5px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1em 0 0.5em;
    line-height: 1.3;
    font-weight: 600;
    margin-top: 1px;
  }

  h1 {
    font-size: 20px;
    font-family: 'Barlow';
    font-weight: 600;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 1.3em;
  }
  h4 {
    font-size: 1.2em;
  }
  h5 {
    font-size: 1.1em;
  }
  h6 {
    font-size: 1em;
  }

  p {
    font-weight: normal;
    margin: 8px 0;
  }

  code {
    font-family: 'Courier New', monospace;
    background: ${colors.BG1};
    padding: 2px 4px;
    border-radius: 4px;
    font-weight: normal;
  }

  pre {
    background: ${colors.BG1};
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1em 0;

    code {
      background: none;
      padding: 0;
      border-radius: 0;
    }
  }

  ul,
  ol {
    font-weight: normal;
    margin: 8px 0;
    padding-left: 20px;
  }

  li {
    font-weight: normal;
    margin: 4px 0;
  }

  a {
    color: #0bf;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 4px solid ${colors.modalShield};
    padding-left: 16px;
    margin: 16px 0;
    font-weight: normal;
  }

  table {
    border-collapse: collapse;
    width: auto;
    margin: 1em 0;
    background: ${colors.BG1};
    border-radius: 4px;
    border: 1px solid ${colors.modalShield};
  }

  th,
  td {
    border: 1px solid ${colors.modalShield};
    padding: 8px 12px;
    text-align: left;
    font-weight: normal;
    min-width: 100px;
  }

  th {
    font-weight: 600;
    background: ${colors.BG2};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    border: none;
    border-top: 1px solid ${colors.modalShield};
    margin: 1em 0;
  }
`
