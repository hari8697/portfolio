import { motion } from "framer-motion"
import About from "./molecules/About"
import styled from "styled-components"
import { device } from "@/common/utils"
import Swoosh from "@/components/about/atoms/Swoosh"

const ContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}
const App = () => {
  return (
    <AppWrap>
      <Swoosh></Swoosh>
      <About></About>
    </AppWrap>
  )
}

const AppWrap = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 56px 0 32px 0;

  @media ${device.tablet} {
    padding: 72px 0 50px 0;
  }

  @media ${device.desktop} {
    padding: 96px 0 70px 0;
  }
`
export default App
