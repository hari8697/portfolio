import Lottie from "react-lottie"
import animationData from "@/public/json/about/data.json"

const test = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <div>
      <Lottie options={defaultOptions} isStopped={false} isPaused={false} />
    </div>
  )
}

export default test
