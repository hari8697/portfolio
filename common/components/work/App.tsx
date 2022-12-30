import styled from "styled-components"
import { full_W_H } from "@/components/styled"
import {
  Header,
  TextList,
  NextLink,
  ButtonList,
  AlbumList,
  SectionTitle,
} from "./atoms/index"
import Presentation from "./molecules/Presentation"
import { Container, SectionWrapper } from "./styles/App.styled"
import { useEffect, useState } from "react"

import SwiperContainer from "./molecules/SwiperContainer"
import image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

const App = ({
  data,
  albumImagesProps,
  //  heroImageProps
}) => {
  const fields: DataProp = data.fields
  const {
    id,
    presentation,
    role,
    techUsed,
    type,
    year,
    links,
    album,
    next,
  } = fields

  const ContainerVariants = {
    initial: {},
    animate: {
      opacity: 1,
      // transition: {
      //   delay: 0.05,
      // },
    },
    exit: {
      opacity: 0,
    },
  }

  const pageTransitionAnim = {
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

  // Using state for exit animations
  const [isExiting, setIsExiting] = useState(false)

  const [swiperOpen, setSwiperOpen] = useState(false)
  const [currSelectedSlide, setCurrSelectedSlide] = useState(1)

  const [pageTransitionComplete, setPageTransitionComplete] = useState(false)

  useEffect(() => {
    const htmlEl = document.querySelector("html")
    if (!pageTransitionComplete) {
      htmlEl.classList.add("no_scroll")
    } else {
      htmlEl.classList.remove("no_scroll")
    }
    return () => {}
  }, [pageTransitionComplete])

  return (
    <motion.div className="app_wrapper">
      <AnimatePresence>
        <SwiperContainer
          key={1}
          isOpen={swiperOpen}
          currSelectedSlide={currSelectedSlide}
          setSwiperOpen={setSwiperOpen}
          data={album}
        />
      </AnimatePresence>
      <AnimatePresence>
        {!isExiting && (
          <Container
            variants={ContainerVariants}
            animate={"animate"}
            exit={"exit"}
          >
            <Header
              data={data}
              setIsExiting={setIsExiting}
              pageTransitionComplete={pageTransitionComplete}
              setPageTransitionComplete={setPageTransitionComplete}
              // heroImageProps={heroImageProps}
            />
            <motion.div
              className="content_wrap"
              variants={pageTransitionAnim}
              initial="initial"
              animate={
                pageTransitionComplete ? "animationComplete" : "immediateHide"
              }
              exit="initial"
            >
              <Presentation data={presentation} />

              <SectionWrapper>
                <SectionTitle>Role</SectionTitle>
                <TextList data={role} />
              </SectionWrapper>

              <SectionWrapper>
                <SectionTitle>Tech used</SectionTitle>
                <TextList data={techUsed} />
              </SectionWrapper>

              <SectionWrapper className="type">
                <SectionTitle>Type</SectionTitle>
                <TextList data={type} />
              </SectionWrapper>

              <SectionWrapper className="year">
                <SectionTitle>Year</SectionTitle>
                <TextList data={year} />
              </SectionWrapper>

              <SectionWrapper className="links" lastBlock>
                <SectionTitle>Links</SectionTitle>
                <ButtonList data={links} />
              </SectionWrapper>
            </motion.div>

            <motion.div
              className="content_wrap large"
              variants={pageTransitionAnim}
              initial="initial"
              animate={
                pageTransitionComplete ? "animationComplete" : "immediateHide"
              }
              exit="initial"
            >
              <AlbumList
                setSwiperOpen={setSwiperOpen}
                setCurrSelectedSlide={setCurrSelectedSlide}
                data={album}
                albumImagesProps={albumImagesProps}
                id={id}
              />

              <NextLink
                isExiting={isExiting}
                setIsExiting={setIsExiting}
                next={next}
              />
            </motion.div>
          </Container>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

interface DataProp {
  id: string
  presentation: string
  role: string[]
  techUsed: string[]
  type: string
  year: string
  links: [
    {
      id: number
      title: string
      icon: boolean
      icon_src: string
    }
  ]
  album: {
    count: number
  }
  next: {
    title: string
    id: string
  }
}
export default App
