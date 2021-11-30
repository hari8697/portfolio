interface Props {
  data: {
    count: number
  }
  id: string
}

function AlbumList({ data, id }: Props) {
  const albumArr = Array.from({ length: data.count }, (_, i) => i + 1)

  let comps = albumArr.map((item, idx) => {
    return <img key={idx} src={`/work/${id}/${item}.png`} alt="" />
  })

  return <div className="album">{comps}</div>
}

export default AlbumList
