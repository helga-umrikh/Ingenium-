import { createGlobalStyle } from 'styled-components';

import * as styleVariables from './variables';

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol,
li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

html, body {
  font-size: ${styleVariables.fontSize}px;  
  height: 100%;
  scroll-behavior: smooth;
}

body {
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.mainColor};
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${styleVariables.mulish};
}

#root {
  height: 100%;
}
`;
