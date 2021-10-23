import styled, { css } from "styled-components"
import { device, typeScale } from "@/common/utils"

export const padding_for_pages = css`
  padding-top: 56px;
  padding-bottom: 32px;
  @media ${device.tablet} {
    padding-top: 72px;
    padding-bottom: 50px;
  }
  @media ${device.desktop} {
    padding-top: 96px;
    padding-bottom: 70px;
  }
`

export const full_W_H = css`
  width: 100%;
  height: 100%;
`

export const GridContainer = styled.div`
  /* height: 100%; */
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: max-content max-content 1fr max-content; */
  grid-gap: 0px 16px;
  padding: 0 24px;

  @media ${device.tablet} {
    padding: 0 48px;
    gap: 0px 24px;
    grid-template-columns: repeat(8, 1fr);
  }

  @media ${device.laptop} and (orientation: landscape) {
    padding: 0 120px;
    gap: 0px;
    grid-template-columns: repeat(24, 1fr);
  }
`
