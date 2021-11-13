import Lottie from "react-lottie"
import animData from "@/public/json/about/data.json"
import animData_mobile from "@/public/json/about/data_mobile.json"
import { useEffect, useState } from "react"
import { SwooshContain, SwooshWrap } from "../molecules/About.style"
import { useWindowSize } from "@/common/utils/"

const Swoosh = () => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  const mobileOptions = {
    loop: false,
    autoplay: false,
    animationData: animData_mobile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  const [isPaused, setIsPaused] = useState(true)
  const { width: vW, height: vH } = useWindowSize()

  useEffect(() => {
    // setTimeout(() => {
    //   setIsPaused(false)
    // }, 1000)
    setIsPaused(false)
    return () => {}
  }, [])

  /**
   * * Dynamic lottie json for responsiveness
   */

  return (
    <SwooshContain>
      <SwooshWrap>
        <Lottie
          options={vW / vH < 1 && vW <= 1024 ? mobileOptions : defaultOptions}
          isStopped={false}
          isPaused={false}
        />
      </SwooshWrap>
    </SwooshContain>
  )
}

export default Swoosh
