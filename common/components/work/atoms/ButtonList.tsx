import { ButtonListStyled } from "../styles/App.styled"
import ButtonLink from "./ButtonLink"

import { Para, ParaLarge } from "@/components/styled"
import { useResponsiveHelper } from "@/common/utils"
import { useEffect, useState } from "react"
interface Props {
  data: [
    {
      id: number
      title: string
      icon: boolean
      icon_src: string
    }
  ]
}

const ButtonList = ({ data }) => {
  const { isMobile, isTablet, isNotLaptop } = useResponsiveHelper()
  const [mobileVersion, setMobileVersion] = useState(true)
  useEffect(() => {
    if (isMobile || isTablet || isNotLaptop) {
      setMobileVersion(true)
    } else if ((isMobile || isTablet || isNotLaptop) == null || undefined) {
      setMobileVersion(true)
    } else {
      setMobileVersion(false)
    }
  }, [isMobile, isTablet, isNotLaptop])

  let buttonsArr = data.fields.buttons
  let urlArr = data.fields.urlArray
  let alternateTitleArr = data.fields.alternateTitle

  let comps = buttonsArr.map((el, idx) => {
    const btn_title =
      alternateTitleArr != null || undefined
        ? alternateTitleArr[idx] != null || undefined
          ? alternateTitleArr[idx]
          : el.fields.title
        : el.fields.title
    const hasIcon = el.fields.icon
    let iconSrc
    if (hasIcon) iconSrc = "https:" + el.fields.iconImage.fields.file.url
    return (
      <a
        href={urlArr[idx] && urlArr[idx]}
        key={idx}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonLink withIcon={hasIcon}>
          {mobileVersion ? (
            <ParaLarge>{btn_title}</ParaLarge>
          ) : (
            <Para>{btn_title}</Para>
          )}
          {hasIcon && (
            <div className="img_wrap">
              <img src={iconSrc} alt="" />
            </div>
          )}
        </ButtonLink>
      </a>
    )
  })

  return <ButtonListStyled>{comps}</ButtonListStyled>
}
export default ButtonList
