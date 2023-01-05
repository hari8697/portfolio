import styled, { ThemeProvider } from "styled-components"
import Landing from "@/components/landing/molecules/Landing"
import LandingMobile from "@/components/landing/molecules/LandingMobile"

import VanillaHover from "./threejs/VanillaHover"
import ScrollProgress from "./molecules/ScrollProgress"
import { useResponsiveHelper, useWindowSize } from "@/common/utils/"
import { device } from "@/common/utils"
import { motion, useSpring, useViewportScroll } from "framer-motion"
import React, { useEffect, useState, useRef } from "react"
import { useRouter } from "next/router"
import { Para, ParaLarge } from "@/components/styled"

const ContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
}

function App({ setThreeImagesBools, preloaderBool, projects }) {
  const router = useRouter()
  const [completedExit, setCompletedExit] = useState(false)
  const [currSlug, setCurrSlug] = useState("")
  const appContainer = useRef(null)
  const [isExiting, setIsExiting] = useState(false)
  const { isMobile, isTablet } = useResponsiveHelper()

  const { width: vW, height: vH } = useWindowSize()

  const pageExtraHeight = 3.2
  const { scrollYProgress } = useViewportScroll()

  useEffect(() => {
    setTimeout(() => {}, 10000)
    setupSwipes()

    return () => {}
  }, [])

  // Mobile selected Titles
  const [selectedTitle, setSelectedTitle] = useState(1)
  // useEffect(() => {
  //   console.log(selectedTitle)
  // }, [selectedTitle])

  useEffect(() => {
    // console.log("completedExit", completedExit)
    // console.log("isExiting", isExiting)

    if (completedExit && isExiting && (currSlug != "" || null || undefined)) {
      const goToUrl = `work/${currSlug}`
      router.push(goToUrl, undefined, { scroll: false })
    }
  }, [completedExit])

  const setupSwipes = () => {
    const slider = appContainer.current

    const updateSelectedItem = (shouldIncrement) => {
      setSelectedTitle((state) => {
        switch (shouldIncrement) {
          case true:
            if (state < imagesArr.length) {
              return state + 1
            } else {
              return state
            }

          case false:
            if (state > 1) {
              return state - 1
            } else {
              return state
            }

          default:
            break
        }
      })
    }
    var xDown = null
    var yDown = null

    const handleTouchStart = (evt) => {
      const firstTouch = getTouches(evt)[0]
      xDown = firstTouch.clientX
      yDown = firstTouch.clientY
    }

    const handleTouchMove = (evt) => {
      if (!xDown || !yDown) {
        return
      }

      var xUp = evt.touches[0].clientX
      var yUp = evt.touches[0].clientY

      var xDiff = xDown - xUp
      var yDiff = yDown - yUp

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          /* right swipe */
          // console.log("swiped right!")

          updateSelectedItem(true)
        } else {
          /* left swipe */
          // console.log("swiped left!")
          updateSelectedItem(false)
        }
      } else {
        if (yDiff > 0) {
          /* down swipe */
          // alert("swiped down!")
          updateSelectedItem(true)
        } else {
          /* up swipe */
          // alert("swiped up!")
          updateSelectedItem(false)
        }
      }
      /* reset values */
      xDown = null
      yDown = null
    }
    const getTouches = (evt) => {
      return (
        evt.touches || evt.originalEvent.touches // browser API
      ) // jQuery
    }

    slider.addEventListener("touchstart", handleTouchStart, { passive: true })
    slider.addEventListener("touchmove", handleTouchMove, { passive: true })
  }

  // const imagesArr = [
  //   { id: 1, name: "UI / UX" },
  //   { id: 2, name: "CS:GO Artwork" },
  //   { id: 3, name: "Aventador SVJ" },
  //   { id: 4, name: "Nike SB" },
  // ]

  const imagesArr = projects.map((item, idx) => {
    return {
      id: idx + 1,
      name: item.fields.title,
      slug: item.fields.id,
      src: "https:" + item.fields.heroImage.fields.file.url,
      alt: item.fields.heroImage.fields.file.title,
    }
  })

  const onTextureLoad = (id) => {
    // console.log("loaded", id)
  }

  // let imagesArr = Array.from({ length: 4 }, (_, i) => i + 1)
  const moveByFactor = 10.5
  const [maxDragX, setMaxDragX] = useState(0)

  let animatedX = useSpring(0, {
    // stiffness: 800,
    // damping: 68,

    stiffness: 800,
    damping: 100,
  })

  return (
    <Container
      variants={ContainerVariants}
      initial="initial"
      animate={!preloaderBool && "animate"}
      exit="exit"
      pageExtraHeight={isMobile || isTablet ? 1 : pageExtraHeight}
      ref={appContainer}
    >
      {!isMobile && !isTablet && (
        <VanillaHover
          isExiting={isExiting}
          setIsExiting={setIsExiting}
          animatedX={animatedX}
          imagesArr={imagesArr}
          onTextureLoad={onTextureLoad}
          moveByFactor={moveByFactor}
          scrollValueY={scrollYProgress}
          pageExtraHeight={pageExtraHeight}
          setThreeImagesBools={setThreeImagesBools}
          setCurrSlug={setCurrSlug}
        />
      )}
      {isMobile || isTablet ? (
        <LandingWrapper>
          <LandingMobile
            isExiting={isExiting}
            setIsExiting={setIsExiting}
            preloaderBool={preloaderBool}
            imagesArr={imagesArr}
            selectedTitle={selectedTitle}
            setSelectedTitle={setSelectedTitle}
            setThreeImagesBools={setThreeImagesBools}
            setCompletedExit={setCompletedExit}
            setCurrSlug={setCurrSlug}
          ></LandingMobile>
        </LandingWrapper>
      ) : (
        <LandingWrapper>
          <Landing
            isExiting={isExiting}
            animatedX={animatedX}
            imagesArr={imagesArr}
            moveByFactor={moveByFactor}
            maxDragX={maxDragX}
            setMaxDragX={setMaxDragX}
            setCompletedExit={setCompletedExit}
          ></Landing>
          <ScrollProgress
            isExiting={isExiting}
            animatedX={animatedX}
            maxDragX={maxDragX}
          />
        </LandingWrapper>
      )}
    </Container>
  )
}

const Container = styled(motion.div)`
  /* height: 100%; */
  height: ${(props) => props.pageExtraHeight * 100}vh;
  position: relative;

  .threejsCover {
    position: fixed;
    z-index: 0;
  }
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
    /* overflow-x: hidden; */
    grid-column-start: 20;

    .scroll_arrow {
      display: grid;
      place-items: center;
      width: 30px;
      margin-right: 60px;
      margin-top: 2px;
    }
    .bar_wrap {
      /* position: relative; */

      ${ParaLarge} {
        /* position: absolute;
        top: -1rem; */
        opacity: 0.7;
      }
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
