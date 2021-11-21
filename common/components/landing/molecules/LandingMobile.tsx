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
} from "./Landing.style"
import React, { useEffect, useState, useRef } from "react"
import { useResponsiveHelper, useWindowSize } from "@/common/utils/"
import SocialItems from "./SocialItems"
import Link from "next/link"
import { H5Link } from "@/components/styled/"
import MobileHover from "../threejs/MobileHover"
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

export default function Landing({ imagesArr }) {
  const selectedTitleAnimated = useSpring(1)
  const [selectedTitle, setSelectedTitle] = useState(1)
  const { isMobile, isTablet } = useResponsiveHelper()

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
        onClick={() => {
          setSelectedTitle(item.id)
          selectedTitleAnimated.set(item.id)
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

  return (
    <GridContainer
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header_wrap className="noselect">
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
        <MobileHover activeImage={selectedTitle}></MobileHover>
      </div>

      <Title_wrap className="noselect">
        <div className="filters_wrapper">
          <span className="mobile_filter">
            <motion.div
              ref={title_wrapper}
              className="text_wrapper"
              style={{ y: textWrapperY }}
            >
              {portItems}
            </motion.div>
          </span>
        </div>
      </Title_wrap>
      <Footer_wrap className="noselect">
        <SocialItems />
        {footerSwipe(vW, vH)}
      </Footer_wrap>
    </GridContainer>
  )
}
