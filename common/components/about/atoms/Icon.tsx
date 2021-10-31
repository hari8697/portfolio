import Image from "next/image"
import Tooltip from "./Tooltip"

const Icon = (props) => {
  const { icon, name } = props

  return (
    <div className="icon_wrap">
      <Image src={icon} className="icon noselect" layout="fill" />
      <Tooltip></Tooltip>
    </div>
  )
}

export default Icon
