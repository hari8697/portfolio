import { AlbumListStyled } from "../styles/App.styled"
import Image from "next/image"

interface Props {
  data: {
    count: number
  }
  id: string
}

function AlbumList({ data, id }: Props) {
  const albumArr = Array.from({ length: data.count }, (_, i) => i + 1)

  let comps = albumArr.map((item, idx) => {
    const static_import_url = require(`public/work/${id}/${item}.webp`)
    return (
      <div className="img_wrapper" key={idx}>
        <Image
          key={idx}
          className="album_image"
          src={static_import_url}
          alt=""
          objectFit="cover"
          placeholder="blur"
        />
      </div>
    )
  })

  return <AlbumListStyled className="album">{comps}</AlbumListStyled>
}

export default AlbumList
