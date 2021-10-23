import Image from "next/image"
import styled, { css } from "styled-components"
import Link from "next/link"
import {
  CloseBtn_ImgWrap,
  LogoContainer,
  Logo_ImgWrap,
  PaddingWrap,
} from "./About.style"
import { motion } from "framer-motion"
import { device, typeScale } from "@/common/utils"
import { GridContainer, full_W_H, padding_for_pages } from "../../styled"

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
  return (
    <AboutWrap
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <NavBar>
        <Link href="/">
          <PaddingWrap>
            <CloseBtn_ImgWrap>
              <Image src="/about/close_btn.svg" layout="fill"></Image>
            </CloseBtn_ImgWrap>
          </PaddingWrap>
        </Link>
      </NavBar>
      <AboutGrid>
        <LogoContainer>
          <Logo_ImgWrap>
            <Image src="/common/DeathSpace_Logo.svg" layout="fill"></Image>
          </Logo_ImgWrap>
        </LogoContainer>
      </AboutGrid>
    </AboutWrap>
  )
}

const AboutWrap = styled(motion.div)`
  ${full_W_H}
`
const AboutGrid = styled(GridContainer)`
  position: relative;
`
const NavBar = styled(GridContainer)`
  position: fixed;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  z-index: 10;

  ${padding_for_pages}

  ${PaddingWrap} {
    grid-column: -2 / -1;
  }
`

export default About
