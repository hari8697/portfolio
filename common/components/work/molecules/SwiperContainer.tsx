import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, EffectFade } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

import { CloseBtnStyled, SwiperContainerStyled } from "../styles/App.styled"
import { useRef } from "react"

const SwiperContainer = () => {
  return (
    <SwiperContainerStyled>
      <CloseBtnStyled>
        <img className="close_btn" src="/about/close_btn.svg" alt="" />
      </CloseBtnStyled>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          console.log(swiper)
        }}
        speed={500}
        grabCursor={true}
        onSlideChange={() => console.log("slide change")}
        loop={true}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </SwiperContainerStyled>
  )
}

export default SwiperContainer
