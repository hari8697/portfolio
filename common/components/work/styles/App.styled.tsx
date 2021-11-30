import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import {
  full_W_H,
  GridContainer,
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

/*=============================================
=            Header            =
=============================================*/

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
  .img_wrap {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  align-items: center;

  display: flex;
  align-items: center;
  grid-gap: 6px;

  && ${ParaLarge} {
    margin-top: 0;
  }

  .img_wrap {
    width: 1.2rem;
    height: 1.2rem;
    img {
      width: 100%;
    }
  }

  &:hover {
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

  ${ParaLarge},
  ${ButtonLinkStyled} {
    margin-top: 0.5rem;
  }
`

/*=============================================
=            Presentation            =
=============================================*/

export const PresentationStyled = styled.div`
  ${contentBlockShared}
`

/*=====  End of Presentation  ======*/

export const SectionWrapper = styled.div`
  list-style: none;
  ${contentBlockShared}
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
  }
`

export const NextLinkStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
  margin-top: 50px;

  .title_wrap {
    display: flex;
    align-items: center;
    grid-gap: 0.5rem;
    img {
      height: 10px;
    }
  }
`

/*=============================================
=            Presentation            =
=============================================*/

/*=====  End of Presentation  ======*/
