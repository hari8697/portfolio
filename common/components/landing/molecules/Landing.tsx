import Image from "next/image"
// import styled from "styled-components"
import { motion, useTransform, useSpring } from "framer-motion"
import {
  Title,
  GridContainer,
  Header_wrap,
  Paragraph,
  Title_wrap,
  Footer_wrap,
} from "../styles/Landing.style"
import React, { useEffect, useState, useRef } from "react"
import { useWindowSize } from "@/common/utils/"
import SocialItems from "@/components/shared/SocialItems"
import Link from "next/link"
import { H5Link } from "@/components/styled/"

const ContainerVariants = {
  title_exit: {
    opacity: 0,

    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

const footerSwipe = (vW, vH) => {
  if (vW < 768) {
    return (
      <Paragraph capsON className="text_wrap">
        Swipe/Tap
      </Paragraph>
    )
  } else if (vW / vH < 1) {
    return (
      <H5Link capsON className="text_wrap">
        Swipe/Tap
      </H5Link>
    )
  }
}

export default function Landing({
  isExiting,
  animatedX,
  imagesArr,
  moveByFactor,
  maxDragX,
  setMaxDragX,
  setCompletedExit,
}) {
  // const [titleDragX, setTitleDragX] = useState(0)
  const [titleWrapperMoveByHeight, setTitleWrapperMoveByHeight] = useState(0)
  const { width: vW, height: vH } = useWindowSize()

  const title_wrapper = useRef(null)
  let titleWrapperHeight
  const textWrapperY = useTransform(
    animatedX,
    [-maxDragX, 0],
    [-titleWrapperMoveByHeight, 0]
  )

  // useEffect(() => {
  //   console.log(vW, vH);
  // }, [useWindowSize()])

  const portItems = imagesArr.map((item, key) => {
    // const item = portArray[key]
    return <Title key={item.id}>{item.name}</Title>
  })

  const calcAnimHelperValues = () => {
    // Images anim Values
    setMaxDragX((imagesArr.length - 1) * moveByFactor)

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

      setTitleWrapperMoveByHeight(titleWrapperHeight - elementHeight - 8)

      // console.log(titleWrapperHeight - elementHeight)
    }
  }

  useEffect(() => {
    calcAnimHelperValues()
    // console.log(titleWrapperMoveByHeight)

    window.addEventListener("resize", () => {
      calcAnimHelperValues()
    })
  }, [])

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
      >
        <div className="logo">
          <img src="/common/DeathSpace_Logo.svg"></img>
        </div>
        <Link href="/about" scroll={false}>
          <H5Link
            capsON
            click
            highlighted
            grab
            className="link_about clickable"
          >
            About
          </H5Link>
        </Link>
      </Header_wrap>
      <Title_wrap className="noselect">
        <div className="filters_wrapper">
          <span className="selected_filter">
            <motion.div
              ref={title_wrapper}
              style={{ y: textWrapperY }}
              className="text_wrapper"
            >
              {portItems}
            </motion.div>
          </span>
          <div className="unselected_filter">
            <motion.div
              ref={title_wrapper}
              style={{ y: textWrapperY }}
              className="text_wrapper"
              variants={ContainerVariants}
              animate={isExiting ? "title_exit" : "animate"}
            >
              {portItems}
            </motion.div>
          </div>
        </div>
      </Title_wrap>
      <Footer_wrap
        className="noselect"
        variants={ContainerVariants}
        animate={isExiting ? "exit" : "animate"}
        onAnimationStart={() => setCompletedExit(false)}
        onAnimationComplete={() => {
          setCompletedExit(true)
        }}
      >
        <SocialItems isExiting={isExiting} />
        {footerSwipe(vW, vH)}
      </Footer_wrap>
    </GridContainer>
  )
}
