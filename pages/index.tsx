import styled from "styled-components"
import App from "../common/components/landing/App"

import Preloader from "@/components/shared/Preloader"
import React, { useEffect, useState } from "react"
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"

function Home() {
  const [preloaderBool, setPreloaderBool] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPreloaderBool(true)
  //   }, 2500)
  // }, [])

  const [threeImagesBools, setThreeImagesBools] = useState([])

  return (
    <IndexPage>
      <AnimatePresence>
        {preloaderBool && (
          <Preloader
            preloaderBool={preloaderBool}
            setPreloaderBool={setPreloaderBool}
            threeImagesBools={threeImagesBools}
            key={"preloader"}
          />
        )}
        <App
          preloaderBool={preloaderBool}
          setThreeImagesBools={setThreeImagesBools}
          key={"app"}
        />
      </AnimatePresence>
    </IndexPage>
  )
}

const IndexPage = styled.div`
  width: 100%;
  height: 100%;
`

export default Home
