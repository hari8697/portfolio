import styled, { ThemeProvider } from "styled-components"
import Landing from "@/components/landing/Landing"
import { defaultTheme, darkTheme } from "@/utils/index"

import VanillaHover from "./threejs/VanillaHover"
import ScrollProgress from "./molecules/ScrollProgress"
import { useWindowSize } from "@/common/utils/"
import { device } from "@/common/utils"
import { motion, useSpring, useTransform } from "framer-motion"
import React, { useState } from "react"

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

  const imagesArr = [
    { id: 1, name: "Nike SB" },
    { id: 2, name: "Rhoncus urna" },
    { id: 3, name: "Amet facilisis" },
    { id: 4, name: "Magna ac placerat" },
  ]

  // let imagesArr = Array.from({ length: 4 }, (_, i) => i + 1)
  const moveByFactor = 10.5
  const [maxDragX, setMaxDragX] = useState(0)

  return (
    <Container
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BlackScrollSpace></BlackScrollSpace>
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
          maxDragX={maxDragX}
          setMaxDragX={setMaxDragX}
        ></Landing>
        <ScrollProgress animatedX={animatedX} maxDragX={maxDragX} />
      </LandingWrapper>
    </Container>
  )
}

const Container = styled(motion.div)`
  height: 100%;
  position: relative;

  .threejsCover {
    position: fixed;
    z-index: 0;
  }
`
const BlackScrollSpace = styled.div`
  height: 300vh;
  width: 100%;
  position: absolute;
  top: 0;
`

const LandingWrapper = styled(motion.div)`
  pointer-events: none;
  height: 100%;
  position: fixed;
  width: 100%;
  padding: 56px 0 32px 0;

  .scroll_wrapper {
    position: absolute;
    bottom: 32px;
    right: 0;
    display: flex;
    overflow: hidden;
    grid-column-start: 20;

    .scroll_arrow {
      display: grid;
      place-items: center;
      width: 30px;
      opacity: 0.4;
      margin-right: 60px;
      margin-top: 2px;
    }

    .scrollProgressBar {
      padding: 14px 0;
      .bg,
      .fg {
        display: block;
        height: 2.5px;
      }

      .bg {
        position: relative;
        width: 20vw;
        background: #f3efff;
        opacity: 0.1;
      }

      .fg {
        position: absolute;
        width: 10vw;
        background: #5f2eea;
        opacity: 1;
      }
    }
  }
  @media ${device.tablet} {
    padding: 72px 0 50px 0;
    .scroll_wrapper {
      bottom: 50px;
    }
  }

  @media ${device.laptopL} {
    padding: 96px 0 70px 0;
    .scroll_wrapper {
      bottom: 70px;
    }
  }
`

export default App
