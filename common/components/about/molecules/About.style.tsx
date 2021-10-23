import { device, typeScale } from "@/common/utils"
import styled from "styled-components"

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

export const Logo_ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 20vh;
`

export const LogoContainer = styled.div`
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1 / -1;
  margin: 0 10%;

  @media ${device.tablet} {
    height: 80vh;
    margin: 0;
    grid-column: 3 / 7;
  }

  @media ${device.laptop} and (orientation: landscape) {
    grid-column: 7 / 19;
  }
`

/*=============================================
=            Swoosh Component            =
=============================================*/

export const SwooshContain = styled.div`
  width: 100%;
  height: 110%;
  overflow: hidden;
  position: absolute;
  top: -2%;
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

  @media ${device.mobileM} {
    top: 0%;
  }

  @media ${device.tablet} {
  }

  @media ${device.tablet} and (orientation: landscape) {
    top: 9%;
  }

  @media ${device.laptop} and (orientation: landscape) {
    top: 9%;
  }
  @media ${device.laptopL} and (orientation: landscape) {
    top: 10%;
  }
  @media ${device.desktop} and (orientation: landscape) {
    top: 15%;
  }
  @media ${device.desktopL} and (orientation: landscape) {
    top: 11%;
  }
`
