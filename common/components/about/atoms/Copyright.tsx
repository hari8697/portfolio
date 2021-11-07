import styled from "styled-components"
import { CopyrightText } from "@/components/styled/Text"

const Text = styled(CopyrightText)`
  opacity: 0.5;
`

const Copyright = () => {
  return <Text>© 2021 Hari Krishnan</Text>
}

export default Copyright
