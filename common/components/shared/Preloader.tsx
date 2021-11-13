import { device } from "@/common/utils"
import Div100vh from "react-div-100vh"
import styled from "styled-components"

const Preloader = () => {
  return (
    <StyledPreloader>
      <img className="logo" src="/common/DeathSpace_Logo.svg" alt="" />
    </StyledPreloader>
  )
}
const StyledPreloader = styled(Div100vh)`
  position: fixed;
  /* opacity: 0.5; */
  background: ${(props) => props.theme.bgColor};
  z-index: 999;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    width: 70vw;
    @media ${device.tablet} {
      width: 50vw;
    }

    @media ${device.laptop} and (orientation: landscape) {
      width: 30vw;
    }
  }
`

export default Preloader
