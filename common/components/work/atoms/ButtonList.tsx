interface Props {
  data: [
    {
      id: number
      title: string
      icon: boolean
      icon_src: string
    }
  ]
}

const TextList = ({ data }: Props) => {
  let comps = data.map((el, idx) => {
    return (
      <button key={idx}>
        {el.title}
        {el.icon && <img src={el.icon_src} alt="" />}
      </button>
    )
  })

  return <>{comps}</>
}
export default TextList
