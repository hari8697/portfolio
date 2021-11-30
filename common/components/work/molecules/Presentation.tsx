interface Props {
  data: string
}

const Presentation = ({ data }: Props) => {
  return (
    <div className="presentation">
      <h5>Presentation</h5>
      <p>{data}</p>
    </div>
  )
}

export default Presentation
