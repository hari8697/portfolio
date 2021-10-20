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

const About = () => {
  return (
    <GridContainer>
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
    </GridContainer>
  )
}

const NavBar = styled.div`
  /* height: 10vh; */
  /* margin-top: 4vh; */
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
