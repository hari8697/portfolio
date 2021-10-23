import Image from "next/image"
import styled from "styled-components"
import { Bio, ContentWrap, LogoContainer, Logo_ImgWrap } from "./About.style"
import { motion } from "framer-motion"
import { GridContainer, full_W_H } from "../../styled"

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
        <LogoContainer>
          <Logo_ImgWrap>
            <Image src="/common/DeathSpace_Logo.svg" layout="fill"></Image>
          </Logo_ImgWrap>
        </LogoContainer>
        <ContentWrap>
          <Bio>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia
            quis vel eros donec ac odio. Nulla facilisi cras fermentum odio eu
            feugiat. Massa enim nec dui nunc mattis enim ut. Malesuada fames ac
            turpis egestas. Varius quam quisque id diam vel quam elementum. Quis
            viverra nibh cras pulvinar mattis nunc sed blandit libero. Ac
            placerat vestibulum lectus mauris ultrices eros. Mauris commodo quis
            imperdiet massa tincidunt nunc pulvinar sapien et. Ut pharetra sit
            amet aliquam. Quisque id diam vel quam elementum. In ornare quam
            viverra orci sagittis eu volutpat odio.
          </Bio>
        </ContentWrap>
      </AboutGrid>
    </AboutWrap>
  )
}

const AboutWrap = styled(motion.div)`
  ${full_W_H}
`
const AboutGrid = styled.div`
  position: relative;
  ${GridContainer}
`

export default About
