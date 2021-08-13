import styled, { ThemeProvider } from "styled-components"
import Landing from "@/components/landing/Landing"
import { defaultTheme, darkTheme } from "@/utils/index"

import VanillaHover from "./threejs/VanillaHover"
import { useWindowSize } from "@/common/utils/"
import { device } from "@/common/utils"
import { motion, useSpring } from "framer-motion"

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

  let animatedX = useSpring(0, {
    stiffness: 800,
    damping: 100,
  })

  let imagesArr = Array.from({ length: 4 }, (_, i) => i + 1)
  const moveByFactor = 10.5

  return (
    <Container
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {vW >= 1024 && (
        <VanillaHover
          animatedX={animatedX}
          imagesArr={imagesArr}
          moveByFactor={moveByFactor}
        />
      )}
      <LandingWrapper>
        <Landing
          animatedX={animatedX}
          imagesArr={imagesArr}
          moveByFactor={moveByFactor}
        ></Landing>
      </LandingWrapper>
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
const LandingWrapper = styled(motion.div)`
  pointer-events: none;
  height: 100%;
  position: relative;
  padding: 56px 0 32px 0;

  @media ${device.tablet} {
    padding: 72px 0 50px 0;
  }

  @media ${device.laptopL} {
    padding: 96px 0 70px 0;
  }
`

export default App
