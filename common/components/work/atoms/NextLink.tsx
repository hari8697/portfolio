import Link from "next/link"
import { NextLinkStyled } from "../styles/App.styled"
import SectionTitle from "./SectionTitle"
import { H3 } from "../../styled/Text"
import { useRouter } from "next/router"

interface Props {
  next: {
    title: string
    id: string
  }
}

const NextLink = ({ next, setIsExiting }) => {
  const router = useRouter()
  if (next != null || undefined) {
    return (
      <NextLinkStyled className="next">
        <SectionTitle>Next</SectionTitle>
        <div
          className="title_wrap"
          onClick={(e) => {
            e.preventDefault()
            setIsExiting(true)
            const goToUrl = `/work/${next.fields.id}`
            router.push(goToUrl)
          }}
        >
          <H3>{next.fields.title}</H3>
          <img src="/work/icons/next_arrow.svg" alt="" />
        </div>
      </NextLinkStyled>
    )
  } else return <NextLinkStyled className="next"></NextLinkStyled>
}

export default NextLink
