import styled from "styled-components"
import App from "../common/components/landing/App"

import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import Preloader from "@/components/shared/Preloader"
import React, { useEffect, useState } from "react"

function Home() {
  const [preloaderBool, setPreloaderBool] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPreloaderBool(true)
    }, 2500)
  }, [])

  return (
    <IndexPage>
      <AnimatePresence exitBeforeEnter>
        {!preloaderBool && <Preloader key={1} />}
        <App key={2} />
      </AnimatePresence>
    </IndexPage>
  )
}

const IndexPage = styled.div`
  width: 100%;
  height: 100%;
`

export default Home
