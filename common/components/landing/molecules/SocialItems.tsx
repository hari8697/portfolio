import Image from "next/image"

const SocialItems = () => {
  const socialItemsArr = Array.from(Array(4).keys())
  // let iconSize = 18
  const socialItems = socialItemsArr.map((item) => {
    return (
      <div className="icon_wrapper" key={item}>
        <div className="social_icon">
          <Image
            src={`/landing/social/${item + 1}.svg`}
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
      </div>
    )
  })
  return <div className="social_wrap ">{socialItems}</div>
}

export default SocialItems
