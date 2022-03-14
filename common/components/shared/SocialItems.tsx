import { toast } from "react-toastify"
import { useResponsiveHelper } from "@/common/utils/"
import { motion } from "framer-motion"

const ContainerVariants = {
  title_exit: {
    opacity: 0,
  },
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
}

const SocialItems = ({ isExiting = false }) => {
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
        copyToClipboard(textToBeCopied, message, item)
        break
      case "discord":
        message = "Discord username copied!"
        textToBeCopied = "DeathSpace#0538"
        copyToClipboard(textToBeCopied, message, item)
        break
      default:
        break
    }
  }

  const copyToClipboard = (textToBeCopied, message, item) => {
    const errorMessage = `Copying to clipboard failed. Here's my ${item}: ${textToBeCopied}`
    if (textToBeCopied != null || undefined) {
      if (navigator.clipboard) {
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
      } else {
        toast(errorMessage, {
          toastId: errorMessage,
        })
      }
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
  return (
    <motion.div
      variants={ContainerVariants}
      animate={isExiting ? "exit" : "animate"}
      className="social_wrap "
    >
      {socialItems}
    </motion.div>
  )
}

export default SocialItems
