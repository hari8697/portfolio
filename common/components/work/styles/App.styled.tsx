import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import {
  full_W_H,
  GridContainer,
  Para,
  ParaLarge,
  padding_for_pages,
} from "@/components/styled"
import { device } from "@/common/utils"

export const work_grid_col = css`
  grid-column: 1 / -1;

  @media ${device.tablet} {
    grid-column: 2 / -2;
  }
  @media ${device.laptop} and (orientation: landscape) {
    grid-column: 2 / -2;
  }
  @media ${device.laptopL} {
    grid-column: 5 / -5;
  }
  @media ${device.desktop} {
    grid-column: 8 / -8;
  }
  @media ${device.desktopL} {
    grid-column: 9 / -9;
  }
`

export const work_grid_col_Large = css`
  @media ${device.desktop} {
    grid-column: 5 / -5;
  }
  @media ${device.desktopL} {
    grid-column: 5 / -5;
  }
`
export const Container = styled(motion.div)`
  /* ${full_W_H} */
  ${GridContainer}
  ${padding_for_pages}
  
  padding-top: 0;
  @media ${device.tablet} {
    padding-top: 0;
  }
  
  @media ${device.laptop} and (orientation: landscape) {
    padding-bottom: 140px;
  }

  @media ${device.desktop} {
    padding-top: 0;
  }

  min-height: 100vh;
  position: relative;
  /* overflow-x: hidden; */

  & > * {
    ${work_grid_col}
  }

  .content_wrap {
    &.large {
      ${work_grid_col_Large}
    }
  }
  
  .album {
    img {
      width: 100%;
    }
  }
`

/*=============================================
=            Header            =
=============================================*/

export const NavbarStyled = styled.div`
  position: relative;
`

export const CloseBtnStyled = styled.div`
  z-index: 10;
  opacity: 0.8;
  transition: opacity 100ms ease-out;
  &:hover,
  :focus {
    cursor: pointer;
    opacity: 1;
  }
  .close_btn {
    width: 21px;
    padding: 8px;
    padding-right: 0;
    transition: opacity 100ms ease-out;
    &:hover,
    :focus {
      cursor: pointer;
    }
  }

  @media ${device.laptop} and (orientation: landscape) {
    padding: 0.75rem;
    position: fixed;
    top: 96px;
    right: 5vw;
    opacity: 0.5;
    .close_btn {
      width: 16px;
      max-width: none;
      padding: 0;
    }
  }

  @media ${device.laptopL} {
    right: 8vw;
  }

  @media ${device.desktop} {
    .close_btn {
      width: 20px;
    }
  }
`

export const HeaderStyled = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding: 56px 0 32px 0;

  .content_wrap {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .title_wrap {
    padding-top: calc(30vh - 56px);
    /* padding-top: 30vh; */
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      margin: 40px 0;
    }
  }

  @media ${device.laptop} and (orientation: landscape) {
    /* position: relative; */
    width: 100%;
    height: 100vh;

    padding-top: 96px;
    padding-bottom: 70px;

    grid-column: 4 / 21;

    .content_wrap {
      ${work_grid_col}
      position: static;
      height: 100%;
      /* min-height: 100vh; */
    }

    .title_wrap {
      padding: 0;
      display: block;
      position: relative;
      /* top: 45.5%; */
      /* top: calc(96px + 70px); */
      top: 50%;
      margin: 0.25rem 0;
      /* transform: translateY(-50%); */

      .title {
        margin: 0;
      }
    }
  }
`

export const HeroImage = styled(motion.div)`
  position: absolute;
  width: 100%;
  /* height: 25vh; */
  /* top: 26%; */
  /* transform: translate(-50%, -26%); */
  transform: translateY(-26%);
  left: 50%;
  overflow: hidden;
  /* transform: translateX(-50%); */
  /* width: 100vw;
  height: 30vh; */
  .img_wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media ${device.laptop} and (orientation: landscape) {
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    /* transform: translateX(-50%); */
    margin: 0 auto;
    height: 58.5vh;
    width: 104vh;
    z-index: -1;

    /* width: 66.66vw; // * 12 units in threejs for 100vw, each image is 8 units, hence 8/12 */
    /* min-height: 58.44vh; // * 7.7 units in threejs for 100vh, each image is 4.5 units, hence 4.5/7.7 */
  }
`

/*=====  End of Header  ======*/

export const ButtonLinkStyled = styled.button.attrs((props) => {
  return {
    withIcon: props.withIcon || false,
  }
})`
  line-height: 1;

  background: ${(props) => props.theme.bgColor};

  border: 1px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};

  border-radius: 4px;
  padding: ${(props) => (props.withIcon ? "0.4rem 1rem" : "0.44rem 1rem")};

  display: flex;
  align-items: center;
  grid-gap: 6px;

  transition: all 200ms ease-out;

  && ${Para} {
    margin-top: 0;
  }

  .img_wrap {
    /* width: 1.2rem; */
    height: 1.1rem;
    display: flex;
    align-items: center;
    img {
      /* width: 100; */
      height: 100%;
      /* opacity: 1; */
    }
  }

  &:hover,
  :focus {
    cursor: pointer;
    background: #5f2eea;
    border: 1px solid #2a00a2;
  }
