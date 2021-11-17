const SocialItems = () => {
  const socialItemsArr = Array.from(Array(4).keys())
  // let iconSize = 18
  const socialItems = socialItemsArr.map((item) => {
    return (
      <div className="icon_wrapper" key={item}>
        <div className="social_icon">
          <img src={`/landing/social/${item + 1}.svg`}></img>
        </div>
      </div>
    )
  })
  return <div className="social_wrap ">{socialItems}</div>
}

export default SocialItems
