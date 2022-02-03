import { ButtonListStyled } from "../styles/App.styled"
import ButtonLink from "./ButtonLink"

import { Para } from "@/components/styled"
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
  let buttonsArr = data.fields.buttons
  let urlArr = data.fields.urlArray

  let comps = buttonsArr.map((el, idx) => {
    const btn_title = el.fields.title
    const hasIcon = el.fields.icon
    let iconSrc
    if (hasIcon) iconSrc = "https:" + el.fields.iconImage.fields.file.url
    return (
      <a href={urlArr[idx] && urlArr[idx]} key={idx}>
        <ButtonLink withIcon={hasIcon}>
          <Para>{btn_title}</Para>
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
