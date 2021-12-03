import styled from "styled-components"
import { full_W_H } from "@/components/styled"
import {
  Header,
  TextList,
  NextLink,
  ButtonList,
  AlbumList,
  SectionTitle,
} from "./atoms/index"
import Presentation from "./molecules/Presentation"
import { Container, SectionWrapper } from "./styles/App.styled"
import { H5Link } from "../styled/Text"

const App = ({ data }) => {
  const fields: DataProp = data.fields
  const {
    id,
    presentation,
    role,
    techUsed,
    type,
    year,
    links,
    album,
    next,
  } = fields

  const ContainerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  return (
    <Container
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header data={data} />
      <Presentation data={presentation} />

      <SectionWrapper>
        <H5Link capsON highlighted>
          Role
        </H5Link>
        <TextList data={role} />
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Tech used</SectionTitle>
        <TextList data={techUsed} />
      </SectionWrapper>

      <SectionWrapper className="type">
        <SectionTitle>Type</SectionTitle>
        <TextList data={type} />
      </SectionWrapper>

      <SectionWrapper className="year">
        <SectionTitle>Year</SectionTitle>
        <TextList data={year} />
      </SectionWrapper>

      <SectionWrapper className="links" lastBlock>
        <SectionTitle>Links</SectionTitle>
        <ButtonList data={links} />
      </SectionWrapper>

      <AlbumList data={album} id={id} />

      <NextLink next={next} />
    </Container>
  )
}

interface DataProp {
  id: string
  presentation: string
  role: string[]
  techUsed: string[]
  type: string
  year: string
  links: [
    {
      id: number
      title: string
      icon: boolean
      icon_src: string
    }
  ]
  album: {
    count: number
  }
  next: {
    title: string
    id: string
  }
}
export default App
