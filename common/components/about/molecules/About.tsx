import Image from "next/image"
import styled from "styled-components"
import { Bio, ContentWrap, LogoContainer, Logo_ImgWrap } from "./About.style"
import { motion } from "framer-motion"
import { GridContainer, full_W_H } from "../../styled"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faNode,
  faGithub,
  faReact,
  faVuejs,
  faGitlab,
  faDocker,
  faFigma,
  faSass,
  faNpm,
  faUnity,
  faSourcetree,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {} from "@fortawesome/free-solid-svg-icons"

library.add(fab)

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
  const iconsArr = [
    faJsSquare,
    faHtml5,
    faCss3Alt,
    faNode,
    faGithub,
    faReact,
    faVuejs,
    faGitlab,
    faDocker,
    faFigma,
    faSass,
    faNpm,
    faUnity,
    faSourcetree,
  ]

  const icons = iconsArr.map((item) => {
    return <FontAwesomeIcon icon={item} className="icon" />
  })
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
          <IconWrap>
            {/* <FontAwesomeIcon icon={["fab", "github"]} />
            <FontAwesomeIcon icon={["fab", "react"]} />
            <FontAwesomeIcon icon={["fab", "vuejs"]} /> */}
            {icons}
          </IconWrap>
        </ContentWrap>
      </AboutGrid>
    </AboutWrap>
  )
}
const IconWrap = styled.div`
  width: 100%;
  height: 45px;
  display: flex;

  /* justify-content: space-evenly; */
  grid-gap: 3%;

  margin: 120px 0;

  .icon {
    opacity: 0.5;
    /* margin: 0.5rem 0.25rem; */
    width: min-content;
    height: min-content;
    /* width: auto; */
    /* height: 70%; */
    max-height: 80%;
    padding: 2px 1px;
    transition: opacity 0.25s ease-out;

    &:hover {
      opacity: 1;
    }
  }
`
const AboutWrap = styled(motion.div)`
  ${full_W_H}
`
const AboutGrid = styled.div`
  position: relative;
  ${GridContainer}
`

export default About
