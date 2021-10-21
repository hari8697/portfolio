import Image from "next/image"
import styled from "styled-components"
import Link from "next/link"
import { GridContainer } from "@/components/landing/Landing.style"
import {
  CloseBtn_ImgWrap,
  LogoContainer,
  Logo_ImgWrap,
  PaddingWrap,
} from "./About.style"
import { motion } from "framer-motion"

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
      <AboutGrid>
        <NavBar>
          <Link href="/">
            <PaddingWrap>
              <CloseBtn_ImgWrap>
                <Image src="/about/close_btn.svg" layout="fill"></Image>
              </CloseBtn_ImgWrap>
            </PaddingWrap>
          </Link>
        </NavBar>
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
  width: 100%;
  height: 100%;
`
const AboutGrid = styled(GridContainer)`
  position: relative;
`
const NavBar = styled.div`
  /* position: sticky;
  top: 5%; */
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: inherit;
  gap: inherit;
  grid-column: 1 / -1;

  ${PaddingWrap} {
    grid-column: -2 / -1;
  }
`

export default About
