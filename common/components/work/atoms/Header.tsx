import { HeaderStyled, HeroImage } from "../styles/App.styled"
import Image from "next/image"

import { H1 } from "../../styled/Text"
import Link from "next/link"
import { useResponsiveHelper } from "@/common/utils/"
import { useEffect } from "react"

const Header = ({ data, setIsExiting, heroImageProps }) => {
  const { title, heroImage } = data.fields

  const { isMobile, isTablet, isNotLaptop } = useResponsiveHelper()

  // useEffect(() => {
  //   console.log(isNotLaptop)
  // }, [isNotLaptop])

  return (
    <HeaderStyled>
      <HeroImage className="hero_image">
        <div className="img_wrap">
          <Image
            {...heroImageProps}
            src={`https:${heroImage.fields.file.url}`}
            alt=""
            layout={isMobile || isTablet || isNotLaptop ? "fill" : "responsive"}
            width={
              isMobile || isTablet || isNotLaptop ? null : heroImageProps.width
            }
            height={
              isMobile || isTablet || isNotLaptop ? null : heroImageProps.height
            }
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
