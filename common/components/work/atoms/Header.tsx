import { HeaderStyled, HeroImage } from "../styles/App.styled"
import Image from "next/image"

import { H1 } from "../../styled/Text"
import Link from "next/link"

const Header = ({ data }) => {
  const { title, heroImage } = data.fields

  return (
    <HeaderStyled>
      <HeroImage className="hero_image">
        <div className="img_wrap">
          <Image
            src={`https:${heroImage.fields.file.url}`}
            alt=""
            layout="fill"
            priority={true}
            objectFit="cover"
          />
        </div>
      </HeroImage>
      <div className="title_wrap">
        <H1 className="title">{title}</H1>
        <Link href="/">
          <img className="close_btn" src="/about/close_btn.svg" alt="" />
        </Link>
      </div>
    </HeaderStyled>
  )
}

export default Header
