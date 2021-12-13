import { PresentationStyled } from "../styles/App.styled"
import { H5Link, ParaLarge } from "@/components/styled"

interface Props {
  data: string
}

const Presentation = ({ data }: Props) => {
  return (
    <PresentationStyled className="presentation">
      <H5Link highlighted capsON>
        Presentation
      </H5Link>
      <ParaLarge>{data}</ParaLarge>
    </PresentationStyled>
  )
}

export default Presentation
