import { ParaLarge } from "@/components/styled"
import styled from "styled-components"

const TextList = ({ data }) => {
  let comps
  if (Array.isArray(data)) {
    comps = data.map((el, idx) => {
      return (
        <ParaLarge key={idx}>
          {idx < data.length - 1 ? `${el}, ` : `${el}`}
        </ParaLarge>
      )
    })
  } else {
    comps = <ParaLarge>{data}</ParaLarge>
  }

  return <TextListStyled>{comps}</TextListStyled>
}

const TextListStyled = styled.div`
  display: flex;
  white-space: pre-wrap;
  ${ParaLarge} {
    /* margin-right: 0.25rem; */
  }
`

export default TextList
