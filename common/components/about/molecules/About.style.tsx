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
  height: 80vh;
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
  top: 0;
  left: 0;
  pointer-events: none;
`
export const SwooshWrap = styled.div`
  position: absolute;
  top: 6%;
  /* left: 50%; */
  z-index: -1;
  width: 100%;
  height: 100%;
  min-height: 50vw;
  /* overflow: hidden; */
  /* min-height: 100vh; */

  @media ${device.mobileM} {
    top: 9%;
  }

  @media ${device.tablet} {
  }

  @media ${device.laptopL} and (orientation: landscape) {
    top: 12%;
  }
  @media ${device.desktop} and (orientation: landscape) {
    top: 15%;
  }
  @media ${device.desktopL} and (orientation: landscape) {
    top: 12%;
  }

  .line {
    width: 100vw;
    height: 100vh;
  }
  .gradient {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    z-index: -1;
    clip-path: url(#myClip);
    /* gradient1 */

    background: linear-gradient(
      255.43deg,
      #fa00ff 2.2%,
      #8f00ff 24.37%,
      #2400ff 55.66%,
      rgba(36, 0, 255, 0.37) 60.85%,
      rgba(0, 0, 0, 0) 92.5%
    );
  }

  .box {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to left,
        #fa00ff,
        #8f00ff,
        #2400ff,
        rgba(36, 0, 255, 0.37)
      )
      right/300% 100%;
    mask: url('data:image/svg+xml;utf8,<svg width="2925" height="1382" viewBox="0 0 2925 1382" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2924.92 4.62061C2587.71 4.62051 2140.01 98.5328 1801.96 302.832C1628.73 407.524 1459.06 567.172 1283.85 732.024C1273.95 741.346 1264.02 750.685 1254.08 760.032C1068.36 934.58 875.949 1111.75 666.422 1232.35C475.358 1342.33 339.908 1377.36 236.612 1381.07C154.29 1384.03 92.4363 1367.06 39.5077 1352.55C26.0577 1348.86 13.184 1345.33 0.697266 1342.33L1.63321 1338.44C14.2765 1341.48 27.2557 1345.04 40.7751 1348.74C93.6631 1363.24 154.818 1380 236.468 1377.07C338.933 1373.39 473.748 1338.65 664.426 1228.89C873.487 1108.55 1065.58 931.708 1251.34 757.117C1261.32 747.734 1271.29 738.358 1281.23 728.997C1456.32 564.254 1626.28 404.329 1799.89 299.409C2138.69 94.6582 2587.14 0.62051 2924.92 0.620605V4.62061Z" fill="white"/></svg>')
      0 0/100% 100%;
    animation: change 4s infinite linear alternate;
  }
  @keyframes change {
    to {
      background-position: left;
    }
  }
`
