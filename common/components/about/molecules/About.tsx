import Image from "next/image"
import styled, { css } from "styled-components"

import {
  about_grid_col,
  Bio,
  BioGrid,
  default_grid_col,
  LogoContainer,
  LogoGrid,
  Logo_ImgWrap,
} from "./About.style"
import { device, typeScale } from "@/common/utils"
import { motion } from "framer-motion"
import { GridContainer, full_W_H } from "../../styled"
import IconsWrap from "./IconsWrap"
import { useRef } from "react"
import { H5, ParaLarge, H5Large } from "@/components/styled"
import Footer from "./Footer"

const ContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
}

const About = () => {
  const constraintsRef = useRef(null)

  return (
    <AboutWrap
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <LogoGrid>
        <LogoContainer>
          <Logo_ImgWrap>
            <img src="/common/DeathSpace_Logo.svg"></img>
          </Logo_ImgWrap>
        </LogoContainer>
      </LogoGrid>
      <BioGrid>
        <Bio>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia
          quis vel eros donec ac odio. Nulla facilisi cras fermentum odio eu
          feugiat. Massa enim nec dui nunc mattis enim ut. Malesuada fames ac
          turpis egestas. Varius quam quisque id diam vel quam elementum. Quis
          viverra nibh cras pulvinar mattis nunc sed blandit libero. Ac placerat
          vestibulum lectus mauris ultrices eros. Mauris commodo quis imperdiet
          massa tincidunt nunc pulvinar sapien et. Ut pharetra sit amet aliquam.
          Quisque id diam vel quam elementum. In ornare quam viverra orci
          sagittis eu volutpat odio.
        </Bio>
      </BioGrid>
      <IconSizingContain ref={constraintsRef}>
        <H5 capsON>Tech I’ve worked with</H5>
        <IconsWrap constraintsRef={constraintsRef} />
      </IconSizingContain>
      <Footer />
    </AboutWrap>
  )
}

const IconSizingContain = styled.div`
  ${GridContainer}

  grid-template-rows: max-content 1fr;
  ${H5} {
    ${about_grid_col}
    opacity: 0.7;
  }
  position: relative;
  width: 100%;

  margin: 120px 0;
`
const AboutWrap = styled(motion.div)`
  ${full_W_H}
  max-width: 100vw;
  overflow: hidden;
`
const AboutGrid = styled.div`
  position: relative;
  ${GridContainer}
`

export default About
