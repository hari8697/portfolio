import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import {
  full_W_H,
  GridContainer,
  ParaLarge,
  padding_for_pages,
} from "@/components/styled"
import { device } from "@/common/utils"
import { about_grid_col } from "../../about/molecules/About.style"
export const work_grid_col = css`
  grid-column: 1 / -1;

  @media ${device.tablet} {
    grid-column: 2 / -2;
  }
  @media ${device.laptop} and (orientation: landscape) {
    grid-column: 5 / -5;
  }
`
export const Container = styled(motion.div)`
  ${full_W_H}
  ${GridContainer}
  ${padding_for_pages}
  padding-top: 0;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;

  & > * {
    ${work_grid_col}
  }
  
  .album {
    img {
      width: 100%;
    }
  }
`

export const HeaderStyled = styled.div`
  width: 100%;
  padding-top: 30vh;

  .title_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      margin: 40px 0;
    }
  }

  .close_btn {
    max-width: 16px;
    padding: 5px;
    padding-right: 0;
  }
`

export const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 105%;
  height: 30vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
