import { CloseBtnStyled, HeaderStyled, HeroImage } from "../styles/App.styled"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useAnimation } from "framer-motion"

import React from "react"
import { useWindowSize } from "@/common/utils"

const HeroImageMobile = ({
  setPageTransitionComplete,
  heroImage,
  heroImageAnimDelay,
}) => {
  const controls = useAnimation()
  const { width: vW, height: vH } = useWindowSize()
  const [animVars, setAnimVars] = useState({
    initial: {
      x: "-50%",
      width: "100%",
    },
    animate: {
      // y: 0,
      // width: "100vw",
      top: "calc(0px - 56px)",
      transition: {
        width: "100vw",
        // height: "auto",
        duration: 0.5,
        ease: "easeOut",
        delay: heroImageAnimDelay,
      },
    },
    setHeight: {
      width: "100vw",
      height: "30vh",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
    },
  })

  useEffect(() => {
    const sequence = () => {
      controls.start("animate")
      setTimeout(() => {
        controls.start("setHeight")
      }, heroImageAnimDelay * 1000)
    }
    sequence()
  }, [])

  useEffect(() => {
    setAnimVars({
      initial: {
        top: "26%",
        x: "-50%",
        width: "100%",
        height: vW < 425 ? "25vh" : vW < 768 ? "30vh" : "35vh",
      },
      ...animVars,
    })
  }, [vW, vH])

  // let HeroImageVariants = {
  //   initial: {
  //     top: "26%",
  //     x: "-50%",
  //     width: "100%",
  //     height: vW < 425 ? "25vh" : vW < 768 ? "30vh" : "35vh",
  //   },
  //   animate: {
  //     // y: 0,
  //     // width: "100vw",
  //     top: "calc(0px - 56px)",
  //     transition: {
  //       width: "100vw",
  //       // height: "auto",
  //       duration: 0.5,
  //       ease: "easeOut",
  //       delay: heroImageAnimDelay,
  //     },
  //   },
  //   setHeight: {
  //     width: "100vw",
  //     height: "30vh",
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut",
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //   },
  // }

  return (
    <HeroImage
      className="hero_image"
      variants={animVars}
      initial={"initial"}
      animate={controls}
      onAnimationComplete={() => {
        setPageTransitionComplete(true)
      }} // exit="exit"
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
          layout={"fill"} // width={null}
          // height={null}
          // width={heroImage.fields.file.details.image.width}
          // height={heroImage.fields.file.details.image.height}
          priority={true}
          objectFit="cover"
        />
      </div>
    </HeroImage>
  )
}

export default HeroImageMobile
