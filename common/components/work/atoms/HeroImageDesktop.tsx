import { CloseBtnStyled, HeaderStyled, HeroImage } from "../styles/App.styled"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useAnimation } from "framer-motion"

const HeroImageDesktop = ({
  setPageTransitionComplete,
  heroImage,
  heroImageAnimDelay,
}) => {
  const controls = useAnimation()
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const sequence = async () => {
      controls.start("animate")
    }
    sequence()
  }, [])

  let HeroImageVariants = {
    hidden: {
      opacity: 0,
    },
    initial: {
      top: "50vh",
      left: "50%",
      x: "-50%",
      y: "-50%",
      scale: 1,
      // opacity: 1,

      //   top: "50vh",
      //   top: "26%",
      //   x: "-50%",
      //   width: "100%",
      //   height: "25vh",
    },
    animate: {
      top: "50vh",
      left: "50%",
      x: "-50%",
      y: "-50%",
      scale: 0.9,

      //   top: "50vh",
      //   width: "104vh",
      //   height: "auto",

      //   top: "calc(0px - 56px)",
      transition: {
        // duration: 0.5,
        // ease: "easeOut",

        type: "spring",
        // stiffness: 50,
        // damping: 100,
        duration: 1,
        bounce: 0.1,
        delay: heroImageAnimDelay,
      },
    },
    exit: {
      opacity: 0,
    },
  }
  const onImageLoad = (item) => {
    // console.log("Image was loaded!")
    setImageLoaded(true)
  }
  return (
    <HeroImage
      className="hero_image"
      variants={HeroImageVariants}
      // style={{ opacity: imageLoaded ? 1 : 0 }}
      initial={"initial"}
      animate={"animate"}
      onAnimationComplete={() => {
        setPageTransitionComplete(true)
      }}
      // exit="exit"
    >
      <div className="img_wrap">
        {/* <img src="/landing/album/image1.png" alt="" /> */}
        {/* <img
          src={`https:${heroImage.fields.file.url}`}
          alt=""
          // style={{ opacity: "0" }}
        /> */}
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
        <Image
          src={`https:${heroImage.fields.file.url}`}
          alt=""
          layout={"responsive"} // width={null}
          // height={null}
          width={heroImage.fields.file.details.image.width}
          height={heroImage.fields.file.details.image.height}
          priority={true}
          // loading="eager"
          objectFit="cover"
          onLoadingComplete={onImageLoad}
        />
      </div>
    </HeroImage>
  )
}

export default HeroImageDesktop
