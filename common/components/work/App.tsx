import styled from "styled-components"
import { full_W_H } from "@/components/styled"
import { motion } from "framer-motion"
// import Header from "./atoms/index"
import {
  Header,
  TextList,
  NextLink,
  ButtonList,
  AlbumList,
} from "./atoms/index"
import Presentation from "./molecules/Presentation"

const App = ({ data }) => {
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
  }: DataProp = data

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

const Container = styled(motion.div)`
  ${full_W_H}
  min-height: 100vh;

  .hero_image {
    width: 100%;
  }

  .album {
    img {
      width: 90%;
    }
  }
`

interface DataProp {
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
export default App
