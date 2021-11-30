import styled from "styled-components"
import { full_W_H } from "@/components/styled"
import {
  Header,
  TextList,
  NextLink,
  ButtonList,
  AlbumList,
} from "./atoms/index"
import Presentation from "./molecules/Presentation"
import { Container } from "./styles/App.styled"

const App = ({ data }: DataProp) => {
  const {
    id,
    presentation,
    role,
    tech_used,
    type,
    year,
    links,
    album,
    next,
  } = data

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

      <ul>
        <h5>Role</h5>
        <TextList data={role} />
      </ul>
      <ul>
        <h5>Tech used</h5>
        <TextList data={tech_used} />
      </ul>
      <div className="type">
        <h5>Type</h5>
        <TextList data={type} />
      </div>
      <div className="year">
        <h5>Year</h5>
        <TextList data={year} />
      </div>
      <div className="links">
        <h5>Links</h5>
        <ButtonList data={links} />
      </div>
      <AlbumList data={album} id={id} />
      <NextLink next={next} />
    </Container>
  )
}

interface DataProp {
  data: {
    id: string
    presentation: string
    role: string[]
    tech_used: string[]
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
}
export default App
