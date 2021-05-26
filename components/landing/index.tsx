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
} from "./index.style"
// import * as stylized from "./index.style"

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

const socialItems = [1, 2, 3, 4].map((item) => {
  return (
    <div className="social_icon" key={item}>
      <Image src={`/landing/social/${item}.svg`} width={18} height={18}></Image>
    </div>
  )
})

export default function index() {
  return (
    <>
      <GridContainer>
        <Header_wrap>
          <div className="logo">
            <Image src="/DeathSpace_Logo.svg" width={303} height={56}></Image>
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
          <Subtitle as={motion.div} animate={{ y: -100 }}>
            Halloooooo
          </Subtitle>
        </div>
        <Title_wrap>{portItems}</Title_wrap>
        <Footer_wrap>
          <div className="social_wrap">{socialItems}</div>
          <Header5 className="text_wrap">Swipe/Tap</Header5>
        </Footer_wrap>
      </GridContainer>
    </>
  )
}
