const SocialItems = () => {
  // const socialItemsArr = Array.from(Array(4).keys())
  const socialItemsArr = [
    "mailto:deathspacedesign@gmail.com",
    "https://twitter.com/deathspace_",
    "https://www.instagram.com/deathspace.design/",
    "https://discord.gg/AWuYKDnQ",
  ]
  // let iconSize = 18
  const socialItems = socialItemsArr.map((item, index) => {
    return (
      <div className="icon_wrapper" key={index}>
        <a className="social_icon" href={item}>
          <img src={`/landing/social/${index + 1}.svg`}></img>
        </a>
      </div>
    )
  })
  return <div className="social_wrap ">{socialItems}</div>
}

export default SocialItems
