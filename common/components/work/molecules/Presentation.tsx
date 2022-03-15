import { PresentationStyled } from "../styles/App.styled"
import { H5Link, ParaLarge } from "@/components/styled"
import ReactMarkdown from "react-markdown"

interface Props {
  data: string
}

const Presentation = ({ data }: Props) => {
  return (
    <PresentationStyled className="presentation">
      <H5Link highlighted capsON>
        Presentation
      </H5Link>

      <ReactMarkdown
        linkTarget={"_blank"}
        children={data}
        components={{
          // Use ParaLarge instead of p's
          // Use a component instead of p's
          p: ({ node, ...props }) => <ParaLarge {...props} />,
        }}
      />
    </PresentationStyled>
  )
}

export default Presentation
