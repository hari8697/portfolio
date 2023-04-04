import TextLink from "../atoms/TextLink"
import styled from "styled-components"
import { toast } from "react-toastify"
import { device } from "@/common/utils"
import { H5_Sizing, text_size_template } from "../../styled"
import { useEffect } from "react"

const LinksWrap = () => {
  const LinksArr = [
    {
      text: "Email",
      val: "email",
    },
    { text: "Twitter", val: "https://twitter.com/deathspace_" },
    { text: "Github", val: "https://github.com/hari8697" },
    { text: "Instagram", val: "https://www.instagram.com/deathspace.design/" },
    {
      text: "Discord",
      val: "discord",
    },
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
        textToBeCopied = "DeathSpace#6488"
        copyToClipboard(textToBeCopied, message, item)
        break
      default:
        break
    }
  }

  const copyToClipboard = (textToBeCopied, message, item) => {
    const errorMessage = `Copying to clipboard failed. Here's my ${item}: ${textToBeCopied}`
    if (textToBeCopied != null || undefined) {
      // console.log(navigator.clipboard)

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

  const getLinkComps = (element, index) => {
    const { text: item, val } = element
    // console.log(val)

    const attributes = () => {
      switch (val) {
        case "email":
        case "discord":
          return {
            onClick: () => handleClick(val),
          }
        default:
          return { href: val }
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
        <TextLink
          addComma={index == LinksArr.length - 1 ? false : true}
          key={index}
        >
          {item}
        </TextLink>
      </a>
    )
  }

  let linksComponents = LinksArr.map((element, index) => {
    return getLinkComps(element, index)
  })

  return <LinksWrapStyled>{linksComponents}</LinksWrapStyled>
}

const LinksWrapStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: pre-wrap;
  max-width: 22ch;

  margin-bottom: 280px;

  @media ${device.desktopL} {
    ${H5_Sizing};
    /* max-width: 21ch; */
  }
`

export default LinksWrap
