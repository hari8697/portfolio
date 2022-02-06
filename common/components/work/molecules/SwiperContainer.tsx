import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, EffectFade, Zoom } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "swiper/css/zoom"

import { CloseBtnStyled, SwiperContainerStyled } from "../styles/App.styled"

import { useEffect, useState } from "react"

const ContainerVariants = {
  initial: {
    opacity: 0,
    "pointer-events": "none",
  },
  animate: {
    opacity: 1,
    "pointer-events": "all",

    transition: {
      ease: "easeOut",
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    "pointer-events": "none",
  },
}

const SwiperContainer = ({
  data,
  setSwiperOpen,
  isOpen,
  currSelectedSlide,
}) => {
  const [swiperObj, setSwiperObj] = useState(null)
  let comps = data.map((item, idx) => {
    // const static_import_url = require(`https:${item.fields.file.url}`)
    const { width, height } = item.fields.file.details.image
    return (
      <SwiperSlide className="img_wrapper nosel" key={idx} zoom={true}>
        <img
          key={idx}
          className="swiper_image"
          src={`https:${item.fields.file.url}`}
          width={width}
          height={height}
          alt=""
        />
      </SwiperSlide>
    )
  })

  const closeSwiper = () => {
    console.log("Close")
    setSwiperOpen(false)
  }

  useEffect(() => {
    if (swiperObj) {
      // swiperObj.slideToLoop(currSelectedSlide, 500, true)
      swiperObj.activeIndex = currSelectedSlide
      swiperObj.update()
      swiperObj.pagination.update()
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeSwiper()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  return (
    <SwiperContainerStyled
      isOpen={isOpen}
      variants={ContainerVariants}
      initial="initial"
      animate={isOpen ? "animate" : "exit"}
    >
      <CloseBtnStyled onClick={closeSwiper} className="nosel">
        <img className="close_btn" src="/about/close_btn.svg" alt="" />
      </CloseBtnStyled>
      <Swiper
        modules={[Navigation, Pagination, Zoom]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          // dynamicBullets: true,
        }}
        onSwiper={(swiper) => {
          console.log(swiper)
          setSwiperObj(swiper)
        }}
        speed={250}
        grabCursor={true}
        onSlideChange={(swiper) => {
          console.log("slide change")
          console.log(swiper.activeIndex)
        }}
        loop={true}
        zoom={true}
      >
        {comps}
      </Swiper>
    </SwiperContainerStyled>
  )
}

export default SwiperContainer
