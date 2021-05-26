import Image from "next/image"
// import styled from "styled-components"
import { motion } from "framer-motion"
import React from "react"
import {
  Title,
  GridContainer,
  Header_wrap,
  Header5,
  Subtitle,
  Title_wrap,
  Footer_wrap,
} from "./Landing.style"

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
const socialItems = socialItemsArr.map((item) => {
  return (
    <div className="social_icon" key={item}>
      <Image
        src={`/landing/social/${item + 1}.svg`}
        width={18}
        height={18}
      ></Image>
    </div>
  )
})

export default function index() {
  return (
    <GridContainer>
      <Header_wrap>
        <div className="logo">
          <Image
            src="/common/DeathSpace_Logo.svg"
            width={303}
            height={56}
          ></Image>
        </div>
        <Header5 className="clickable">About</Header5>
      </Header_wrap>
      <div className="hero_image">
        <Image
          src={`/landing/album/1.png`}
          width={1354}
          height={761}
          // layout="fill"
        ></Image>
      </div>
      <Title_wrap>{portItems}</Title_wrap>
      <Footer_wrap>
        <div className="social_wrap">{socialItems}</div>
        <Header5 className="text_wrap">Swipe/Tap</Header5>
      </Footer_wrap>
    </GridContainer>
  )
}