`

/**
 *
 * Common shared block
 *
 */

const contentBlockShared = css`
  margin-bottom: ${(props) => (props.lastBlock ? "50px" : "1rem")};

  @media ${device.laptop} and (orientation: landscape) {
    margin-bottom: ${(props) => (props.lastBlock ? "200px" : "2.4rem")};
  }

  @media ${device.desktop} {
    margin-bottom: ${(props) => (props.lastBlock ? "300px" : "2.4rem")};
  }

  @media ${device.desktopL} {
    margin-bottom: ${(props) => (props.lastBlock ? "300px" : "3rem")};
  }

  ${ParaLarge},
  ${ButtonLinkStyled} {
    margin-top: 0.5rem;
    @media ${device.laptop} and (orientation: landscape) {
      margin-top: 1rem;
    }
    @media ${device.desktopL} {
      margin-top: 1.5rem;
    }
  }
`

/*=============================================
=            Presentation            =
=============================================*/

export const PresentationStyled = styled.div`
  ${contentBlockShared}

  @media ${device.laptop} and (orientation: landscape) {
    margin: 100px 0 100px;
  }
  @media ${device.desktop} {
    margin: 180px 0 100px;
  }
`

/*=====  End of Presentation  ======*/

export const SectionWrapper = styled(motion.div)`
  list-style: none;
  ${contentBlockShared}

  
  @media ${device.laptop} and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    
    ${ParaLarge},
    ${ButtonLinkStyled} {
        margin-top: 0;
    }
  }
`
export const ButtonListStyled = styled.div`
  display: flex;
  grid-gap: 1rem;
`

export const AlbumListStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  /* margin-top: 50px; */

  .img_wrapper {
    position: relative;
    width: 100%;
    img {
      border-radius: 3px;
    }

    &:hover,
    &:focus {
      cursor: pointer;
    }
  }

  @media ${device.laptop} and (orientation: landscape) {
    grid-gap: 3rem;
  }
  @media ${device.desktop} {
    grid-gap: 5rem;
  }
`

export const NextLinkStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
  margin-top: 50px;

  .title_wrap {
    /* transition: all 200ms ease-out; */
    /* border-radius: 5px; */
    &:hover,
    :focus {
      cursor: pointer;
      /* background: ${(props) => props.theme.primaryColor}; */
    }
    /* width: max-content; */
    display: flex;
    align-items: center;
    grid-gap: 0.5rem;
    img {
      height: 10px;
    }
  }

  
  @media ${device.laptop} {
    margin-top: 100px;
    .title_wrap {
      grid-gap: 1.2rem;
      h3{
        cursor: pointer;
      }
      img {
        height: 1.2rem;
      }
    }
  }

  @media ${device.desktop}{
    margin-top: 150px;
  }
  
  @media ${device.desktopL}{
    .title_wrap {
      grid-gap: 1.5rem;
      
      img {
        height: 1.5rem;
      }
    }
  }
`

/*=============================================
=            Presentation            =
=============================================*/

export const SwiperContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.bgColor};

  z-index: 999;

  /* visibility: ${(props) => (props.isOpen ? "visible" : "hidden")}; */
  /* opacity: ${(props) => (props.isOpen ? 1 : 0)}; */
  /* pointer-events: ${(props) => (props.isOpen ? "all" : "none")}; */

  ${CloseBtnStyled} {
    position: absolute;
    top: 50px;
    right: 8vw;

    /* opacity: 0.7; */

    @media ${device.laptop} and (orientation: landscape) {
      top: 96px;
      right: 5vw;
    }

    @media ${device.laptopL} {
      right: 8vw;
    }
  }

  .img_wrapper {
    position: relative;
    /* width: 100%; */
    /* height: 80%; */
    /* overflow: hidden; */
  }

  .swiper {
    height: 100%;
  }

  .swiper-container {
    position: fixed !important;
    left: 50%;
    top: 50%;
    height: 92vh;
    width: 100%;
    transform: translate(-50%, -50%);
    // transform: rotate(90deg) !important;
    /* img {
      width: 100%;
    } */
  }

  .swiper-pagination {
    bottom: 20px !important;
  }

  .swiper-pagination-bullet {
    background: ${(props) => props.theme.disabled};
  }

  .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.primaryColor};
  }

  .swiper-button-next,
  .swiper-button-prev {
    opacity: 0;
    pointer-events: none;

    @media ${device.laptop} and (orientation: landscape) {
      opacity: 0.2;
      pointer-events: all;
    }
    transition: opacity 200ms ease-out;
    padding: 1rem 2rem;
    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: white;
    font-size: 1.44rem;
  }
`

/*=====  End of Presentation  ======*/
