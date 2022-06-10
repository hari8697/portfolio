import { ReactNode, useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import {
  GlobalStyle,
  defaultTheme,
  darkTheme,
  primaryFont,
} from "@/common/utils"
import Head from "next/head"

import { ToastContainer, toast } from "react-toastify"
import { Slide, Zoom } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const Layout = ({ children, title = "DeathSpace Design" }) => {
  const [useDarkTheme, useDarkThemeSet] = useState(true)
  return (
    <StyledLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portfolio made by Hari Krishnan" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/common/doge.ico" />
      </Head>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <AnimateSharedLayout>
          <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
        </AnimateSharedLayout>
        <ToastContainer
          position="bottom-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
          limit={1}
          draggablePercent={30}
        />
        <GlobalStyle />
      </ThemeProvider>
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  min-height: 100vh;
  /* max-height: 100vh; */
  /* overflow: hidden; */
  display: grid;
  place-items: center;
  /* grid-template-rows: max-content 1fr; */

  .Toastify {
    * {
      font-family: ${primaryFont};
    }

    .Toastify__progress-bar {
      height: 2.5px;
    }

    .Toastify__toast-body {
      text-align: center;
    }

    .Toastify__close-button {
      display: none;
    }
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  }

  .nodrag {
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`

export default Layout
