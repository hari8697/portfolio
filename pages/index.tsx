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
  width: 100%;
  height: 100%;
`

export default Home
