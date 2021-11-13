import styled from "styled-components"
import App from "../common/components/landing/App"

import Preloader from "@/components/shared/Preloader"
import React, { useEffect, useState } from "react"

function Home() {
  const [preloaderBool, setPreloaderBool] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPreloaderBool(true)
    }, 2000)
  }, [])

  return <IndexPage>{!preloaderBool ? <Preloader /> : <App />}</IndexPage>
}

const IndexPage = styled.div`
  width: 100%;
  height: 100%;
`

export default Home
