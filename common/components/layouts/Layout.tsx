import { ReactNode, useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { GlobalStyle, defaultTheme, darkTheme } from "@/utils/index"
import Head from "next/head"
import { device } from "@/common/utils"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "DeathSpace LMAO" }: Props) => {
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
        <GlobalStyle />
      </ThemeProvider>
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  padding: 56px 0 32px 0;
  display: grid;
  place-items: center;
  /* grid-template-rows: max-content 1fr; */

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  }

  @media ${device.tablet} {
    padding: 72px 0 50px 0;
  }

  @media ${device.laptopL} {
    padding: 96px 0 70px 0;
  }
`

export default Layout
