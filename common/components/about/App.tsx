import { motion } from "framer-motion"
import About from "./molecules/About"
import styled from "styled-components"
import { device } from "@/common/utils"
import Swoosh from "@/components/about/atoms/Swoosh"
import { padding_for_pages } from "../styled/BaseStyles"

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
    <AppWrap
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Swoosh></Swoosh>
      <About></About>
    </AppWrap>
  )
}

const AppWrap = styled(motion.div)`
  width: 100%;
  height: 100%;

  position: relative;

  ${padding_for_pages}
`
export default App
