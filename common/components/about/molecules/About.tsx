import styled, { css } from "styled-components"

import { about_grid_col, Bio, BioGrid } from "../styles/About.style"
import { device, typeScale } from "@/common/utils"
import { motion } from "framer-motion"
import { GridContainer, full_W_H } from "../../styled"
import IconsWrap from "./IconsWrap"
import { useRef } from "react"
import { H5, ParaLarge, H5Large } from "@/components/styled"
import Footer from "./Footer"
import LogoWrapper from "../atoms/LogoWrapper"

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

interface AboutProps {
  animDelay: number
}

const About = ({ animDelay }: AboutProps) => {
  const constraintsRef = useRef(null)

  return (
    <AboutWrap
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <LogoWrapper animDelay={animDelay} />
      <BioGrid>
        <Bio>
          Hi! I'm DeathSpace, a front-end web developer & UI/UX enthusiast from
          Bangalore, India. I specialize in creating websites for businesses
          that are tailored to their needs, with pixel-perfect code. Oh, and I
          have a serious passion for making neat animations.
          <br />
          <br />
          Please have a look around to find a selection of my most recent
          projects. From small business websites to complex web applications, I
          have a track record of delivering high-quality solutions that meet the
          needs of my clients. I'm always looking for new challenges and
          opportunities to grow as a developer.
          <br />
          <br />
          Thank you for visiting my portfolio. If you have a project that you
          think I could help with, I'd love to hear from you!
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

  margin-top: 50px;
  margin-bottom: 160px;
  @media ${device.tablet} {
    margin-bottom: 0;
  }
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
