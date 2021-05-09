import Image from "next/image"
import styled from "styled-components"
// import { motion } from "framer-motion"
import { mobile_typeScale } from "../utils"

const GridContainer = styled.div`
  margin: 0 24px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: max-content max-content max-content;
  gap: 0px 16px;
  max-height: 100vh;

  .hero_image {
    position: absolute;
    top: 30%;
    grid-column: 1 / 5;
    z-index: -1;
    opacity: 0.8;
  }
`
const Header_wrap = styled.div`
  grid-column: 1 / 5;
  display: flex;
  height: min-content;
  align-items: center;

  .logo {
    margin-right: auto;
    width: 31%;
  }
`

const Title_wrap = styled.div`
  grid-column: 1 / 5;
  margin-top: 40vh;
`

const Footer_wrap = styled.div`
  grid-column: 1 / 5;
  margin-top: 20vh;
  display: flex;
  align-items: center;

  .social_wrap {
    display: flex;
    margin-right: auto;
    .social_icon {
      margin-right: 25px;
      opacity: 0.3;
      transition: opacity 250ms ease-out;

      &:focus,
      &:hover {
        opacity: 1;
      }
    }
  }

  .text_wrap {
    opacity: 0.3;
  }
`

const H5 = styled.div`
  text-transform: uppercase;
  font-size: ${mobile_typeScale.paragraph};
  opacity: 0.5;
  transition: opacity 100ms ease-out, border-bottom 100ms ease-out;
  padding: 2px 0;
  border-bottom: 3px solid transparent;

  &.clickable {
    &:focus,
    &:hover {
      opacity: 1;
      border-bottom: 3px solid ${(props) => props.theme.primaryColor};
    }
  }
`

const H1 = styled.div`
  font-family: ${(props) => props.theme.secondaryFont};
  text-transform: capitalize;
  font-weight: 700;
  font-size: ${mobile_typeScale.header1};
  opacity: 0.5;
  margin: 0.25rem 0;
  line-height: 122%;

  &.sel {
    opacity: 1;
  }
`

const portArray = [
  { id: 1, name: "Nike SB", selected: true },
  { id: 2, name: "Rhoncus urna", selected: false },
  { id: 3, name: "Amet facilisis", selected: false },
  { id: 4, name: "Magna ac placerat", selected: false },
]

const portItems = portArray.map((item) => {
  return (
    <H1 key={item.id} className={item.selected ? "sel" : ""}>
      {item.name}
    </H1>
  )
})

const socialArray = [1, 2, 3, 4]

const socialItems = socialArray.map((item) => {
  return (
    <div className="social_icon">
      <Image
        key={item}
        src={`/landing/social/${item}.svg`}
        width={18}
        height={18}
      ></Image>
    </div>
  )
})

export default function Home() {
  return (
    <>
      <GridContainer>
        <Header_wrap>
          <div className="logo">
            <Image src="/DeathSpace_Logo.svg" width={303} height={56}></Image>
          </div>
          <H5 className="clickable">About</H5>
        </Header_wrap>
        <div className="hero_image">
          <Image
            src={`/landing/album/1.png`}
            width={1354}
            height={761}
            // layout="responsive"
          ></Image>
        </div>
        <Title_wrap>{portItems}</Title_wrap>
        <Footer_wrap>
          <div className="social_wrap">{socialItems}</div>
          <H5 className="text_wrap">Swipe/Tap</H5>
        </Footer_wrap>
      </GridContainer>
    </>
  )
}
