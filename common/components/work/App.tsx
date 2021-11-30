import styled from "styled-components"
import { full_W_H } from "@/components/styled"
import Link from "next/link"
import { motion } from "framer-motion"
import Header from "./atoms/Header"

const App = ({ data }) => {
  const {
    id,
    title,
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

  const roleComps = role.map((el, idx) => {
    return (
      <li key={idx}>
        {el}
        {idx < role.length - 1 && ","}
      </li>
    )
  })

  const techComps = tech_used.map((el, idx) => {
    return (
      <li key={idx}>
        {el}
        {idx < tech_used.length - 1 && ","}
      </li>
    )
  })

  const linksComps = links.map((el, idx) => {
    return (
      <button key={idx}>
        {el.title}
        <img src={el.icon_src} alt="" />
      </button>
    )
  })

  const albumArr = Array.from({ length: album.count }, (_, i) => i + 1)
  const albumComp = albumArr.map((item, idx) => {
    return <img key={idx} src={`/work/${id}/${item}.png`} alt="" />
  })

  return (
    <Container
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header data={data} />
      <div className="presentation">
        <h5>Presentation</h5>
        <p>{presentation}</p>
      </div>
      <ul>
        <h5>Role</h5>
        {roleComps}
      </ul>
      <ul>
        <h5>Tech used</h5>
        {techComps}
      </ul>
      <div className="type">
        <h5>Type</h5>
        <p>{type}</p>
      </div>
      <div className="year">
        <h5>Year</h5>
        <p>{year}</p>
      </div>
      <div className="links">
        <h5>Links</h5>
        <p>{linksComps}</p>
      </div>
      <div className="album">{albumComp}</div>
      <div className="next">
        <h5>Next</h5>
        <Link href={`/work/${next.id}`}>
          <>
            <h3>{next.title}</h3>
            <img src="/work/icons/next_arrow.svg" alt="" />
          </>
        </Link>
      </div>
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
export default App
