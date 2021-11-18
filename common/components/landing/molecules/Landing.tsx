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
} from "./Landing.style"
import React, { useEffect, useState, useRef } from "react"
import { useWindowSize } from "@/common/utils/"
import SocialItems from "./SocialItems"
import Link from "next/link"
import { H5Link } from "@/components/styled/"

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
  animatedX,
  imagesArr,
  moveByFactor,
  maxDragX,
  setMaxDragX,
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
        {vW < 768 ? (
          <Link href="/about" scroll={false}>
            <Paragraph
              className="link_about clickable"
              click
              highlighted
              capsON
            >
              About
            </Paragraph>
          </Link>
        ) : (
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
        )}
      </Header_wrap>
      {vW < 1024 && (
        <div className="hero_image">
          <Image src={`/landing/album/1.png`} width={1354} height={761}></Image>
        </div>
      )}
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
            >
              {portItems}
            </motion.div>
          </div>
        </div>
      </Title_wrap>
      <Footer_wrap className="noselect">
        <SocialItems />
        {footerSwipe(vW, vH)}
      </Footer_wrap>
    </GridContainer>
  )
}
