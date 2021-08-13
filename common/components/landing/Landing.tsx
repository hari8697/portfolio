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
import { useEffect, useState } from "react"

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

const portArray = [
  { id: 1, name: "Nike SB", selected: true },
  { id: 2, name: "Rhoncus urna", selected: false },
  { id: 3, name: "Amet facilisis", selected: false },
  { id: 4, name: "Magna ac placerat", selected: false },
]

const portItems = portArray.map((item) => {
  return (
    <Title key={item.id} className={item.selected ? "sel" : ""}>
      {item.name}
    </Title>
  )
})

const socialItemsArr = Array.from(Array(4).keys())
let iconSize = 18
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

export default function Landing({ animatedX }) {
  const { width: vW, height: vH } = useWindowSize()

  const x = useSpring(0)
  const xRange = [-200, -100, 100, 200]
  const opacityRange = [0, 1, 1, 0]
  const opacity = useTransform(x, xRange, opacityRange)
  const width = useTransform(animatedX, [0, -21], [vW * 0.05, vW * 0.2])

  // const width = useTransform(animatedX, [-21, 0], [350, 30])
  // useEffect(() => {
  //   console.log(vW, vH);

  // }, [useWindowSize()])

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
      <Title_wrap className="noselect">{portItems}</Title_wrap>
      {vW > 1023 && vW / vH > 1 && (
        <>
          <div className="noselect scroll_wrapper">
            <div className="scroll_arrow">
              <Image
                src="/landing/scrollHorizontal.svg"
                width={31}
                height={22}
              ></Image>
            </div>
            <div className="scrollProgressBar">
              <motion.span style={{ width }} className="fg"></motion.span>
              <span className="bg"></span>
            </div>
          </div>
        </>
      )}
      <Footer_wrap className="noselect">
        <div className="social_wrap ">{socialItems}</div>
        {footerSwipe(vW, vH)}
      </Footer_wrap>
    </GridContainer>
  )
}
