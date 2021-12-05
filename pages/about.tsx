import App from "../common/components/about/App"
import styled from "styled-components"
import { useEffect } from "react"

const About = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <AboutPage>
      <App />
    </AboutPage>
  )
}

const AboutPage = styled.div`
  width: 100%;
  height: 100%;
`
export default About
