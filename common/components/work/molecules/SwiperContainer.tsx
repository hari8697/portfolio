import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, EffectFade, Zoom } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "swiper/css/zoom"

import { CloseBtnStyled, SwiperContainerStyled } from "../styles/App.styled"
import { useRef } from "react"
import Image from "next/image"

const SwiperContainer = ({ data, albumImagesProps, setSwiperOpen, isOpen }) => {
  let comps = data.map((item, idx) => {
    // const static_import_url = require(`https:${item.fields.file.url}`)
    const { width, height } = item.fields.file.details.image
    return (
      <SwiperSlide className="img_wrapper" key={idx} zoom={true}>
        <img
          key={idx}
          className="album_image"
          src={`https:${item.fields.file.url}`}
          width={width}
          height={height}
          alt=""
        />
      </SwiperSlide>
    )
  })

  return (
    <SwiperContainerStyled isOpen={isOpen}>
      <CloseBtnStyled
        onClick={() => {
          setSwiperOpen(false)
        }}
      >
        <img className="close_btn" src="/about/close_btn.svg" alt="" />
      </CloseBtnStyled>
      <Swiper
        modules={[Navigation, Pagination, Zoom]}
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
        zoom={true}
      >
        {comps}
      </Swiper>
    </SwiperContainerStyled>
  )
}

export default SwiperContainer
