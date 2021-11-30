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
import { Container, RoleStyled } from "./styles/App.styled"
import { H5Link } from "../styled/Text"

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

      <RoleStyled>
        <H5Link capsON highlighted>
          Role
        </H5Link>
        <TextList data={role} />
      </RoleStyled>

      <ul>
        <H5Link>Tech used</H5Link>
        <TextList data={tech_used} />
      </ul>
      <div className="type">
        <H5Link>Type</H5Link>
        <TextList data={type} />
      </div>
      <div className="year">
        <H5Link>Year</H5Link>
        <TextList data={year} />
      </div>
      <div className="links">
        <H5Link>Links</H5Link>
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
