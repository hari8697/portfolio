import { AlbumListStyled } from "../styles/App.styled"
import Image from "next/image"
import { motion } from "framer-motion"

interface Props {
  data: {}[]
  id: string
}

function AlbumList({ data, id, albumImagesProps, setSwiperOpen }) {
  // const albumArr = Array.from({ length: data.count }, (_, i) => i + 1)

  let comps = data.map((item, idx) => {
    // const static_import_url = require(`https:${item.fields.file.url}`)

    const { width, height } = item.fields.file.details.image
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          // duration: 0.3,
          // ease: [0.6, 0.01, -0.05, 0.9],
          // ease: "easeOut",
          stiffness: 200,
          damping: 10,
        }}
        className="img_wrapper"
        key={idx}
        onClick={() => {
          setSwiperOpen(true)
        }}
      >
        <Image
          {...albumImagesProps[idx]}
          key={idx}
          className="album_image"
          src={`https:${item.fields.file.url}`}
          width={width}
          height={height}
          layout="responsive"
          alt=""
          objectFit="cover"
          placeholder="blur"
          lazyBoundary="500px"
        />
      </motion.div>
    )
  })

  return <AlbumListStyled className="album">{comps}</AlbumListStyled>
}

export default AlbumList
