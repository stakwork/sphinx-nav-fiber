import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  body {

    &.no-scroll {
      overflow: hidden;
    }
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
