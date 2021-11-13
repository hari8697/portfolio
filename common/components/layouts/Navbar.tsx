import Link from "next/link"
import styled from "styled-components"
import { useRouter } from "next/router"

function Navbar() {
  const router = useRouter()
  return (
    <NavBar>
      <ContentWrap>
        <LinkWrap className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </LinkWrap>
      </ContentWrap>
    </NavBar>
  )
}

const LinkWrap = styled.div`
  padding: 0 2vw;
  color: #b9c2c7;

  &.active {
    color: #7f878a;
  }

  a {
    &:hover,
    &:focus {
      color: #7f878a;
    }
  }
`
const NavBar = styled.div`
  width: 100%;
  max-width: 100vw;
  text-align: center;
  padding: 1.5rem 10px;

  p {
    padding: 0 1rem;
    margin-bottom: 8px;
    color: #b9c2c7;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    p {
      margin-bottom: 0;
    }
    ${LinkWrap} {
      margin: 0 8px;
    }
  }
`

const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default Navbar
