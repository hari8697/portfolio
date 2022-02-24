import Image from "next/image"

import { H1 } from "../../styled/Text"
import Link from "next/link"
import { useResponsiveHelper } from "@/common/utils/"
import { useEffect, useState } from "react"

import { CloseBtnStyled, HeaderStyled, HeroImage } from "../styles/App.styled"
import { motion, useAnimation } from "framer-motion"

const Header = ({
  data,
  setIsExiting,
  pageTransitionComplete,
  setPageTransitionComplete,
}) => {
  const { title, heroImage } = data.fields

  const { isMobile, isTablet, isNotLaptop } = useResponsiveHelper()

  const [mobileVersion, setMobileVersion] = useState(false)
  const controls = useAnimation()

  // useEffect(() => {
  //   console.log("mobileVersion", mobileVersion)
  // }, [mobileVersion])

  useEffect(() => {
    if (isMobile || isTablet || isNotLaptop) {
      setMobileVersion(true)
    } else {
      setMobileVersion(false)
    }
    // console.log("mobileVersion", mobileVersion)
    // console.log("isMobile", isMobile)
    // console.log("isTablet", isTablet)
    // console.log("isNotLaptop", isNotLaptop)
  }, [isMobile, isTablet, isNotLaptop])

  const ContentVariants = {
    initial: {
      opacity: 0,
    },
    animationComplete: {
      opacity: 1,
    },
  }

  const heroImageAnimDelay = 0.25
  let HeroImageVariants = {
    initial: {
      y: "calc(26vh + 50px)",
      x: "-50%",
      width: "100%",
      height: "25vh",
    },
    animate: {
      y: 0,
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
  }

  useEffect(() => {
    const sequence = async () => {
      controls.start("animate")
      setTimeout(() => {
        controls.start("setHeight")
      }, heroImageAnimDelay * 1000)
    }
    sequence()
  }, [])

  return (
    <HeaderStyled className="nosel">
      {!mobileVersion && (
        <motion.div
          variants={ContentVariants}
          initial="initial"
          animate={pageTransitionComplete && "animationComplete"}
        >
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
        </motion.div>
      )}

      <HeroImage
        className="hero_image"
        variants={HeroImageVariants}
        initial="initial"
        animate={controls}
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
            layout={"fill"}
            // width={heroImage.fields.file.details.image.width}
            // height={heroImage.fields.file.details.image.height}
            priority={true}
            objectFit="cover"
          />
        </div>
      </HeroImage>

      <motion.div
        variants={ContentVariants}
        initial="initial"
        animate={pageTransitionComplete && "animationComplete"}
        className="title_wrap"
      >
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
      </motion.div>
    </HeaderStyled>
  )
}

export default Header
