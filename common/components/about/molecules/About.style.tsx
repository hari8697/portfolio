import { device, typeScale } from "@/common/utils"
import styled, { css } from "styled-components"

import { full_W_H, GridContainer, ParaLarge } from "@/components/styled"
import Div100vh from "react-div-100vh"

export const default_grid_col = css`
  grid-column: 1 / -1;
  @media ${device.tablet} {
    grid-column: 3 / 7;
  }

  @media ${device.laptop} and (orientation: landscape) {
    grid-column: 7 / 19;
  }
`
export const about_grid_col = css`
  grid-column: 1 / -1;

  @media ${device.tablet} {
    grid-column: 2 / -2;
  }
  @media ${device.laptop} and (orientation: landscape) {
    grid-column: 1 / -1;
  }
  @media ${device.laptopL} and (orientation: landscape) {
    grid-column: 2 / -2;
  }

  @media ${device.desktop} and (orientation: landscape) {
    grid-column: 7 / -7;
  }
`

export const PaddingWrap = styled.div`
  padding: 0.75rem;
  opacity: 0.5;
  justify-self: flex-end;
  /* margin: 0 auto; */
  /* margin-left: auto; */
  transition: opacity 0.1s ease-in-out;

  @media ${device.tablet} {
    justify-self: center;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const CloseBtn_ImgWrap = styled.div`
  position: relative;
  width: 15px;
  height: 15px;

  @media ${device.tablet} {
    width: 20px;
    height: 20px;
  }

  @media ${device.laptop} and (orientation: landscape) {
  }
`

/*=============================================
=            Main Logo            =
=============================================*/
export const LogoGrid = styled.div`
  width: 100%;
  ${GridContainer}
`
export const LogoContainer = styled(Div100vh)`
  height: 100%;
  display: grid;
  place-items: center;
  position: relative;

  grid-template-columns: inherit;
  grid-column: 1 / -1;
  margin: 0 10%;

  @media ${device.tablet} {
    margin: 0;
    /* height: 100vh; */
  }
`

export const Logo_ImgWrap = styled.div`
  position: relative;
  ${full_W_H}
  max-height: 20vh;

  grid-template-columns: inherit;
  ${default_grid_col}

  img {
    ${full_W_H}
  }
`

/*=====  End of Main Logo  ======*/

/*=============================================
=            Swoosh Component            =
=============================================*/

export const SwooshContain = styled.div`
  width: 100%;
  height: 110%;
  max-height: 120vh;
  overflow: hidden;
  position: absolute;
  top: 0%;
  left: 0;
  pointer-events: none;
`

export const SwooshWrap = styled.div`
  position: absolute;
  top: 0%;
  /* left: 50%; */
  z-index: -1;
  width: 100%;
  height: 100%;
  min-height: 50vw;
  /* overflow: hidden; */
  /* min-height: 100vh; */

  /**
   *
   * TODO Broke the swoosh positioning, fix soon
   *
   */

  @media ${device.mobileM} {
    top: 0%;
  }

  @media ${device.tablet} {
    top: 0%;
  }

  @media ${device.tablet} and (orientation: landscape) {
    top: 5%;
  }

  @media ${device.laptop} and (orientation: landscape) {
    top: 5%;
  }

  @media ${device.laptopL} and (orientation: landscape) {
    top: 5%;
  }

  @media ${device.desktop} and (orientation: landscape) {
    top: 9%;
  }

  @media ${device.desktopL} and (orientation: landscape) {
    top: 8%;
  }
`

/*=====  End of Swoosh Component  ======*/

/*=============================================
=            Content Wrap            =
=============================================*/

export const BioGrid = styled.div`
  ${GridContainer}
`
export const Bio = styled(ParaLarge)`
  padding: 100px 0;
  ${about_grid_col}
  font-weight: normal;
`

/*=====  End of Content Wrap  ======*/
