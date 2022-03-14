import { devicePX, useWindowSize } from "./"
import { useEffect, useState } from "react"

export const useResponsiveHelper = () => {
  const { width: vW, height: vH } = useWindowSize()

  const [responsiveCheck, setResponsiveCheck] = useState({
    isMobile: null,
    isTablet: null,
    isNotLaptop: null,
  })

  const mobileCheckFunc = (width, height) => {
    const maxWidthTrue = width < devicePX.tablet
    const aspectRatioTrue = width / height < 1

    return maxWidthTrue && aspectRatioTrue
  }

  const tabletCheckFunc = (width, height) => {
    const minWidthTrue = width >= devicePX.tablet
    const maxWidthTrue = width <= devicePX.laptop
    const isLandscape = width / height > 1
    if (width == devicePX.laptop) {
      return minWidthTrue && maxWidthTrue && !isLandscape
    } else return minWidthTrue && maxWidthTrue
  }

  const laptopCheckFunc = (width, height) => {
    const minWidthTrue = width >= devicePX.laptop
    const maxWidthTrue = width <= devicePX.laptopL
    const isLandscape = width / height > 1
    return minWidthTrue && maxWidthTrue && !isLandscape
  }

  // Run once initially
  useEffect(() => {
    if ((vW && vH) != null || undefined) {
      setResponsiveCheck({
        isMobile: mobileCheckFunc(vW, vH),
        isTablet: tabletCheckFunc(vW, vH),
        isNotLaptop: laptopCheckFunc(vW, vH),
      })
    }
  }, [])

  // Run everytime hook updates
  useEffect(() => {
    if ((vW && vH) != null || undefined) {
      setResponsiveCheck({
        isMobile: mobileCheckFunc(vW, vH),
        isTablet: tabletCheckFunc(vW, vH),
        isNotLaptop: laptopCheckFunc(vW, vH),
      })
    }
  }, [vW, vH])

  return responsiveCheck
}
