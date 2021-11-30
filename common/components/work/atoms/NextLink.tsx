import Link from "next/link"
import { NextLinkStyled } from "../styles/App.styled"
import SectionTitle from "./SectionTitle"
import { H3 } from "../../styled/Text"

interface Props {
  next: {
    title: string
    id: string
  }
}

const NextLink = ({ next }: Props) => {
  return (
    <NextLinkStyled className="next">
      <SectionTitle>Next</SectionTitle>
      <Link href={`/work/${next.id}`}>
        <div className="title_wrap">
          <H3>{next.title}</H3>
          <img src="/work/icons/next_arrow.svg" alt="" />
        </div>
      </Link>
    </NextLinkStyled>
  )
}

export default NextLink
