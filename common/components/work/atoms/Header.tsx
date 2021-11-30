import { HeaderStyled, HeroImage } from "../styles/App.styled"

import { H1 } from "../../styled/Text"

const Header = ({ data }) => {
  const { title, hero_image } = data
  return (
    <HeaderStyled>
      <HeroImage className="hero_image">
        <img src={hero_image} alt="" />
      </HeroImage>
      <div className="title_wrap">
        <H1 className="title">{title}</H1>
        <img className="close_btn" src="/about/close_btn.svg" alt="" />
      </div>
    </HeaderStyled>
  )
}

export default Header
