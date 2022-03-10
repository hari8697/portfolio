import { CloseBtnStyled, HeaderStyled, HeroImage } from "../styles/App.styled"
import Image from "next/image"
import { useEffect } from "react"
import { useAnimation } from "framer-motion"

const HeroImageDesktop = ({
  setPageTransitionComplete,
  heroImage,
  heroImageAnimDelay,
}) => {
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      controls.start("animate")
    }
    sequence()
  }, [])

  let HeroImageVariants = {
    initial: {
      top: "50vh",
      left: "50%",
      x: "-50%",
      y: "-50%",
      opacity: 0,
      //   top: "50vh",
      //   top: "26%",
      //   x: "-50%",
      //   width: "100%",
      //   height: "25vh",
    },
    animate: {
      x: "-50%",
      y: "-50%",
      scale: 0.9,
      opacity: 1,
      //   top: "50vh",
      //   width: "104vh",
      //   height: "auto",

      //   top: "calc(0px - 56px)",
      transition: {
        // width: "100vw",
        // height: "auto",
        duration: 0.5,
        ease: "easeOut",
        delay: heroImageAnimDelay,
      },
    },
    exit: {
      opacity: 0,
    },
  }
  function onStart() {
    // setTimeout(() => {
    //   setPageTransitionComplete(true)
    // }, 200)
    // console.log("Animation started")
  }
  return (
    <HeroImage
      className="hero_image"
      variants={HeroImageVariants}
      initial="initial"
      animate={controls}
      onAnimationStart={onStart}
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
          style={{ opacity: "0" }}
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
          objectFit="cover"
        />
      </div>
    </HeroImage>
  )
}

export default HeroImageDesktop
