import TextLink from "../atoms/TextLink"
import Copyright from "../atoms/Copyright"
import styled from "styled-components"
import { about_grid_col } from "./About.style"
import { GridContainer } from "../../styled"

const Footer = () => {
  const LinksArr = ["Email", "Twitter", "Instagram"]
  const linksComponent = LinksArr.map((item, index) => {
    return (
      <TextLink addComma={index == LinksArr.length - 1 ? false : true}>
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
