import styled, { css } from "styled-components"
import { H5, H5Link } from "@/components/styled/"

const TextLink = ({ children }) => {
  return (
    <H5Link capsON click highlighted>
      {children}
    </H5Link>
  )
}

export default TextLink
