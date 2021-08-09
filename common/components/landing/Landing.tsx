import Image from "next/image"
// import styled from "styled-components"
import { motion } from "framer-motion"
import {
  Title,
  GridContainer,
  Header_wrap,
  Header5,
  Paragraph,
  Subtitle,
  Title_wrap,
  Footer_wrap,
} from "./Landing.style"
import { useEffect, useState } from "react"

import { useWindowSize } from "@/common/utils/"

// import dynamic from "next/dynamic";
// const windowDimensionsHook = dynamic(
//   () => {
//     return import("@/common/utils/windowDimensionsHook");
//   },import { Landing } from '@/components/landing/Landing';

//   { ssr: false }
// );

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
// const [socialItems, setsocialItems] = useState([]);
let iconSize = 18
const socialItems = socialItemsArr.map((item) => {
  return (
    <div className="social_icon" key={item}>
      <Image
        src={`/landing/social/${item + 1}.svg`}
        layout="fill"
        objectFit="contain"
      ></Image>
    </div>
  )
})

const footerSwipe = (vW, vH) => {
  if (vW < 1024) {
    if (vW < 768) {
      return (
        <Paragraph capsON className="text_wrap">
          Swipe/Tap
        </Paragraph>
      )
    } else {
      return <Header5 capsON>Swipe/Tap</Header5>
    }
  } else if (vW / vH > 1) {
    return
  }
}

export default function index() {
  const { width: vW, height: vH } = useWindowSize()
  // const vW = useWindowSize().width;
  // const vH = useWindowSize().height;

  // useEffect(() => {
  //   console.log(vW, vH);

  // }, [useWindowSize()])

  return (
    <GridContainer>
      <Header_wrap className="noselect">
        <div className="logo">
          <Image
            src="/common/DeathSpace_Logo.svg"
            width={303}
            height={56}
          ></Image>
        </div>
        {vW < 768 ? (
          <Paragraph className="clickable" highlighted capsON>
            About
          </Paragraph>
        ) : (
          <Header5 highlighted capsON className="clickable">
            About
          </Header5>
        )}
      </Header_wrap>
      <div className="hero_image">
        <Image
          src={`/landing/album/1.png`}
          width={1354}
          height={761}
          // layout="fill"
        ></Image>
      </div>
      <Title_wrap className="noselect">{portItems}</Title_wrap>
      {vW > 1024 && vW / vH > 1 && (
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
              <span className="fg"></span>
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
