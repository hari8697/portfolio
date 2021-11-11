import TextLink from "../atoms/TextLink"
import Copyright from "../atoms/Copyright"
import styled from "styled-components"
import { about_grid_col } from "./About.style"
import { GridContainer } from "../../styled"
import { useResponsiveHelper } from "@/common/utils/"
import { useEffect, useState } from "react"

const Footer = () => {
  const { isMobile, isTablet } = useResponsiveHelper()

  // const [mobileCheck, setMobileCheck] = useState(isMobile(vW, vH))

  useEffect(() => {
    console.log("isMobile", isMobile, "isTablet", isTablet)
  }, [isMobile, isTablet])

  // useEffect(() => {
  //   setMobileCheck(isMobile(vW, vH))
  // }, [vW, vH])

  const LinksArr = ["Email", "Twitter", "Instagram"]
  const linksComponent = LinksArr.map((item, index) => {
    return (
      <TextLink
        addComma={index == LinksArr.length - 1 ? false : true}
        key={index}
      >
        {item}
      </TextLink>
    )
  })

  return (
    <StyledFooter>
      <ContentWrap>
        <LinksWrap>{linksComponent}</LinksWrap>
        <Copyright />
      </ContentWrap>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  ${GridContainer}
  margin: 50px 0;
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
export default Footer
