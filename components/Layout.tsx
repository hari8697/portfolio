import Head from "next/head"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { GlobalStyle, defaultTheme, darkTheme } from "../utils"
import Link from "next/link"

const Layout = ({ children }) => {
  const [useDarkTheme, setUseDarkTheme] = useState(true)
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>DeathSpace Design</title>
        <meta name="description" content="Portfolio made by Hari Krishnan" />
        <link rel="icon" href="/doge.ico" />
      </Head>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <AnimateSharedLayout>
          <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
        </AnimateSharedLayout>
        {/* <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Us</a>
        </Link> */}
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default Layout
