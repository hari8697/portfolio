import Image from "next/image"

import { H1 } from "../../styled/Text"
import Link from "next/link"
import { useResponsiveHelper } from "@/common/utils/"
import { useEffect, useState } from "react"

import { CloseBtnStyled, HeaderStyled, HeroImage } from "../styles/App.styled"

const Header = ({ data, setIsExiting }) => {
  const { title, heroImage } = data.fields

  const { isMobile, isTablet, isNotLaptop } = useResponsiveHelper()

  const [mobileVersion, setMobileVersion] = useState(true)

  // useEffect(() => {
  //   console.log(isNotLaptop)
  // }, [isNotLaptop])

  useEffect(() => {
    if (isMobile || isTablet || isNotLaptop) {
      setMobileVersion(true)
    } else {
      setMobileVersion(false)
    }
  }, [isMobile, isTablet, isNotLaptop])

  return (
    <HeaderStyled className="nosel">
      {!mobileVersion && (
        <Link href="/">
          <CloseBtnStyled>
            <img
              className="close_btn desktop"
              src="/about/close_btn.svg"
              alt=""
              onClick={() => {
                setIsExiting(true)
              }}
            />
          </CloseBtnStyled>
        </Link>
      )}
      <HeroImage className="hero_image">
        <div className="img_wrap">
          <img src={`https:${heroImage.fields.file.url}`} alt="" />
          {/* <Image
            src={`https:${heroImage.fields.file.url}`}
            alt=""
            layout={mobileVersion ? "fill" : "responsive"}
            width={
              mobileVersion ? null : heroImage.fields.file.details.image.width
            }
            height={
              mobileVersion ? null : heroImage.fields.file.details.image.height
            }
            priority={true}
            objectFit="cover"
          /> */}
        </div>
      </HeroImage>
      <div className="title_wrap">
        <H1 className="title">{title}</H1>
        {mobileVersion && (
          <Link href="/">
            <CloseBtnStyled>
              <img
                className="close_btn mobile"
                src="/about/close_btn.svg"
                alt=""
                onClick={() => {
                  setIsExiting(true)
                }}
              />
            </CloseBtnStyled>
          </Link>
        )}
      </div>
    </HeaderStyled>
  )
}

export default Header
