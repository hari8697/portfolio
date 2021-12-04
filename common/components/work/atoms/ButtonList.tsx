import { ButtonListStyled } from "../styles/App.styled"
import ButtonLink from "./ButtonLink"

import { ParaLarge } from "@/components/styled"
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

  let comps = buttonsArr.map((el, idx) => {
    const btn_title = el.fields.title
    const hasIcon = el.fields.icon
    let iconSrc
    if (hasIcon) iconSrc = "https:" + el.fields.iconImage.fields.file.url
    return (
      <ButtonLink key={idx} withIcon={hasIcon}>
        <ParaLarge>{btn_title}</ParaLarge>

        {hasIcon && (
          <div className="img_wrap">
            <img src={iconSrc} alt="" />
          </div>
        )}
      </ButtonLink>
    )
  })

  return <ButtonListStyled>{comps}</ButtonListStyled>
}
export default ButtonList
