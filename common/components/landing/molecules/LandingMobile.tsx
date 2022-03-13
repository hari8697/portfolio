import Image from "next/image"
// import styled from "styled-components"
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion"
import {
  Title,
  GridContainer,
  Header_wrap,
  Paragraph,
  Title_wrap,
  Footer_wrap,
} from "../styles/Landing.style"
import React, { useEffect, useState, useRef } from "react"
import { useResponsiveHelper, useWindowSize } from "@/common/utils/"
import SocialItems from "@/components/shared/SocialItems"
import Link from "next/link"
import { H5Link } from "@/components/styled/"
import MobileHover from "../threejs/MobileHover"
import { useRouter } from "next/router"

const slowTransition = {
  type: "spring",
  stiffness: 600,
  damping: 70,
  // duration: 2,
  // bounce: 0.5,
}

const ContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: slowTransition,
  },
  title_exit: {
    opacity: 0,
    y: 50,
    transition: slowTransition,
  },
}

export default function Landing({
  imagesArr,
  selectedTitle,
  setSelectedTitle,
  setThreeImagesBools,
  preloaderBool,
  isExiting,
  setIsExiting,
}) {
  const router = useRouter()
  const selectedTitleAnimated = useSpring(1)
  const { isMobile, isTablet } = useResponsiveHelper()
  const [currSlug, setCurrSlug] = useState("")
  const [completedExit, setCompletedExit] = useState(false)

  useEffect(() => {
    selectedTitleAnimated.set(selectedTitle)
  }, [selectedTitle])
  const footerSwipe = (vW, vH) => {
    if (isMobile) {
      return (
        <Paragraph capsON className="text_wrap">
          Swipe/Tap
        </Paragraph>
      )
    } else if (isTablet) {
      return (
        <H5Link capsON className="text_wrap">
          Swipe/Tap
        </H5Link>
      )
    }
  }
  const { width: vW, height: vH } = useWindowSize()

  const portItems = imagesArr.map((item, key) => {
    // const item = portArray[key]
    return (
      <Title
        key={item.id}
        onClick={(e) => {
          e.preventDefault()
          if (item.id === selectedTitle) {
            // exitFunc(item.slug)
            setCurrSlug(item.slug)
            setIsExiting(true)
            // setIsExiting((prev) => {
            //   // console.log(prev)
            //   return true
            // })
          } else {
            setSelectedTitle(item.id)
            selectedTitleAnimated.set(item.id)
          }
        }}
        className={item.id == selectedTitle && "selected"}
      >
        {item.name}
      </Title>
    )
  })

  const title_wrapper = useRef(null)
  const [titleWrapperMoveByHeight, setTitleWrapperMoveByHeight] = useState(0)
  let titleWrapperHeight
  const textWrapperY = useTransform(
    selectedTitleAnimated,
    [4, 1],
    [-titleWrapperMoveByHeight, 0]
  )

  const calcAnimHelperValues = () => {
    // Title anim Values

    if (title_wrapper.current != null || undefined) {
      titleWrapperHeight = title_wrapper.current.offsetHeight

      // Get height of element without margin

      let element = title_wrapper.current.firstChild
      var computedStyle = getComputedStyle(element)

      let elementHeight = element.clientHeight // height with padding
      let elementWidth = element.clientWidth // width with padding

      elementHeight -=
        parseFloat(computedStyle.marginTop) +
        parseFloat(computedStyle.marginBottom)
      elementWidth -=
        parseFloat(computedStyle.marginLeft) +
        parseFloat(computedStyle.marginRight)

      setTitleWrapperMoveByHeight(titleWrapperHeight - elementHeight)
    }
  }

  useEffect(() => {
    calcAnimHelperValues()
    // console.log(titleWrapperMoveByHeight)

    window.addEventListener("resize", () => {
      calcAnimHelperValues()
    })
  }, [])

  const exitFunc = (slug) => {}

  useEffect(() => {
    // console.log("completedExit", completedExit)
    // console.log("isExiting", isExiting)

    if (completedExit && isExiting) {
      const goToUrl = `work/${currSlug}`
      router.push(goToUrl, undefined, { scroll: false })
    }
  }, [completedExit])

  return (
    <GridContainer
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header_wrap
        className="noselect"
        variants={ContainerVariants}
        animate={isExiting ? "exit" : "animate"}
        onAnimationStart={() => setCompletedExit(false)}
        onAnimationComplete={() => setCompletedExit(true)}
      >
        <div className="logo">
          <img src="/common/DeathSpace_Logo.svg"></img>
        </div>
        <Link href="/about" scroll={false}>
          {isMobile ? (
            <Paragraph
              className="link_about clickable"
              click
              highlighted
              capsON
            >
              About
            </Paragraph>
          ) : (
            <H5Link
              capsON
              click
              highlighted
              grab
              className="link_about clickable"
            >
              About
            </H5Link>
          )}
        </Link>
      </Header_wrap>

      <div className="hero_image">
        <MobileHover
          isExiting={isExiting}
          setIsExiting={setIsExiting}
          setCurrSlug={setCurrSlug}
          preloaderBool={preloaderBool}
          imagesArr={imagesArr}
          activeImage={selectedTitle}
          setThreeImagesBools={setThreeImagesBools}
        ></MobileHover>
      </div>

      <Title_wrap className="noselect">
        <div className="filters_wrapper">
          <span className="mobile_filter">
            <motion.div
              ref={title_wrapper}
              className="text_wrapper"
              variants={ContainerVariants}
              animate={isExiting ? "title_exit" : "animate"}
              style={{ y: textWrapperY }}
            >
              {portItems}
            </motion.div>
          </span>
        </div>
      </Title_wrap>
      <Footer_wrap
        className="noselect"
        variants={ContainerVariants}
        animate={isExiting ? "exit" : "animate"}
      >
        <SocialItems />
        {footerSwipe(vW, vH)}
      </Footer_wrap>
    </GridContainer>
  )
}
