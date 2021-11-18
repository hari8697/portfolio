import { ToastContainer, toast } from "react-toastify"
const SocialItems = ({ notify }) => {
  // const socialItemsArr = Array.from(Array(4).keys())
  const socialItemsArr = [
    "email",
    "https://twitter.com/deathspace_",
    "https://www.instagram.com/deathspace.design/",
    "discord",
  ]

  const toastNotification = (item: string) => {
    console.log("clicked!", item)
    toast("🦄 Wow so easy!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  // let iconSize = 18
  const socialItems = socialItemsArr.map((item, index) => {
    const attributes = () => {
      switch (item) {
        case "email":
        case "discord":
          return {
            onClick: () => toastNotification(item),
          }
        default:
          return { href: item }
      }
    }

    return (
      <a {...attributes()} className="icon_wrapper" key={index}>
        <div className="social_icon">
          <img src={`/landing/social/${index + 1}.svg`}></img>
        </div>
      </a>
    )
  })
  return <div className="social_wrap ">{socialItems}</div>
}

export default SocialItems
