import TextLink from "../atoms/TextLink"
import Copyright from "../atoms/Copyright"

const Footer = () => {
  const LinksArr = ["Email,", "Twitter,", "Instagram"]

  const linksComponent = LinksArr.map((item) => {
    return <TextLink>{item}</TextLink>
  })

  return (
    <>
      {linksComponent}
      <Copyright />
    </>
  )
}

export default Footer
