import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"
import { primaryFont } from "./typography"

export const GlobalStyle = createGlobalStyle`
${normalize()}


html,
body {
  font-family: "Lato", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  box-sizing: border-box;
  font-size: 16px;
}

// Toastify colors
html {
  :root {
    --toastify-color-dark: ${(props) => props.theme.toastColor};
    --toastify-text-color-dark: ${(props) => props.theme.placeHolderTextColor};
    --toastify-color-progress-dark: ${(props) => props.theme.primaryColor};
  }

  &.no_scroll{
    overflow: hidden;
  }
}

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: ${primaryFont};
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

.nosel {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

/* custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.scrollThumb};
  border-radius: 20px;
  border: 2px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: ${(props) => props.theme.scrollThumbHover};
}

/* hide scrollbar */

::-webkit-scrollbar {
  display: none; 
}
`
