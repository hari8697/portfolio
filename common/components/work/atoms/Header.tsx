import styled from "styled-components"
const HeaderComp = styled.div`
  /* height: 100vh; */

  .title_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .close_btn {
    /* opacity: 0; */
  }
`

const Header = ({ data }) => {
  return (
    <HeaderComp>
      <img src={data.hero_image} alt="" className="hero_image" />
      <div className="title_wrap">
        <h1>{data.title}</h1>
        <img className="close_btn" src="/about/close_btn.svg" alt="" />
      </div>
    </HeaderComp>
  )
}

export default Header
