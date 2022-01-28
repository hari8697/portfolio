import { HeaderStyled, HeroImage } from "../styles/App.styled"
import Image from "next/image"

import { H1 } from "../../styled/Text"
import Link from "next/link"
import { useResponsiveHelper } from "@/common/utils/"

const Header = ({ data, setIsExiting, heroImageProps }) => {
  const { title, heroImage } = data.fields

  const { isMobile, isTablet } = useResponsiveHelper()
  return (
    <HeaderStyled>
      <HeroImage className="hero_image">
        <div className="img_wrap">
          <Image
            {...heroImageProps}
            src={`https:${heroImage.fields.file.url}`}
            alt=""
            layout={isMobile || isTablet ? "fill" : "responsive"}
            priority={true}
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </HeroImage>
      <div className="title_wrap">
        <H1 className="title">{title}</H1>
        <Link href="/">
          <img
            className="close_btn"
            src="/about/close_btn.svg"
            alt=""
            onClick={() => {
              setIsExiting(true)
            }}
          />
        </Link>
      </div>
    </HeaderStyled>
  )
}

export default Header
