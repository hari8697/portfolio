import styled, { css } from "styled-components"
import { H1, H2, H5, H5Large, Para, h1Style } from "@/components/styled/index"
import { device, typeScale } from "@/common/utils"

export const GridContainer = styled.div`
  height: 100%;
  margin: 0 24px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: max-content max-content 1fr max-content;
  grid-gap: 0px 16px;
  max-height: 100vh;

  .hero_image {
    position: absolute;
    top: 26%;
    grid-column: 1 / -1;
    z-index: -1;
    opacity: 0.8;
  }

  @media ${device.tablet} {
    margin: 0 48px;
    gap: 0px 24px;
    grid-template-columns: repeat(8, 1fr);

    .hero_image {
      top: 21%;
    }
  }

  @media ${device.laptop} and (orientation: landscape) {
    margin: 0 120px;
    gap: 0px;
    grid-template-columns: repeat(24, 1fr);

    .hero_image {
      width: 58vw;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

export const Header_wrap = styled.div`
  grid-column: 1 / -1;
  display: flex;
  height: min-content;
  align-items: center;

  .logo {
    margin-right: auto;
    width: 27vw;
    min-width: 100px;
    max-width: 235px;
  }

  .link_about {
    pointer-events: all;
  }

  @media ${device.tablet} {
    .logo {
      width: 20vw;
    }
  }

  @media ${device.laptop} and (orientation: landscape) {
    grid-column: 2 / 24;
    .logo {
      min-width: 150px;
      width: 10vw;
    }
  }
`

export const Title_wrap = styled.div`
  grid-column: 1 / -1;
  margin-top: 40vh;

  @media ${device.tablet} {
    margin: 0 5%;
    margin-top: 40vh;
  }

  @media ${device.laptop} and (orientation: landscape) {
    margin: 0;
    position: absolute;
    top: 50%;
    grid-column: 4 / 21;
    /* left: 16%; */
    /* transform: translateY(-50%); */
  }

  .filters_wrapper {
    position: relative;

    .selected_filter {
      ${h1Style}
      display: block;
      position: absolute;
      top: -0.25rem;
      height: 1.22em;

      z-index: 2;
      overflow: hidden;
      /* clip-path: inset(0px); */
    }
    .unselected_filter {
      opacity: 0.05;
    }
  }
`

export const Footer_wrap = styled.div`
  grid-column: 1 / -1;
  grid-row: 4 / 5;
  display: flex;
  align-items: center;

  .social_wrap {
    display: flex;
    margin-right: auto;
  }

  .icon_wrapper {
    padding: 10px;
    margin-right: 5px;
    opacity: 0.3;
    transition: opacity 250ms ease-out;
    pointer-events: all;
    cursor: grab;

    &:first-child {
      margin-left: -10px;
    }

    &:focus,
    &:hover {
      opacity: 1;
    }
  }

  .social_icon {
    width: 18px;
    height: 18px;
    position: relative;

    div {
    }
  }

  .text_wrap {
    opacity: 0.3;
  }

  @media ${device.tablet} {
    .social_icon {
      width: 20px;
      height: 20px;
    }
  }

  @media ${device.laptop} {
    .social_icon {
      width: 24px;
      height: 24px;
    }
  }

  @media ${device.laptop} and (orientation: landscape) {
    align-items: flex-end;
    grid-column: 2 / 24;

    .social_wrap {
      flex-direction: column;

      .social_icon {
        width: 20px;
        height: 20px;
      }
    }

    .icon_wrapper {
      margin: 0;
      margin-top: 26px;
      margin-left: -10px;
    }

    h5,
    p {
      margin-bottom: 20px;
    }
  }

  @media ${device.desktopL} {
    .social_wrap {
      .social_icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`
export const Header5 = styled(H5)`
  opacity: ${(props) => (props.highlighted ? 0.5 : 0.3)};
  transition: opacity 100ms ease-out, border-bottom 100ms ease-out;
  /* padding: 2px 0; */
  text-transform: ${(props) => props.capsON && "uppercase"};

  &.clickable {
    border-bottom: 3px solid transparent;
    &:focus,
    &:hover {
      cursor: grab;
      opacity: 1;
      border-bottom: 3px solid ${(props) => props.theme.primaryColor};
    }
  }
`

export const Paragraph = styled(Para)`
  opacity: ${(props) => (props.highlighted ? 0.5 : 0.3)};
  transition: opacity 100ms ease-out, border-bottom 100ms ease-out;
  text-transform: ${(props) => props.capsON && "uppercase"};

  &.clickable {
    border-bottom: 3px solid transparent;
    &:focus,
    &:hover {
      opacity: 1;
      border-bottom: 3px solid ${(props) => props.theme.primaryColor};
    }
  }
`

export const Title = styled(H1)`
  text-transform: capitalize;
  opacity: 1;
  margin: 0.25rem 0;
  width: max-content;
`

export const Subtitle = styled(H2)`
  opacity: 0.5;
  margin: 0.25rem 0;
`
