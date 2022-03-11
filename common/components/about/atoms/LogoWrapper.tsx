import { useEffect, useRef, useState } from "react"
import { LogoContainer, LogoGrid, Logo_ImgWrap } from "../styles/About.style"

const LogoWrapper = () => {
  const slicedLettersNos = Array.from({ length: 10 }, (_, i) => i + 1)

  const slicedLetters = slicedLettersNos.map((item, idx) => {
    return <img key={idx} src={`/about/sliced_logo/${item}.svg`} alt="" />
  })

  const imgWrap = useRef(null)
  const [imgWrapDimensions, setImgWrapDimensions] = useState(null)
  useEffect(() => {
    checkDimensions()

    window.addEventListener("resize", checkDimensions)
    return () => {
      window.removeEventListener("resize", checkDimensions)
    }
  }, [])

  useEffect(() => {
    checkDimensions()
  }, [imgWrap])

  const checkDimensions = () => {
    setImgWrapDimensions({
      x: imgWrap.current?.offsetWidth,
      y: imgWrap.current?.offsetHeight,
    })
  }
  const calcLogoHeight = (width) => {
    const ratio = 5.411
    return width / ratio
  }

  return (
    <div>
      <LogoGrid>
        <LogoContainer>
          <Logo_ImgWrap ref={imgWrap}>
            {/* <img src="/common/DeathSpace_Logo.svg"></img> */}
            <div
              className="letters_wrap"
              style={{ height: calcLogoHeight(imgWrapDimensions?.x) }}
            >
              {slicedLetters}
            </div>
          </Logo_ImgWrap>
        </LogoContainer>
      </LogoGrid>
    </div>
  )
}

export default LogoWrapper
