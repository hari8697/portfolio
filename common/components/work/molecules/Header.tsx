import { HeaderMobile } from "./HeaderMobile"
import { useResponsiveHelper, useWindowSize } from "@/common/utils/"
import { useEffect, useState } from "react"
import { HeaderDesktop } from "./HeaderDesktop"
import { AnimatePresence } from "framer-motion"

const Header = ({
  data,
  isExiting,
  setIsExiting,
  pageTransitionComplete,
  setPageTransitionComplete,
  // heroImageProps,
}) => {
  const { title, heroImage } = data.fields

  const { isMobile, isTablet, isNotLaptop } = useResponsiveHelper()

  const { width: vW, height: vH } = useWindowSize()

  const [mobileVersion, setMobileVersion] = useState(true)

  useEffect(() => {
    setPageTransitionComplete(false)
    // console.log("mobileVersion", mobileVersion)
  }, [mobileVersion])

  useEffect(() => {
    if (isMobile || isTablet || isNotLaptop) {
      setMobileVersion(true)
    } else if ((isMobile || isTablet || isNotLaptop) == null || undefined) {
      setMobileVersion(true)
    } else {
      setMobileVersion(false)
    }
    // console.log("mobileVersion", mobileVersion)

    // console.log("vW", vW)
    // console.log("vH", vH)
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

  return (
    <AnimatePresence>
      {mobileVersion ? (
        <HeaderMobile
          pageTransitionComplete={pageTransitionComplete}
          setIsExiting={setIsExiting}
          setPageTransitionComplete={setPageTransitionComplete}
          heroImage={heroImage}
          ContentVariants={ContentVariantsMobile}
          title={title}
          key={1}
        />
      ) : (
        <HeaderDesktop
          isExiting={isExiting}
          pageTransitionComplete={pageTransitionComplete}
          setIsExiting={setIsExiting}
          setPageTransitionComplete={setPageTransitionComplete}
          heroImage={heroImage}
          title={title}
          key={2}
        />
      )}
    </AnimatePresence>
  )
}

export default Header
