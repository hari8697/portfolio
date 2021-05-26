import styled from "styled-components"
import App from "../common/components/landing/App"

function Home() {
  return (
    <IndexPage>
      <App />
    </IndexPage>
  )
}

const IndexPage = styled.div`
  height: 100%;
`

export default Home
