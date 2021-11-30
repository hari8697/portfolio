import { AlbumListStyled } from "../styles/App.styled"

interface Props {
  data: {
    count: number
  }
  id: string
}

function AlbumList({ data, id }: Props) {
  const albumArr = Array.from({ length: data.count }, (_, i) => i + 1)

  let comps = albumArr.map((item, idx) => {
    return (
      <img
        className="album_image"
        key={idx}
        src={`/work/${id}/${item}.png`}
        alt=""
      />
    )
  })

  return <AlbumListStyled className="album">{comps}</AlbumListStyled>
}

export default AlbumList
