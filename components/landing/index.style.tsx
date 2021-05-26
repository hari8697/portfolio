import styled, { css } from "styled-components"
import { H1, H2, H5 } from "../styled/Text"

export const GridContainer = styled.div`
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
export const Header_wrap = styled.div`
  grid-column: 1 / 5;
  display: flex;
  height: min-content;
  align-items: center;

  .logo {
    margin-right: auto;
    width: 31%;
  }
`

export const Title_wrap = styled.div`
  grid-column: 1 / 5;
  margin-top: 40vh;
`

export const Footer_wrap = styled.div`
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

export const Header5 = styled(H5)`
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

export const Title = styled(H1)`
  text-transform: capitalize;
  opacity: 0.5;
  margin: 0.25rem 0;

  &.sel {
    opacity: 1;
  }
`

export const Subtitle = styled(H2)`
  opacity: 0.5;
  margin: 0.25rem 0;

  &.sel {
    opacity: 1;
  }
`
