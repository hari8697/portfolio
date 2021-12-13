import { ButtonLinkStyled } from "../styles/App.styled"

const ButtonLink = ({ children, withIcon }) => {
  return <ButtonLinkStyled withIcon={withIcon}>{children}</ButtonLinkStyled>
}

export default ButtonLink
