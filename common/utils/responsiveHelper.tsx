import { devicePX, useWindowSize } from "./"
import { useEffect, useState } from "react"

export const useResponsiveHelper = () => {
  const { width: vW, height: vH } = useWindowSize()

  const [responsiveCheck, setResponsiveCheck] = useState({
    isMobile: null,
    isTablet: null,
  })

  const mobileCheckFunc = (width, height) => {
    const maxWidthTrue = width < devicePX.tablet
    const aspectRatioTrue = width / height < 1

    return maxWidthTrue && aspectRatioTrue
  }

  const tabletCheckFunc = (width, height) => {
    const minWidthTrue = width >= devicePX.tablet
    const maxWidthTrue = width < devicePX.laptop

    return minWidthTrue && maxWidthTrue
  }

  // Run once initially
  useEffect(() => {
    setResponsiveCheck({
      isMobile: mobileCheckFunc(vW, vH),
      isTablet: tabletCheckFunc(vW, vH),
    })
  }, [])

  // Run everytime hook updates
  useEffect(() => {
    setResponsiveCheck({
      isMobile: mobileCheckFunc(vW, vH),
      isTablet: tabletCheckFunc(vW, vH),
    })
  }, [vW, vH])

  return responsiveCheck
}
