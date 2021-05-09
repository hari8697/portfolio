import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"
import { primaryFont } from "./typography"

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 56px 0 32px 0;
  font-family: ${primaryFont};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}
`
