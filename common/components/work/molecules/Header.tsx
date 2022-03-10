import { HeaderMobile } from "./HeaderMobile"
import { useResponsiveHelper } from "@/common/utils/"
import { useEffect, useState } from "react"
import { HeaderDesktop } from "./HeaderDesktop"

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

  useEffect(() => {
    setPageTransitionComplete(false)
    console.log("mobileVersion", mobileVersion)
  }, [mobileVersion])

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

  const ContentVariantsMobile = {
    immediateHide: {
      opacity: 0,
      transition: {
        duration: 0,
        ease: "linear",
      },
    },
    initial: {
      opacity: 0,
    },
    animationComplete: {
      opacity: 1,
    },
  }
  const ContentVariantsDesktop = {
    immediateHide: {
      opacity: 0,
      transition: {
        duration: 0,
        ease: "linear",
      },
    },
    initial: {
      x: "2%",
      opacity: 0,
    },
    animationComplete: {
      x: "5%",
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      {mobileVersion ? (
        <HeaderMobile
          mobileVersion={mobileVersion}
          pageTransitionComplete={pageTransitionComplete}
          setIsExiting={setIsExiting}
          setPageTransitionComplete={setPageTransitionComplete}
          heroImage={heroImage}
          ContentVariants={ContentVariantsMobile}
          title={title}
        />
      ) : (
        <HeaderDesktop
          mobileVersion={mobileVersion}
          pageTransitionComplete={pageTransitionComplete}
          setIsExiting={setIsExiting}
          setPageTransitionComplete={setPageTransitionComplete}
          heroImage={heroImage}
          ContentVariants={ContentVariantsDesktop}
          title={title}
        />
      )}
    </>
  )
}

export default Header
