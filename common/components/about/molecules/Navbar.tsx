import { GridContainer, padding_for_pages } from "@/components/styled/"
import Link from "next/link"
import styled from "styled-components"
import { CloseBtn_ImgWrap, PaddingWrap } from "./About.style"

const Navbar = () => {
  return (
    <NavBar>
      <Link href="/" scroll={false}>
        <PaddingWrap>
          <CloseBtn_ImgWrap>
            <img src="/about/close_btn.svg"></img>
          </CloseBtn_ImgWrap>
        </PaddingWrap>
      </Link>
    </NavBar>
  )
}

const NavBar = styled.div`
  ${GridContainer}
  position: fixed;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  z-index: 10;

  ${padding_for_pages}

  ${PaddingWrap} {
    grid-column: -2 / -1;
  }

  &.blur {
    background: linear-gradient(
      180deg,
      #0e0c10 17.06%,
      rgba(14, 12, 16, 0.31) 100%
    );

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
    }

    /* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    }
  }
`
export default Navbar
