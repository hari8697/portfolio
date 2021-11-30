import { ButtonListStyled } from "../styles/App.styled"
import ButtonLink from "./ButtonLink"
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

const ButtonList = ({ data }: Props) => {
  let comps = data.map((el, idx) => {
    return (
      <ButtonLink key={idx} withIcon={el.icon}>
        {el.title}

        {el.icon && (
          <div className="img_wrap">
            <img src={el.icon_src} alt="" />
          </div>
        )}
      </ButtonLink>
    )
  })

  return <ButtonListStyled>{comps}</ButtonListStyled>
}
export default ButtonList
