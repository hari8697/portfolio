import TextLink from "../atoms/TextLink"
import Copyright from "../atoms/Copyright"
import styled from "styled-components"
import { about_grid_col } from "./About.style"
import { GridContainer } from "../../styled"
import { device, useResponsiveHelper } from "@/common/utils/"
import { useEffect } from "react"
import SocialItems from "../../landing/molecules/SocialItems"

const Footer = () => {
  const { isMobile, isTablet } = useResponsiveHelper()

  const LinksArr = ["Email", "Twitter", "Instagram"]
  const linksComponents = LinksArr.map((item, index) => {
    return (
      <TextLink
        addComma={index == LinksArr.length - 1 ? false : true}
        key={index}
      >
        {item}
      </TextLink>
    )
  })

  // const mobileLinks = Array.from({ length: 4 }, (_, i) => i + 1)
  // const mobileLinksComponents = mobileLinks.map(item => {
  //   <img src="``" alt="" />
  // })

  return (
    <StyledFooter>
      <ContentWrap>
        {!isMobile && !isTablet ? (
          <LinksWrap>{linksComponents}</LinksWrap>
        ) : (
          <MobileLinksWrap>
            <span className="line"></span>

            <SocialItems></SocialItems>
          </MobileLinksWrap>
        )}
        <Copyright />
      </ContentWrap>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  ${GridContainer}
  margin: 35px 0;

  @media ${device.tablet} {
    margin: 100px 0;
  }
  @media ${device.laptop} and (orientation: landscape) {
    margin: 50px 0;
  }
`

const ContentWrap = styled.div`
  ${about_grid_col}
`

const LinksWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: pre-wrap;
  max-width: 24ch;

  margin-bottom: 280px;
`

const MobileLinksWrap = styled.div`
  height: max-content;
  margin-top: 120px;

  @media ${device.tablet} {
    margin-top: 0px;
  }

  .line {
    display: block;
    width: 80%;
    max-width: 210px;
    height: 1px;
    background: ${(props) => props.theme.textColor};

    opacity: 0.1;
  }

  .social_wrap {
    display: flex;
    grid-gap: 4px;
    height: 1.18rem;
    margin: 24px 0;
  }

  .icon_wrapper + .icon_wrapper {
    padding: 0 10px;
  }
  .icon_wrapper {
    height: 100%;
    opacity: 0.6;
    transition: opacity 0.25s ease-out;

    padding-right: 10px;
    &:hover,
    &:focus {
      cursor: pointer;
      opacity: 1;
    }
  }

  .social_icon {
    position: relative;
    height: 100%;
    width: 1.18rem;
  }
`
export default Footer