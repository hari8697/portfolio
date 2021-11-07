import styled, { css } from "styled-components"
import { H5 } from "@/components/styled/index"

const clickable = css`
  border-bottom: 3px solid transparent;
  &:focus,
  &:hover {
    cursor: ${(props) => (props.grab ? "grab" : "pointer")};
    opacity: 1;
    border-bottom: 3px solid ${(props) => props.theme.primaryColor};
  }
`

const Header5 = styled(H5).attrs((props) => ({
  // We can define dynamic ones
  grab: props.grab || false,
}))`
  opacity: ${(props) => (props.highlighted ? 0.5 : 0.3)};
  transition: opacity 100ms ease-out, border-bottom 100ms ease-out;

  ${(props) => props.click && clickable}
`

const TextLink = ({ children }) => {
  return (
    <Header5 capsON click highlighted>
      {children}
    </Header5>
  )
}

export default TextLink
