import { AlbumListStyled } from "../styles/App.styled"
import Image from "next/image"

interface Props {
  data: {}[]
  id: string
}

function AlbumList({ data, id }) {
  // const albumArr = Array.from({ length: data.count }, (_, i) => i + 1)

  let comps = data.map((item, idx) => {
    // const static_import_url = require(`https:${item.fields.file.url}`)

    const { width, height } = item.fields.file.details.image
    return (
      <div className="img_wrapper" key={idx}>
        <Image
          key={idx}
          className="album_image"
          src={`https:${item.fields.file.url}`}
          width={width}
          height={height}
          layout="responsive"
          alt=""
          objectFit="cover"
          // placeholder="blur"
          lazyBoundary="500px"
        />
      </div>
    )
  })

  return <AlbumListStyled className="album">{comps}</AlbumListStyled>
}

export default AlbumList
