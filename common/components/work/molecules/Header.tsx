import { H1 } from "../../styled/Text"
import Link from "next/link"
import { useResponsiveHelper } from "@/common/utils/"
import { useEffect, useState } from "react"

import { CloseBtnStyled, HeaderStyled, HeroImage } from "../styles/App.styled"
import { motion, useAnimation } from "framer-motion"
import { HeroImageMobile, HeroImageDesktop } from "../atoms"

const Header = ({
  data,
  setIsExiting,
  pageTransitionComplete,
  setPageTransitionComplete,
  // heroImageProps,
}) => {
  const { title, heroImage } = data.fields

  const { isMobile, isTablet, isNotLaptop } = useResponsiveHelper()

  const [mobileVersion, setMobileVersion] = useState(false)

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

  const ContentWrapVariants = {
    initial: {
      // height: "100vh",
    },
    animate: {
      height: "auto",
      paddingBottom: "0px",
    },
    exit: {
      height: "auto",
      paddingBottom: "0px",
    },
  }

  return (
    <HeaderStyled className="nosel" variants={ContentWrapVariants}>
      <div className="content_wrap">
        {!mobileVersion && (
          <motion.div
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

        {mobileVersion ? (
          <HeroImageMobile
            setPageTransitionComplete={setPageTransitionComplete}
            heroImage={heroImage}
          />
        ) : (
          <HeroImageDesktop
            setPageTransitionComplete={setPageTransitionComplete}
            heroImage={heroImage}
          />
        )}

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
      </div>
    </HeaderStyled>
  )
}

export default Header
