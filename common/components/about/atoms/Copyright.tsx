import styled from "styled-components"
import { CopyrightText } from "@/components/styled/Text"
import { device } from "@/common/utils"

const Text = styled(CopyrightText)`
  opacity: 0.3;
  line-height: 100%;

  @media ${device.laptop} {
    opacity: 0.5;
  }
`

const Copyright = () => {
  return <Text>© 2021 Hari Krishnan</Text>
}

export default Copyright
