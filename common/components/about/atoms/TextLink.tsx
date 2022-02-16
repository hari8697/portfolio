import styled, { css } from "styled-components"
import { H5, H5Link } from "@/components/styled/"

const TextLink = ({ children, addComma }) => {
  return (
    <LinkWrap>
      <H5Link capsON click highlighted>
        {children}
      </H5Link>
      {addComma && (
        <H5Link highlighted noclick>
          {", "}
        </H5Link>
      )}
    </LinkWrap>
  )
}

const LinkWrap = styled.div`
  display: flex;
  h5 {
    margin-bottom: 4px;
  }
`

export default TextLink
