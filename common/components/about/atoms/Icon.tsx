import Image from "next/image"

const Icon = (props) => {
  const { icon } = props

  return (
    <div className="icon_wrap">
      <Image src={icon} className="icon noselect" layout="fill" />
    </div>
  )
}

export default Icon
