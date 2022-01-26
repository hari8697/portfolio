import { HeaderStyled, HeroImage } from "../styles/App.styled"
import Image from "next/image"

import { H1 } from "../../styled/Text"
import Link from "next/link"
import { useEffect } from "react"
// export const getStaticProps = async () => {

//   return {
//     props: {
//       imageProps: {
//         ...img,
//         blurDataURL: base64,
//       },
//     },
//   };
// };

const Header = ({ data, setIsExiting, imageProps }) => {
  const { title, heroImage } = data.fields

  // const getImageProps = async () => {
  //   const { base64, img } = await getPlaiceholder(
  //     `https:${heroImage.fields.file.url}`
  //   )
  // }

  useEffect(() => {
    // getImageProps()
  }, [])

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
            placeholder="blur"
            {...imageProps}
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
