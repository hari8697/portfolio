import { SwooshContain, SwooshWrap } from "../molecules/About.style"

import Lottie from "react-lottie"
import animationData from "@/public/json/about/data3.json"
import { useEffect, useState } from "react"
const Swoosh = () => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  const [isPaused, setIsPaused] = useState(true)
  useEffect(() => {
    // setTimeout(() => {
    //   setIsPaused(false)
    // }, 1000)
    setIsPaused(false)
    return () => {}
  }, [])
  return (
    <SwooshContain>
      <SwooshWrap>
        <Lottie
          options={defaultOptions}
          isStopped={false}
          isPaused={isPaused}
        />
      </SwooshWrap>
    </SwooshContain>
  )
}

export default Swoosh
