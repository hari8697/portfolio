import styled, { ThemeProvider } from "styled-components"
import Landing from "@/components/landing/Landing"
import { defaultTheme, darkTheme } from "@/utils/index"
import { motion } from "framer-motion"
import VanillaHover from "./threejs/VanillaHover"
import { useWindowSize } from "@/common/utils/"

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

function App() {
  const { width: vW, height: vH } = useWindowSize()
  return (
    <Container
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {vW >= 1024 && <VanillaHover canvasNo="1" />}
      <Landing></Landing>
    </Container>
  )
}

const Container = styled(motion.div)`
  height: 100%;
  position: relative;

  .threejsCover {
    position: absolute;
    z-index: 0;
  }
`

export default App
