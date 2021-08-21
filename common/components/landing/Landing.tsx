import Image from "next/image"
// import styled from "styled-components"
import { motion, useTransform, useSpring } from "framer-motion"
import {
  Title,
  GridContainer,
  Header_wrap,
  Header5,
  Paragraph,
  Title_wrap,
  Footer_wrap,
} from "./Landing.style"
import { useEffect, useState, useRef } from "react"

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

const socialItemsArr = Array.from(Array(4).keys())
// let iconSize = 18
const socialItems = socialItemsArr.map((item) => {
  return (
    <div className="icon_wrapper" key={item}>
      <div className="social_icon">
        <Image
          src={`/landing/social/${item + 1}.svg`}
          layout="fill"
          objectFit="contain"
        ></Image>
      </div>
    </div>
  )
})

const footerSwipe = (vW, vH) => {
  if (vW < 768) {
    return (
      <Paragraph capsON className="text_wrap">
        Swipe/Tap
      </Paragraph>
    )
  } else if (vW / vH < 1) {
    return (
      <Header5 capsON className="text_wrap">
        Swipe/Tap
      </Header5>
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

    if (title_wrapper != null || undefined) {
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
          <Image
            src="/common/DeathSpace_Logo.svg"
            width={303}
            height={56}
          ></Image>
        </div>
        {vW < 768 ? (
          <Paragraph className="link_about clickable" highlighted capsON>
            About
          </Paragraph>
        ) : (
          <Header5 highlighted capsON className="link_about clickable">
            About
          </Header5>
        )}
      </Header_wrap>
      {vW < 1023 && (
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
        <div className="social_wrap ">{socialItems}</div>
        {footerSwipe(vW, vH)}
      </Footer_wrap>
    </GridContainer>
  )
}
