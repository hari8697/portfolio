import { useResponsiveHelper } from "@/common/utils/"
import { useEffect, useState } from "react"

import { CloseBtnStyled, HeaderStyled } from "../styles/App.styled"
import { motion } from "framer-motion"
import { HeroImageMobile, HeroImageDesktop } from "../atoms"
import Link from "next/link"
import { H1 } from "@/components/styled/index"

export function HeaderMobile({
  mobileVersion,
  pageTransitionComplete,
  setIsExiting,
  setPageTransitionComplete,
  heroImage,
  ContentVariants,
  title,
}) {
  const heroImageAnimDelay = 0.25

  const ContentWrapVariantsMobile = {
    initial: {
      height: "100vh",
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
    <HeaderStyled className="nosel" variants={ContentWrapVariantsMobile}>
      <div className="content_wrap">
        <HeroImageMobile
          setPageTransitionComplete={setPageTransitionComplete}
          heroImage={heroImage}
          heroImageAnimDelay={heroImageAnimDelay}
        />

        <motion.div
          variants={ContentVariants}
          initial="initial"
          animate={
            pageTransitionComplete ? "animationComplete" : "immediateHide"
          }
          className="title_wrap"
        >
          <H1 className="title">{title}</H1>

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
        </motion.div>
      </div>
    </HeaderStyled>
  )
}
