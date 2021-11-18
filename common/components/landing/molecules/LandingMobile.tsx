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
import { useResponsiveHelper, useWindowSize } from "@/common/utils/"
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

export default function Landing({ imagesArr }) {
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

  const title_wrapper = useRef(null)
  let titleWrapperHeight

  const portItems = imagesArr.map((item, key) => {
    // const item = portArray[key]
    return <Title key={item.id}>{item.name}</Title>
  })

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
          <Paragraph className="link_about clickable" click highlighted capsON>
            About
          </Paragraph>
        </Link>
      </Header_wrap>

      <div className="hero_image">
        <Image src={`/landing/album/1.png`} width={1354} height={761}></Image>
      </div>

      <Title_wrap className="noselect">
        <div className="filters_wrapper">
          <span className="selected_filter">
            <motion.div ref={title_wrapper} className="text_wrapper">
              {portItems}
            </motion.div>
          </span>
          <div className="unselected_filter">
            <motion.div ref={title_wrapper} className="text_wrapper">
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
