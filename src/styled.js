import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.darkColor};
    color: ${({ theme }) => theme.whiteColor};
    font-size: ${({ theme }) => theme.fontSize[0]}px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
