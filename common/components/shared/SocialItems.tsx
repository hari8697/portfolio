import { ToastContainer, toast } from "react-toastify"
import { device, useResponsiveHelper } from "@/common/utils/"
const SocialItems = ({}) => {
  const { isMobile, isTablet } = useResponsiveHelper()
  // const socialItemsArr = Array.from(Array(4).keys())
  const socialItemsArr =
    isTablet || isMobile
      ? [
          "mailto:deathspacedesign@gmail.com",
          "https://twitter.com/deathspace_",
          "https://www.instagram.com/deathspace.design/",
          "discord",
        ]
      : [
          "email",
          "https://twitter.com/deathspace_",
          "https://www.instagram.com/deathspace.design/",
          "discord",
        ]

  const handleClick = (item: string) => {
    console.log("clicked!", item)
    let message, textToBeCopied
    switch (item) {
      case "email":
        message = "Email address copied!"
        textToBeCopied = "deathspacedesign@gmail.com"
        copyToClipboard(textToBeCopied, message)
        break
      case "discord":
        message = "Discord username copied!"
        textToBeCopied = "DeathSpace#0538"
        copyToClipboard(textToBeCopied, message)
        break
      default:
        message = "Wow so easy!"
        break
    }
  }

  const copyToClipboard = (textToBeCopied, message) => {
    if (textToBeCopied != null || undefined) {
      navigator.clipboard.writeText(textToBeCopied).then(
        function () {
          // console.log("Async: Copying to clipboard was successful!")
          toast(message, {
            toastId: message,
          })
        },
        function (err) {
          console.error("Async: Could not copy text: ", err)
        }
      )
    }
  }

  // let iconSize = 18
  const socialItems = socialItemsArr.map((item, index) => {
    const attributes = () => {
      switch (item) {
        case "email":
        case "discord":
          return {
            onClick: () => handleClick(item),
          }
        default:
          return { href: item }
      }
    }

    return (
      <a
        {...attributes()}
        className="icon_wrapper"
        key={index}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social_icon">
          <img src={`/landing/social/${index + 1}.svg`}></img>
        </div>
      </a>
    )
  })
  return <div className="social_wrap ">{socialItems}</div>
}

export default SocialItems
