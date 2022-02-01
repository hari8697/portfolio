// ! Unused component

import Link from "next/link"
import { useEffect, useState } from "react"
import { useResponsiveHelper } from "@/common/utils/"
import { CloseBtnStyled, NavbarStyled } from "./styles/App.styled"
function Navbar() {
  const { isMobile, isTablet, isNotLaptop } = useResponsiveHelper()
  const [mobileVersion, setMobileVersion] = useState(true)
  useEffect(() => {
    if (isMobile || isTablet || isNotLaptop) {
      setMobileVersion(true)
    } else {
      setMobileVersion(false)
    }
  }, [isMobile, isTablet, isNotLaptop])

  return (
    <NavbarStyled>
      {!mobileVersion && (
        <CloseBtnStyled>
          <Link href="/">
            <img
              className="close_btn desktop"
              src="/about/close_btn.svg"
              alt=""
              onClick={() => {
                // setIsExiting(true)
              }}
            />
          </Link>
        </CloseBtnStyled>
      )}
    </NavbarStyled>
  )
}

export default Navbar
